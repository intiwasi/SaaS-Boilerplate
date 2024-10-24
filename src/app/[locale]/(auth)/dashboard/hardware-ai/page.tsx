'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '../../../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../../components/ui/card';
import { Label } from '../../../../../components/ui/label';
import { Slider } from '../../../../../components/ui/slider';
import { Switch } from '../../../../../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../../../components/ui/tabs';

type AnalysisResult = {
  answer: string;
  explanation: string;
  confidence: number;
};

type Answer = 'A' | 'B' | 'C' | 'D' | 'E';

const ANSWER_COLORS: Record<Answer, string> = {
  A: '#3B82F6', // Blue
  B: '#8B5CF6', // Purple
  C: '#6366F1', // Indigo
  D: '#EC4899', // Pink
  E: '#F43F5E', // Rose
};

const VIBRATION_PATTERNS: Record<Answer, number[]> = {
  A: [100],
  B: [100, 100],
  C: [100, 100, 100],
  D: [100, 100, 100, 100],
  E: [100, 100, 100, 100, 100],
};

export default function HardwareAnalyzer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [deviceId, setDeviceId] = useState<string>('');
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [captureInterval, setCaptureInterval] = useState<number>(5);
  const [isCapturing, setIsCapturing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [activeResponseMode, setActiveResponseMode] = useState<'ctest' | 'color' | 'vibrate'>('ctest');
  const [showColorMode, setShowColorMode] = useState(true);
  const [useVibration, setUseVibration] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  const startVideo = useCallback(async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setDevices(videoDevices);

      if (videoDevices.length > 0) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: deviceId || videoDevices[0].deviceId },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }
    } catch (error) {
      console.error('Error accessing video stream:', error);
    }
  }, [deviceId]);

  const captureAndAnalyze = useCallback(async () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');

        try {
          const response = await fetch('/api/analyze-hardware', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: imageDataUrl }),
          });

          if (!response.ok) {
            throw new Error('Failed to process image');
          }

          const data = await response.json();
          setResult(data);

          if (useVibration && data.answer in VIBRATION_PATTERNS) {
            navigator.vibrate(VIBRATION_PATTERNS[data.answer as Answer]);
          }
        } catch (error) {
          console.error('Error processing image:', error);
        }
      }
    }
  }, [useVibration]);

  const toggleCapture = useCallback(() => {
    if (isCapturing) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else {
      intervalRef.current = setInterval(captureAndAnalyze, captureInterval * 1000);
    }
    setIsCapturing(!isCapturing);
  }, [isCapturing, captureInterval, captureAndAnalyze]);

  const handleVibration = useCallback((answer: string) => {
    if (answer in VIBRATION_PATTERNS) {
      navigator.vibrate(VIBRATION_PATTERNS[answer as Answer]);
    }
  }, []);

  useEffect(() => {
    startVideo();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startVideo]);

  return (
    <div className="space-y-6">
      {/* Camera Setup Section */}
      <Card className="ai-card">
        <CardHeader>
          <CardTitle className="ai-gradient-text">Hardware Analysis Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Button
                onClick={startVideo}
                variant="secondary"
                className="ai-button-outline"
              >
                Start Camera
              </Button>
              <Button
                onClick={toggleCapture}
                className={isCapturing ? 'bg-red-600 hover:bg-red-700' : 'ai-button'}
              >
                {isCapturing ? 'Stop Analysis' : 'Start Analysis'}
              </Button>
            </div>

            <select
              className="ai-input w-full"
              value={deviceId}
              onChange={e => setDeviceId(e.target.value)}
            >
              {devices.map(device => (
                <option key={device.deviceId} value={device.deviceId}>
                  {device.label || `Camera ${device.deviceId}`}
                </option>
              ))}
            </select>

            <div className="space-y-2">
              <Label className="text-gray-300">
                Analysis Interval:
                {' '}
                {captureInterval}
                s
              </Label>
              <Slider
                value={[captureInterval]}
                onValueChange={([value]) => setCaptureInterval(value)}
                min={1}
                max={30}
                step={1}
                className="py-4"
              />
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
              <video
                ref={videoRef}
                autoPlay
                className="w-full"
                aria-label="Hardware analysis feed"
              >
                <track kind="captions" />
              </video>
            </div>
            <canvas ref={canvasRef} className="hidden" width="640" height="480" />
          </div>
        </CardContent>
      </Card>

      {/* Analysis Results Section */}
      <Card className="ai-card">
        <CardHeader>
          <CardTitle className="ai-gradient-text">Analysis Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeResponseMode} onValueChange={setActiveResponseMode}>
            <TabsList className="border border-gray-700 bg-gray-800">
              <TabsTrigger value="ctest" className="data-[state=active]:bg-gray-700">Detailed Analysis</TabsTrigger>
              <TabsTrigger value="color" className="data-[state=active]:bg-gray-700">Visual Indicator</TabsTrigger>
              <TabsTrigger value="vibrate" className="data-[state=active]:bg-gray-700">Haptic Feedback</TabsTrigger>
            </TabsList>

            <TabsContent value="ctest">
              {result && (
                <div className="space-y-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                  <div className="ai-gradient-text text-center text-6xl font-bold">
                    {result.answer}
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p className="font-semibold">Analysis Details:</p>
                    <p>{result.explanation}</p>
                    <div className="mt-2">
                      <span className="font-semibold">Confidence: </span>
                      {result.confidence}
                      %
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="color">
              {result && result.answer in ANSWER_COLORS && (
                <div
                  className="flex h-96 w-full items-center justify-center rounded-lg text-6xl font-bold transition-colors duration-300"
                  style={{ backgroundColor: ANSWER_COLORS[result.answer as Answer] }}
                >
                  {result.answer}
                </div>
              )}
            </TabsContent>

            <TabsContent value="vibrate">
              <div className="space-y-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                <div className="text-center">
                  <p className="mb-4 text-gray-300">Current feedback pattern:</p>
                  {result && (
                    <>
                      <div className="ai-gradient-text mb-4 text-6xl font-bold">
                        {result.answer}
                      </div>
                      <Button
                        onClick={() => handleVibration(result.answer)}
                        className="ai-button"
                      >
                        Test Feedback
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 space-y-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="color-mode"
                checked={showColorMode}
                onCheckedChange={setShowColorMode}
              />
              <Label htmlFor="color-mode" className="text-gray-300">Enable Visual Indicators</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="vibration"
                checked={useVibration}
                onCheckedChange={setUseVibration}
              />
              <Label htmlFor="vibration" className="text-gray-300">Enable Haptic Feedback</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

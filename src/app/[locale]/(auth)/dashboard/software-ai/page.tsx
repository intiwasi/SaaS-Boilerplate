'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type AnalysisResult = {
  answer: string;
  explanation: string;
  confidence: number;
};

const ANSWER_COLORS = {
  A: '#FF0000', // Red
  B: '#00FF00', // Green
  C: '#0000FF', // Blue
  D: '#FFFF00', // Yellow
  E: '#FF00FF', // Purple
};

const VIBRATION_PATTERNS = {
  A: [100],
  B: [100, 100],
  C: [100, 100, 100],
  D: [100, 100, 100, 100],
  E: [100, 100, 100, 100, 100],
};

export default function PracticeQuestionAnalyzer() {
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

  // Initialize video and get available devices
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

  // Capture and analyze frame
  const captureAndAnalyze = useCallback(async () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');

        try {
          const response = await fetch('https://api.openrouter.ai/api/v1/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer YOUR_API_KEY', // Replace with your API key
              'HTTP-Referer': 'http://localhost:3000', // Replace with your domain
            },
            body: JSON.stringify({
              model: 'openai/gpt-4-vision-preview',
              messages: [
                {
                  role: 'user',
                  content: [
                    {
                      type: 'text',
                      text: 'Analyze this practice question image. Provide the answer and explanation in JSON format with fields: {"answer": "A-E", "explanation": "detailed explanation", "confidence": 0-100}',
                    },
                    { type: 'image_url', image_url: { url: imageDataUrl } },
                  ],
                },
              ],
              max_tokens: 500,
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to process image');
          }

          const data = await response.json();
          const parsedResult = JSON.parse(data.choices[0].message.content);
          setResult(parsedResult);

          if (useVibration && VIBRATION_PATTERNS[parsedResult.answer]) {
            navigator.vibrate(VIBRATION_PATTERNS[parsedResult.answer]);
          }
        } catch (error) {
          console.error('Error processing image:', error);
        }
      }
    }
  }, [useVibration]);

  // Toggle continuous capture
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

  // Handle manual vibration test
  const handleVibration = useCallback((answer: string) => {
    if (VIBRATION_PATTERNS[answer]) {
      navigator.vibrate(VIBRATION_PATTERNS[answer]);
    }
  }, []);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Initialize video when component mounts
  useEffect(() => {
    startVideo();
  }, [startVideo]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto space-y-6 p-4">
        {/* Rest of the JSX remains the same */}
        {/* Camera Setup Section */}
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle className="text-gray-100">Camera Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button
                  onClick={startVideo}
                  variant="secondary"
                  className="bg-gray-800 hover:bg-gray-700"
                >
                  Start Camera
                </Button>
                <Button
                  onClick={toggleCapture}
                  variant={isCapturing ? 'destructive' : 'default'}
                  className={isCapturing ? 'bg-red-600 hover:bg-red-500' : 'bg-blue-600 hover:bg-blue-500'}
                >
                  {isCapturing ? 'Stop Capture' : 'Start Capture'}
                </Button>
              </div>

              <select
                className="w-full rounded border-gray-700 bg-gray-800 p-2 text-gray-100"
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
                  Capture Interval:
                  {captureInterval}
                  s
                </Label>
                <Slider
                  value={[captureInterval]}
                  onValueChange={value => setCaptureInterval(value[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="py-4"
                />
              </div>

              <div className="overflow-hidden rounded-lg bg-gray-800">
                <video ref={videoRef} autoPlay className="w-full" />
              </div>
              <canvas ref={canvasRef} className="hidden" width="640" height="480" />
            </div>
          </CardContent>
        </Card>

        {/* Response Section */}
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle className="text-gray-100">Response Area</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="view" className="space-y-4">
              <TabsList className="bg-gray-800">
                <TabsTrigger value="view">View Options</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="view">
                <div className="space-y-4">
                  <Tabs value={activeResponseMode} onValueChange={(v: 'ctest' | 'color' | 'vibrate') => setActiveResponseMode(v)}>
                    <TabsList className="bg-gray-800">
                      <TabsTrigger value="ctest">C-Test Response</TabsTrigger>
                      <TabsTrigger value="color">Color Mode</TabsTrigger>
                      <TabsTrigger value="vibrate">Vibration Mode</TabsTrigger>
                    </TabsList>

                    <TabsContent value="ctest" className="mt-4">
                      {result && (
                        <div className="space-y-4 rounded-lg bg-gray-800 p-4">
                          <div className="text-center text-6xl font-bold text-blue-400">
                            {result.answer}
                          </div>
                          <div className="space-y-2 text-gray-300">
                            <p className="font-semibold">Explanation:</p>
                            <p>{result.explanation}</p>
                            <div className="mt-2">
                              <span className="font-semibold">Confidence:</span>
                              {' '}
                              {result.confidence}
                              %
                            </div>
                          </div>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="color" className="mt-4">
                      {result && (
                        <div
                          className="flex h-96 w-full items-center justify-center rounded-lg text-6xl font-bold transition-colors duration-300"
                          style={{ backgroundColor: ANSWER_COLORS[result.answer] }}
                        >
                          {result.answer}
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="vibrate" className="mt-4">
                      <div className="space-y-4 rounded-lg bg-gray-800 p-4">
                        <div className="text-center">
                          <p className="mb-4 text-gray-300">Current vibration pattern:</p>
                          {result && (
                            <>
                              <div className="mb-4 text-6xl font-bold text-blue-400">
                                {result.answer}
                              </div>
                              <Button
                                onClick={() => handleVibration(result.answer)}
                                className="bg-blue-600 hover:bg-blue-500"
                              >
                                Test Vibration
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>

              <TabsContent value="settings">
                <div className="space-y-4 rounded-lg bg-gray-800 p-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="color-mode"
                      checked={showColorMode}
                      onCheckedChange={setShowColorMode}
                    />
                    <Label htmlFor="color-mode" className="text-gray-300">Enable Color Mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="vibration"
                      checked={useVibration}
                      onCheckedChange={setUseVibration}
                    />
                    <Label htmlFor="vibration" className="text-gray-300">Enable Vibration Feedback</Label>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

'use client';

import { useTranslations } from 'next-intl';

import { PayPalButton } from '@/components/PayPalButton';
import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import { BILLING_INTERVAL } from '@/types/Subscription';

export default function PricesPage() {
  const t = useTranslations('Prices');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Unlock the Power of AI Analysis
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl">
            Experience next-generation hardware and software analysis powered by advanced artificial intelligence.
            Choose your path to technological excellence.
          </p>
        </div>

        <div className="relative mt-8 grid gap-8 md:grid-cols-2">
          {/* Decorative elements */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />

          {/* Basic Plan */}
          <div className="relative">
            <PricingCard
              planId="basic"
              price={100}
              interval={BILLING_INTERVAL.MONTH}
              button={(
                <div className="mt-8">
                  <PayPalButton amount="100.00" description="Basic AI Analysis Plan" />
                </div>
              )}
            >
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-blue-400">Basic AI Analysis</h3>
                <p className="mb-6 text-gray-300">Perfect for individuals and small projects seeking AI-powered insights</p>
              </div>
              <div className="space-y-4">
                <PricingFeature>
                  <span className="flex items-center">
                    <svg className="mr-2 size-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    AI-Powered Hardware Analysis
                  </span>
                </PricingFeature>
                <PricingFeature>
                  <span className="flex items-center">
                    <svg className="mr-2 size-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Intelligent Security Scanning
                  </span>
                </PricingFeature>
                <PricingFeature>
                  <span className="flex items-center">
                    <svg className="mr-2 size-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Weekly AI Performance Reports
                  </span>
                </PricingFeature>
              </div>
            </PricingCard>
          </div>

          {/* Premium Plan */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
              Most Popular
            </div>
            <PricingCard
              planId="premium"
              price={400}
              interval={BILLING_INTERVAL.MONTH}
              button={(
                <div className="mt-8">
                  <PayPalButton amount="400.00" description="Premium AI Analysis Plan" />
                </div>
              )}
            >
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-purple-400">Premium AI Analysis</h3>
                <p className="mb-6 text-gray-300">Advanced AI analysis for businesses requiring comprehensive insights</p>
              </div>
              <div className="space-y-4">
                <PricingFeature>
                  <span className="flex items-center">
                    <svg className="mr-2 size-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Deep Learning Analysis
                  </span>
                </PricingFeature>
                <PricingFeature>
                  <span className="flex items-center">
                    <svg className="mr-2 size-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                    Neural Network Optimization
                  </span>
                </PricingFeature>
                <PricingFeature>
                  <span className="flex items-center">
                    <svg className="mr-2 size-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Real-time AI Monitoring
                  </span>
                </PricingFeature>
                <PricingFeature>
                  <span className="flex items-center">
                    <svg className="mr-2 size-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    Advanced Data Analytics
                  </span>
                </PricingFeature>
                <PricingFeature>
                  <span className="flex items-center">
                    <svg className="mr-2 size-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Mobile AI Integration
                  </span>
                </PricingFeature>
              </div>
            </PricingCard>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mx-auto max-w-2xl text-gray-400">
            All plans include our cutting-edge AI technology, secure cloud storage, and dedicated support team.
            Upgrade or downgrade anytime as your needs evolve.
          </p>
        </div>
      </div>
    </div>
  );
}

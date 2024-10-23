'use client';

import { PayPalButton } from '@/components/PayPalButton';

export default function FreePricingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Upgrade to Premium Plan
      </h1>
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-2xl font-semibold">Premium Features</h2>
          <p className="mb-4 text-gray-600">
            Get access to all premium features for just $100/month
          </p>
          <div className="mb-6 text-xl font-bold text-primary">
            $100
            {' '}
            <span className="text-sm text-gray-600">/month</span>
          </div>
        </div>

        <div className="mb-8">
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Advanced Analytics
            </li>
            <li className="flex items-center">
              <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Priority Support
            </li>
            <li className="flex items-center">
              <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Custom Integrations
            </li>
          </ul>
        </div>

        <PayPalButton amount="100.00" description="Premium Plan Subscription" />
      </div>
    </div>
  );
}

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useState } from 'react';

// Renders errors or successful transactions on the screen.
function Message({ content }: { content: string }) {
  return <p className="mt-4 text-sm text-gray-600">{content}</p>;
}

type PayPalButtonProps = {
  amount?: string;
  description?: string;
};

export function PayPalButton({ amount = '100.00', description = 'Monthly Subscription' }: PayPalButtonProps) {
  const initialOptions = {
    clientId: 'AVz5Ze5HdsTNsmw5xLKLd1Nhn5inAQ7vF_-4E3fh07rI25fT7Iinep1NQ5NwjmPJrvAJpU8A4FIqtdnG',
    currency: 'USD',
    intent: 'capture',
  };

  const [message, setMessage] = useState('');

  return (
    <div className="mx-auto w-full max-w-md">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: 'rect',
            layout: 'vertical',
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  amount: {
                    value: amount,
                    currency_code: 'USD',
                  },
                  description,
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            if (actions.order) {
              const order = await actions.order.capture();
              setMessage(`Transaction completed! Order ID: ${order.id}`);
              console.log('Capture result', order);
            }
          }}
          onError={(err) => {
            setMessage(`An error occurred: ${err.message}`);
            console.error('PayPal error', err);
          }}
        />
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
}

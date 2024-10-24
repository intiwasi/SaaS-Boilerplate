import React from 'react';

export const PricingFeature = (props: { children: React.ReactNode }) => {
  return (
    <li className="flex items-center justify-center space-x-2 text-gray-300 transition-colors duration-200 hover:text-gray-100">
      {props.children}
    </li>
  );
};

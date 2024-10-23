import { useTranslations } from 'next-intl';

import { PricingPlanList } from '../../utils/AppConfig';
import { PricingCard } from './PricingCard';
import { PricingFeature } from './PricingFeature';

const PLAN_FEATURES = {
  screenshot: [
    'Screenshot Analysis',
    'Instant Answers',
    'Detailed Explanations',
    'Mobile App Access',
    '24/7 Support',
  ],
  pro: [
    'Real-time Video Analysis',
    'Physical Adapter Included',
    'Webapp Access',
    'Priority Support',
    'Advanced Explanations',
  ],
  enterprise: [
    'Custom Integration',
    'Bulk Licensing',
    'API Access',
    'Dedicated Support',
    'Custom Features',
  ],
};

export const PricingInformation = (props: {
  buttonList: Record<string, React.ReactNode>;
}) => {
  const t = useTranslations('PricingPlan');

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
      {Object.values(PricingPlanList).map(plan => (
        <PricingCard
          key={plan.id}
          planId={plan.id}
          price={plan.price}
          interval={plan.interval}
          button={props.buttonList[plan.id]}
        >
          {PLAN_FEATURES[plan.id as keyof typeof PLAN_FEATURES].map((feature, index) => (
            <PricingFeature key={index}>
              {feature}
            </PricingFeature>
          ))}
        </PricingCard>
      ))}
    </div>
  );
};

import { AppConfig } from '../utils/AppConfig';

export const Logo = (props: {
  isTextHidden?: boolean;
}) => (
  <div className="flex items-center text-xl font-semibold">
    <svg
      className="mr-2 size-8 stroke-blue-600 stroke-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Neural network icon */}
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <line x1="6" y1="8" x2="6" y2="16" />
      <line x1="18" y1="8" x2="18" y2="16" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="18" x2="16" y2="18" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="6" x2="12" y2="12" />
      <line x1="16" y1="6" x2="12" y2="12" />
      <line x1="8" y1="18" x2="12" y2="12" />
      <line x1="16" y1="18" x2="12" y2="12" />
    </svg>
    {!props.isTextHidden && (
      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text font-bold text-transparent">
        {AppConfig.name}
      </span>
    )}
  </div>
);

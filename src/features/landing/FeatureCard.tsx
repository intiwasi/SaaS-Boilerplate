export const FeatureCard = (props: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700">
    {/* Ambient glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    {/* Content */}
    <div className="relative">
      {/* Icon container */}
      <div className="flex size-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 p-2 transition-all duration-300 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-indigo-500/20">
        {props.icon}
      </div>

      {/* Title */}
      <div className="mt-4 text-lg font-bold text-gray-100 transition-colors duration-300 group-hover:text-white">
        {props.title}
      </div>

      {/* Divider */}
      <div className="my-3 h-0.5 w-8 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-indigo-500/50" />

      {/* Description */}
      <div className="mt-2 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
        {props.children}
      </div>
    </div>
  </div>
);

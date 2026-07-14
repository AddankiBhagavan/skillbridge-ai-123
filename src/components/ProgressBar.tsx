interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  showValue?: boolean;
  color?: 'primary' | 'secondary' | 'accent' | 'error' | 'warning';
  height?: 'sm' | 'md' | 'lg';
}

const colorMap = {
  primary: 'from-primary-500 to-primary-600',
  secondary: 'from-secondary-500 to-secondary-600',
  accent: 'from-accent-400 to-accent-500',
  error: 'from-red-500 to-red-600',
  warning: 'from-amber-400 to-amber-500',
};

const heightMap = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-3.5',
};

// Horizontal progress bar with gradient fill and optional label
export function ProgressBar({
  value,
  label,
  showValue = true,
  color = 'primary',
  height = 'md',
}: ProgressBarProps) {
  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-sm font-medium text-ink-700">{label}</span>}
          {showValue && (
            <span className="text-sm font-semibold text-ink-600">{value}%</span>
          )}
        </div>
      )}
      <div className={`w-full ${heightMap[height]} bg-ink-100 rounded-full overflow-hidden`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colorMap[color]} transition-all duration-1000 ease-out`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

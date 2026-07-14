interface BarChartProps {
  data: { label: string; value: number }[];
  unit?: string;
  maxValue?: number;
  color?: string;
  height?: number;
}

// Lightweight animated bar chart — no external charting library needed
export function BarChart({
  data,
  unit = '',
  maxValue,
  color = '#10b981',
  height = 200,
}: BarChartProps) {
  const max = maxValue ?? Math.max(...data.map((d) => d.value)) * 1.2;

  return (
    <div className="flex items-end justify-between gap-2" style={{ height }}>
      {data.map((item, i) => {
        const barHeight = (item.value / max) * 100;
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
            <span className="text-xs font-semibold text-ink-600">
              {item.value}
              {unit}
            </span>
            <div
              className="w-full rounded-t-lg transition-all duration-1000 ease-out relative group"
              style={{
                height: `${barHeight}%`,
                background: `linear-gradient(to top, ${color}, ${color}aa)`,
                animation: `fadeInUp 0.8s ease-out ${i * 80}ms both`,
              }}
            >
              <div className="absolute inset-0 rounded-t-lg bg-white/0 group-hover:bg-white/10 transition-colors" />
            </div>
            <span className="text-xs text-ink-500 font-medium">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

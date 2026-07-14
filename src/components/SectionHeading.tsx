import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}

// Consistent section header with optional eyebrow label and subtitle
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl mb-12`}>
      {eyebrow && (
        <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-ink-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-ink-500 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

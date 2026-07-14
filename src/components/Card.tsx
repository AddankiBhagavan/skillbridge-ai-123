import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

// Base card component with consistent shadow, border, and optional hover lift
export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-ink-100 shadow-sm ${
        hover
          ? 'hover:shadow-xl hover:shadow-ink-900/5 hover:-translate-y-1 transition-all duration-300'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

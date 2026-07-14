import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Wraps children with a scroll-triggered fade-in-up animation
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  return (
    <div
      className={`animate-fade-in-up opacity-0 ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
}

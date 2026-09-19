import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'burgundy' | 'surface' | 'muted' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'surface',
  className = '',
}) => {
  const variantClasses = {
    burgundy: 'bg-[#6E2C3A]/10 text-[#6E2C3A] border border-[#6E2C3A]/20',
    surface: 'bg-[#EFE9E0] text-[#242326] border border-[#D8D0C5]',
    muted: 'bg-[#EFE9E0]/60 text-[#625D59] border border-[#D8D0C5]/60',
    outline: 'border border-[#D8D0C5] text-[#625D59]',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

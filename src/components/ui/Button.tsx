import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'burgundy' | 'charcoal' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isPill?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'burgundy',
  size = 'md',
  isPill = false,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6E2C3A]/40 focus:ring-offset-2 focus:ring-offset-[#F7F3EC] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variantClasses = {
    burgundy:
      'bg-[#6E2C3A] text-[#F7F3EC] hover:bg-[#58232E] shadow-sm hover:shadow',
    charcoal:
      'bg-[#242326] text-[#F7F3EC] hover:bg-[#151417] shadow-sm hover:shadow',
    outline:
      'border border-[#D8D0C5] bg-transparent text-[#242326] hover:border-[#6E2C3A] hover:text-[#6E2C3A] hover:bg-[#EFE9E0]/40',
    ghost:
      'bg-transparent text-[#242326] hover:bg-[#EFE9E0] hover:text-[#6E2C3A]',
  };

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const radiusClass = isPill ? 'rounded-full' : 'rounded-[6px]';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${radiusClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

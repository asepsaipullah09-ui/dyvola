import React from 'react';
import Image from 'next/image';

export type LogoVariant = 'horizontal' | 'symbol' | 'wordmark' | 'primary-stacked';

interface DyvolaLogoProps {
  variant?: LogoVariant;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const DyvolaLogo: React.FC<DyvolaLogoProps> = ({
  variant = 'horizontal',
  className = '',
  width,
  height,
  priority = false,
}) => {
  let src = '/images/logo/dyvola-horizontal.png';
  let defaultWidth = 140;
  let defaultHeight = 36;
  let alt = 'DYVOLA Logo';

  switch (variant) {
    case 'symbol':
      src = '/images/logo/dyvola-symbol.png';
      defaultWidth = 40;
      defaultHeight = 40;
      alt = 'DYVOLA Monogram Symbol';
      break;
    case 'wordmark':
      src = '/images/logo/dyvola-wordmark.png';
      defaultWidth = 130;
      defaultHeight = 32;
      alt = 'DYVOLA Wordmark';
      break;
    case 'primary-stacked':
      src = '/images/logo/dyvola-primary-stacked.png';
      defaultWidth = 170;
      defaultHeight = 95;
      alt = 'DYVOLA — Your Moments, Made Lasting';
      break;
    case 'horizontal':
    default:
      src = '/images/logo/dyvola-horizontal.png';
      defaultWidth = 140;
      defaultHeight = 36;
      alt = 'DYVOLA Logo';
      break;
  }

  const finalWidth = width || defaultWidth;
  const finalHeight = height || defaultHeight;

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={finalWidth}
        height={finalHeight}
        priority={priority}
        className="h-auto w-auto max-h-full object-contain"
      />
    </div>
  );
};

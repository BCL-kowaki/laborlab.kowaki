import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'text';
  as?: React.ElementType;
}

export function Container({
  size = 'default',
  as: Component = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'w-full mx-auto px-container-px',
        {
          'max-w-container': size === 'default',
          'max-w-container-narrow': size === 'narrow',
          'max-w-container-text': size === 'text',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

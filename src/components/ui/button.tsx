import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-300 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-700 focus-visible:ring-primary shadow-sm hover:shadow-md',
        secondary:
          'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
        accent:
          'bg-accent text-white hover:bg-accent-500 focus-visible:ring-accent shadow-sm hover:shadow-md',
        'accent-outline':
          'border-2 border-accent text-accent hover:bg-accent hover:text-white focus-visible:ring-accent',
        ghost:
          'text-primary hover:text-accent underline-offset-4 hover:underline focus-visible:ring-primary',
        'ghost-white':
          'text-white hover:text-accent-200 underline-offset-4 hover:underline focus-visible:ring-white',
        'outline-white':
          'border-2 border-white text-white hover:bg-white hover:text-primary focus-visible:ring-white',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-base',
        xl: 'h-16 px-10 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

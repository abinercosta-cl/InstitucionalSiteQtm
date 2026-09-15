import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-quantum-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-quantum-primary text-white shadow-md shadow-[#1e70bf]/25 hover:bg-quantum-accent hover:shadow-lg hover:shadow-[#1e70bf]/35 active:scale-[0.98]',
        destructive:
          'bg-red-600 text-white shadow-sm hover:bg-red-700 active:scale-[0.98]',
        outline:
          'border border-[#1a3452] bg-transparent text-quantum-light hover:bg-[#0d1d2f] hover:border-quantum-primary/50',
        secondary:
          'bg-[#0d1d2f] text-quantum-light border border-[#1a3452] hover:bg-[#122840] hover:border-quantum-primary/40',
        ghost:
          'text-slate-300 hover:bg-white/5 hover:text-white',
        link:
          'text-quantum-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 rounded-lg px-3 text-xs',
        lg: 'h-12 rounded-xl px-8 text-base',
        icon: 'h-10 w-10 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
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
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

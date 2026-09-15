import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-quantum-primary focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-quantum-primary text-white hover:bg-quantum-accent',
        secondary:
          'border-[#1a3452] bg-[#0d1d2f] text-slate-300 hover:bg-[#122840]',
        destructive:
          'border-transparent bg-red-600 text-white hover:bg-red-700',
        outline:
          'text-quantum-light border-[#1a3452]',
        quantum:
          'border-quantum-primary/30 bg-quantum-primary/10 text-quantum-primary',
        success:
          'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

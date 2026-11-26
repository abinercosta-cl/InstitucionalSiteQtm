import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('font-bold tracking-wide text-paper', className)}>
      <span className="text-brand">&lt;</span>QUANTUM<span className="text-brand">&gt;/</span>
    </span>
  );
}

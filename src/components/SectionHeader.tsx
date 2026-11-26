import type { ReactNode } from 'react';

type Props = {
  index: string;
  title: string;
  children?: ReactNode;
};

/** Cabeçalho padrão das seções: número, título e um texto curto à direita. */
export function SectionHeader({ index, title, children }: Props) {
  return (
    <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-12">
      <p className="text-sm text-muted md:col-span-2 tabular-nums">{index}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl md:col-span-5">
        {title}
      </h2>
      {children && (
        <div className="text-base leading-relaxed text-muted md:col-span-5">{children}</div>
      )}
    </div>
  );
}

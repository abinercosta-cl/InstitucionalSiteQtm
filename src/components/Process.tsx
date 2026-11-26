import { workflow } from '@/data/content';
import { SectionHeader } from './SectionHeader';

export function Process() {
  return (
    <section id="como-trabalhamos" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="03" title={workflow.title}>
          {workflow.text}
        </SectionHeader>

        <ol className="mt-12">
          {workflow.steps.map((step, i) => (
            <li key={step.title} className="grid gap-4 border-t border-line py-8 md:grid-cols-12">
              <div className="flex flex-wrap items-baseline gap-x-4 md:col-span-4 md:block">
                <span className="text-sm text-brand tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-2xl font-semibold text-paper md:mt-2">{step.title}</h3>
                <p className="text-sm text-muted md:mt-1">{step.duration}</p>
              </div>
              <p className="leading-relaxed text-muted md:col-span-5">{step.description}</p>
              <ul className="space-y-1 text-sm text-paper/85 md:col-span-3">
                {step.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="border-t border-line pt-6 text-sm text-muted">
          O diagnóstico começa, em média, até <strong className="text-paper">{workflow.responseTime}</strong> depois do primeiro contato.
        </p>
      </div>
    </section>
  );
}

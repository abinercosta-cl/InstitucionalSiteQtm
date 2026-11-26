import { about, differentials } from '@/data/content';
import { SectionHeader } from './SectionHeader';

export function About() {
  return (
    <section id="sobre" className="bg-ink-2 px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="02" title={about.title} />

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-6 md:col-start-3">
            <p className="text-xl leading-relaxed text-paper">{about.lead}</p>
            {about.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-muted">
                {p}
              </p>
            ))}
            <dl className="grid gap-6 pt-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-paper">Missão</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">{about.mission}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-paper">Visão</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">{about.vision}</dd>
              </div>
            </dl>
          </div>

          <ul className="space-y-6 md:col-span-3 md:col-start-10">
            {about.stats.map((stat) => (
              <li key={stat.label} className="border-l-2 border-brand pl-4">
                <span className="block text-4xl font-semibold tracking-tight text-paper">{stat.value}</span>
                <span className="block text-sm text-muted">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d) => (
            <div key={d.title}>
              <h3 className="font-semibold text-paper">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

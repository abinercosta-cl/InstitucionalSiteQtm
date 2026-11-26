import { services } from '@/data/content';
import { SectionHeader } from './SectionHeader';

export function Services() {
  return (
    <section id="servicos" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="01" title="O que fazemos">
          Três frentes que podem ser contratadas separadas ou juntas, conforme o momento da sua empresa.
        </SectionHeader>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="flex flex-col bg-ink p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-paper">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
              <ul className="mt-8 space-y-2 border-t border-line pt-6 text-sm text-paper/85">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-brand" aria-hidden>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

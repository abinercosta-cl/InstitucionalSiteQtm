import { ArrowRight } from 'lucide-react';
import { hero, services } from '@/data/content';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section id="topo" className="px-4 pb-8 pt-32 sm:px-6 md:pb-12 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-muted">{hero.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
          {hero.title}
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted md:col-span-7">{hero.text}</p>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
            <Button asChild size="lg">
              <a href="#contato">
                {hero.primaryCta}
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicos">{hero.secondaryCta}</a>
            </Button>
          </div>
        </div>

        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6 text-sm text-paper/70">
          {services.map((s) => (
            <li key={s.id}>{s.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

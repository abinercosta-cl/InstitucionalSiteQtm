import { useState, type FormEvent, type ReactNode } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { company, contact } from '@/data/content';
import { buildWhatsappUrl, maskPhone, validateLead, type Lead } from '@/lib/whatsapp';
import { Button } from './ui/button';
import { SectionHeader } from './SectionHeader';

const emptyLead: Lead = { name: '', company: '', whatsapp: '', service: '' };

const inputClass =
  'w-full rounded-md border border-line bg-ink px-3 py-3 text-paper placeholder:text-muted/60 focus:border-brand focus:outline-none';

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-paper/85">
        {label}
      </label>
      {children}
    </div>
  );
}

export function Contact() {
  const [lead, setLead] = useState<Lead>(emptyLead);
  const [error, setError] = useState<string | null>(null);

  const update = (key: keyof Lead) => (value: string) => setLead((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const problem = validateLead(lead);
    setError(problem);
    if (problem) return;
    window.open(buildWhatsappUrl(company.whatsappNumber, lead), '_blank', 'noopener');
  };

  const channels = [
    { label: 'WhatsApp', value: company.whatsappDisplay, href: `https://wa.me/${company.whatsappNumber}` },
    { label: 'E-mail', value: company.email, href: `mailto:${company.email}` },
    { label: 'Endereço', value: company.city, href: 'https://maps.google.com/?q=Santar%C3%A9m,PA' },
  ];

  return (
    <section id="contato" className="bg-ink-2 px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="04" title={contact.title}>
          {contact.text}
        </SectionHeader>

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <form onSubmit={handleSubmit} noValidate className="space-y-5 md:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="nome" label="Nome">
                <input
                  id="nome"
                  autoComplete="name"
                  value={lead.name}
                  onChange={(e) => update('name')(e.target.value)}
                  className={inputClass}
                />
              </Field>
              <Field id="empresa" label="Empresa">
                <input
                  id="empresa"
                  autoComplete="organization"
                  value={lead.company}
                  onChange={(e) => update('company')(e.target.value)}
                  className={inputClass}
                />
              </Field>
              <Field id="whatsapp" label="WhatsApp">
                <input
                  id="whatsapp"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  placeholder="(93) 90000-0000"
                  value={lead.whatsapp}
                  onChange={(e) => update('whatsapp')(maskPhone(e.target.value))}
                  className={inputClass}
                />
              </Field>
              <Field id="servico" label="Serviço">
                <div className="relative">
                  <select
                    id="servico"
                    value={lead.service}
                    onChange={(e) => update('service')(e.target.value)}
                    className={`${inputClass} cursor-pointer appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Escolha uma opção
                    </option>
                    {contact.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                    aria-hidden
                  />
                </div>
              </Field>
            </div>

            <p role="alert" className="min-h-5 text-sm text-red-300">
              {error}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button type="submit" size="lg">
                {contact.submit}
                <ArrowUpRight />
              </Button>
              <p className="text-sm text-muted">{contact.note}</p>
            </div>
          </form>

          <div className="md:col-span-4 md:col-start-9">
            <ul className="divide-y divide-line border-y border-line">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm text-muted">{c.label}</span>
                      <span className="block break-all text-paper group-hover:text-brand">{c.value}</span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-muted group-hover:text-brand" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">Atendimento: {company.hours.toLowerCase()}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

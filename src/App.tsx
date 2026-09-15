import React, { useState, useRef, useEffect } from 'react';
import EmblaCarousel from 'embla-carousel';
import {
  servicesData,
  aboutData,
  differentialsData,
  contactData,
} from './data/servicesData.js';
import { TimelineSection } from './components/TimelineSection';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Menu, X } from 'lucide-react';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estado do formulário de contato
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    whatsapp: '',
    service: '',
  });
  const [formError, setFormError] = useState<string | null>(null);

  // Inicialização do Carrossel de Serviços com Embla
  const emblaRef = useRef<HTMLDivElement>(null);
  const emblaApiRef = useRef<ReturnType<typeof EmblaCarousel> | null>(null);

  useEffect(() => {
    if (emblaRef.current) {
      emblaApiRef.current = EmblaCarousel(emblaRef.current, {
        loop: true,
        align: 'start',
      });
    }
    return () => {
      emblaApiRef.current?.destroy();
    };
  }, []);

  const handlePrevSlide = () => emblaApiRef.current?.scrollPrev();
  const handleNextSlide = () => emblaApiRef.current?.scrollNext();

  // Máscara dinâmica para o campo WhatsApp
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);
    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    } else if (val.length > 0) {
      val = `(${val}`;
    }
    setFormData((prev) => ({ ...prev, whatsapp: val }));
  };

  // Envio do formulário dinâmico para o WhatsApp
  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, company, whatsapp, service } = formData;

    if (!name.trim() || !company.trim() || !whatsapp.trim() || !service.trim()) {
      setFormError('Por favor, preencha todos os campos para continuar.');
      return;
    }

    setFormError(null);

    const message = [
      `Olá, equipe Quantum! Vim pelo site institucional e gostaria de solicitar um orçamento.`,
      ``,
      `👤 *Nome:* ${name.trim()}`,
      `🏢 *Empresa:* ${company.trim()}`,
      `📱 *WhatsApp:* ${whatsapp.trim()}`,
      `🎯 *Serviço de interesse:* ${service.trim()}`,
      ``,
      `Gostaria de conversar sobre as soluções e agendar uma reunião de diagnóstico.`,
    ].join('\n');

    const targetPhone = contactData.whatsappTargetNumber || '5593999999999';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-quantum-bg text-slate-300 font-sans selection:bg-quantum-primary selection:text-white">
      {/* 1. NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#07111e]/90 backdrop-blur-md border-b border-[#1a3452] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-2xl font-bold tracking-wider text-quantum-light"
          >
            <span className="text-quantum-primary">&lt;</span>QUANTUM
            <span className="text-quantum-primary">&gt;/</span>
          </a>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#servicos" className="hover:text-quantum-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-quantum-primary transition-colors">
              Sobre
            </a>
            <a href="#diferenciais" className="hover:text-quantum-primary transition-colors">
              Diferenciais
            </a>
            <a href="#metodologia" className="hover:text-quantum-primary transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-quantum-accent animate-pulse" />
              Metodologia
            </a>
            <a href="#contato" className="hover:text-quantum-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Botão Ação Desktop */}
          <div className="hidden sm:flex items-center gap-4">
            <Button asChild size="default" className="cursor-pointer">
              <a href="#contato">Falar com Especialista</a>
            </Button>
          </div>

          {/* Botão Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-[#0d1d2f] border border-[#1a3452]"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Retrátil Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07111e]/95 border-b border-[#1a3452] px-6 py-5 space-y-4 backdrop-blur-lg">
            <nav className="flex flex-col gap-4 text-base font-semibold">
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-quantum-primary py-1 text-slate-200"
              >
                Serviços
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-quantum-primary py-1 text-slate-200"
              >
                Sobre
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-quantum-primary py-1 text-slate-200"
              >
                Diferenciais
              </a>
              <a
                href="#metodologia"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-quantum-primary py-1 text-slate-200 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-quantum-accent" />
                Metodologia
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-quantum-primary py-1 text-slate-200"
              >
                Contato
              </a>
            </nav>
            <div className="pt-3 border-t border-[#1a3452]">
              <Button asChild className="w-full">
                <a href="#contato" onClick={() => setMobileMenuOpen(false)}>
                  Falar com Especialista
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#07111e] via-[#0b1b2e] to-[#07111e] border-b border-[#1a3452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center relative z-10">
          {/* Tag Superior */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-quantum-primary/10 text-quantum-primary border border-quantum-primary/20 shadow-sm shadow-[#1e70bf]/10 mb-6">
            <i className="ph ph-sparkle text-sm" /> Marketing Estratégico & Desenvolvimento de Software
          </span>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-quantum-light max-w-4xl mx-auto leading-tight text-center">
            Acelerando marcas e construindo o futuro digital da sua empresa.
          </h1>

          {/* Parágrafo de Apoio */}
          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal text-center">
            Unimos gestão de mídias sociais, tráfego pago e engenharia de software sob medida para posicionar o seu negócio com autoridade e alta performance.
          </p>

          {/* Botões de Ação */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#servicos">Conhecer Soluções</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <a href="#metodologia">Nossa Metodologia</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE SERVIÇOS (COM CARROSSEL) */}
      <section id="servicos" className="py-20 bg-[#0d1d2f]/60 border-b border-[#1a3452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-quantum-primary/10 text-quantum-primary border border-quantum-primary/20 mb-3">
              <i className="ph ph-briefcase text-sm" /> O Que Fazemos
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-quantum-light sm:text-4xl">
              Nossas Soluções
            </h2>
            <p className="mt-4 text-slate-400">
              Estratégias integradas para empresas que buscam presença marcante e sistemas eficientes.
            </p>
          </div>

          {/* Container do Carrossel Embla */}
          <div className="relative max-w-5xl mx-auto px-4 sm:px-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {servicesData.map((service) => (
                  <div
                    key={service.id}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4"
                  >
                    <div className="h-full p-8 rounded-2xl bg-[#0d1d2f] border border-[#1a3452] shadow-xl hover:border-quantum-primary/60 transition-all duration-300 flex flex-col justify-between quantum-card-hover">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-quantum-primary/10 flex items-center justify-center text-quantum-primary text-2xl mb-6 border border-quantum-primary/20">
                          <i className={`ph ${service.icon}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-quantum-light mb-3">
                          {service.title}
                        </h3>
                        <p className="text-slate-400 mb-6 leading-relaxed text-left">
                          {service.description}
                        </p>
                      </div>
                      <ul className="space-y-3 text-sm text-slate-300 text-left pt-4 border-t border-[#1a3452]">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <i className="ph ph-check-circle text-quantum-primary font-bold" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles do Carrossel */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 rounded-full bg-[#0d1d2f] border border-[#1a3452] flex items-center justify-center text-quantum-primary hover:bg-quantum-primary hover:text-white shadow-md transition-all cursor-pointer z-10"
              aria-label="Anterior"
            >
              <i className="ph ph-caret-left text-xl" />
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 rounded-full bg-[#0d1d2f] border border-[#1a3452] flex items-center justify-center text-quantum-primary hover:bg-quantum-primary hover:text-white shadow-md transition-all cursor-pointer z-10"
              aria-label="Próximo"
            >
              <i className="ph ph-caret-right text-xl" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO SOBRE */}
      <section id="sobre" className="py-24 bg-[#07111e] border-b border-[#1a3452] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Conteúdo Textual */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-quantum-primary/10 text-quantum-primary border border-quantum-primary/20">
                <i className="ph ph-buildings text-sm" /> {aboutData.badge}
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-quantum-light tracking-tight leading-tight">
                {aboutData.title}
              </h2>

              <p className="text-lg font-semibold text-quantum-primary leading-relaxed">
                {aboutData.subtitle}
              </p>

              <p className="text-slate-400 leading-relaxed">
                {aboutData.description}
              </p>

              {/* Cards Missão e Visão */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {aboutData.cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0d1d2f] border border-[#1a3452] shadow-sm hover:border-quantum-primary/40 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-quantum-primary/10 flex items-center justify-center text-quantum-primary text-lg border border-quantum-primary/20">
                        <i className={`ph ${card.icon}`} />
                      </div>
                      <h3 className="font-bold text-quantum-light">{card.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloco de Estatísticas e Métricas */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0d1d2f] to-[#050c17] text-white shadow-2xl relative overflow-hidden border border-quantum-primary/30">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-quantum-primary/20 blur-3xl rounded-full" />

                <h3 className="text-xl font-bold mb-6 text-slate-100 flex items-center gap-2">
                  <i className="ph ph-chart-polar text-quantum-primary text-2xl" /> Impacto em Números
                </h3>

                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {aboutData.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                      <div className="text-quantum-primary text-2xl mb-1">
                        <i className={`ph ${stat.icon}`} />
                      </div>
                      <div className="text-3xl font-extrabold text-quantum-light tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 text-center">
                  Compromisso com inovação, performance e resultados mensuráveis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 bg-[#0d1d2f]/60 border-b border-[#1a3452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-quantum-primary/10 text-quantum-primary border border-quantum-primary/20 mb-3">
              <i className="ph ph-star text-sm" /> Nossos Diferenciais
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-quantum-light sm:text-4xl">
              Por que escolher a Quantum?
            </h2>
            <p className="mt-4 text-slate-400">
              Unimos a inteligência de negócios ao rigor técnico para entregar resultados consistentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentialsData.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-[#0d1d2f] border border-[#1a3452] shadow-md quantum-card-hover flex flex-col justify-between text-left"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-quantum-primary/10 border border-quantum-primary/20 flex items-center justify-center text-quantum-primary text-3xl mb-6">
                    <i className={`ph ${item.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-quantum-light mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1a3452] flex items-center gap-2 text-xs font-bold text-quantum-primary">
                  <span>Saiba mais</span>
                  <i className="ph ph-arrow-right" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NOVA SEÇÃO: RADIAL ORBITAL TIMELINE (METODOLOGIA & CICLO DE ENTREGA) */}
      <TimelineSection
        title="Nossa Metodologia & Ciclo de Entrega"
        subtitle="Unimos o rigor técnico da engenharia de software com a precisão do marketing de alta conversão em um fluxo circular e contínuo de aceleração."
      />

      {/* 7. SEÇÃO DE CONTATO */}
      <section id="contato" className="py-24 bg-[#07111e] border-b border-[#1a3452] relative overflow-hidden">
        {/* Glows decorativos */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-quantum-primary/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-quantum-accent/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-quantum-primary/10 text-quantum-primary border border-quantum-primary/20 mb-3">
              <i className="ph ph-chat-circle-dots text-sm" /> {contactData.badge}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-quantum-light sm:text-4xl">
              {contactData.title}
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
              {contactData.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Formulário Minimalista */}
            <div className="lg:col-span-7 bg-[#0d1d2f] border border-quantum-card rounded-2xl p-6 sm:p-10 shadow-2xl relative flex flex-col justify-between">
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-quantum-light flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-quantum-primary/10 border border-quantum-primary/20 flex items-center justify-center text-quantum-primary text-lg">
                      <i className="ph ph-paper-plane-tilt" />
                    </span>
                    {contactData.form.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2">
                    {contactData.form.description}
                  </p>
                </div>

                <form onSubmit={handleSubmitContact} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                      >
                        {contactData.form.fields.name.label} <span className="text-quantum-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <i className="ph ph-user text-lg" />
                        </div>
                        <input
                          type="text"
                          id="contact-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={contactData.form.fields.name.placeholder}
                          className="w-full pl-10 pr-4 py-3 bg-[#07111e]/90 border border-quantum-card rounded-xl text-quantum-light placeholder:text-slate-500 text-sm focus:outline-none focus:border-quantum-primary focus:ring-1 focus:ring-quantum-primary hover:border-quantum-primary/40 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Empresa */}
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                      >
                        {contactData.form.fields.company.label} <span className="text-quantum-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <i className="ph ph-buildings text-lg" />
                        </div>
                        <input
                          type="text"
                          id="contact-company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={contactData.form.fields.company.placeholder}
                          className="w-full pl-10 pr-4 py-3 bg-[#07111e]/90 border border-quantum-card rounded-xl text-quantum-light placeholder:text-slate-500 text-sm focus:outline-none focus:border-quantum-primary focus:ring-1 focus:ring-quantum-primary hover:border-quantum-primary/40 transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* WhatsApp */}
                    <div>
                      <label
                        htmlFor="contact-whatsapp"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                      >
                        {contactData.form.fields.whatsapp.label} <span className="text-quantum-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <i className="ph ph-whatsapp-logo text-lg" />
                        </div>
                        <input
                          type="tel"
                          id="contact-whatsapp"
                          required
                          value={formData.whatsapp}
                          onChange={handlePhoneChange}
                          placeholder={contactData.form.fields.whatsapp.placeholder}
                          className="w-full pl-10 pr-4 py-3 bg-[#07111e]/90 border border-quantum-card rounded-xl text-quantum-light placeholder:text-slate-500 text-sm focus:outline-none focus:border-quantum-primary focus:ring-1 focus:ring-quantum-primary hover:border-quantum-primary/40 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Serviço de Interesse */}
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                      >
                        {contactData.form.fields.service.label} <span className="text-quantum-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <i className="ph ph-briefcase text-lg" />
                        </div>
                        <select
                          id="contact-service"
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full pl-10 pr-10 py-3 bg-[#07111e]/90 border border-quantum-card rounded-xl text-quantum-light text-sm focus:outline-none focus:border-quantum-primary focus:ring-1 focus:ring-quantum-primary hover:border-quantum-primary/40 transition-all duration-200 appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="bg-[#0d1d2f] text-slate-500">
                            {contactData.form.fields.service.placeholder}
                          </option>
                          {contactData.form.fields.service.options.map((opt: string, idx: number) => (
                            <option key={idx} value={opt} className="bg-[#0d1d2f] text-slate-200">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                          <i className="ph ph-caret-down text-base" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feedback de erro */}
                  {formError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                      <i className="ph ph-warning-circle text-base shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Botão Envio Primário */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-2 py-4 gap-3 text-base font-semibold group shadow-lg shadow-[#1e70bf]/25 hover:shadow-xl hover:shadow-[#1e70bf]/40"
                  >
                    <i className="ph-bold ph-whatsapp-logo text-2xl group-hover:scale-110 transition-transform" />
                    <span>{contactData.form.buttonText}</span>
                    <i className="ph ph-arrow-right text-lg group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              <div className="mt-6 pt-4 border-t border-quantum-card text-center">
                <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
                  <i className="ph ph-shield-check text-quantum-primary text-base" />
                  {contactData.form.disclaimer}
                </p>
              </div>
            </div>

            {/* Card Lateral com Canais Diretos */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0d1d2f] to-[#07111e] border border-quantum-card shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-quantum-primary/15 blur-3xl rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {contactData.channelsCard.badge}
                  </div>

                  <h3 className="text-2xl font-bold text-quantum-light">
                    {contactData.channelsCard.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 mb-6">
                    {contactData.channelsCard.subtitle}
                  </p>

                  <div className="space-y-4">
                    {contactData.channelsCard.channels.map((channel: any) => (
                      <a
                        key={channel.id}
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-quantum-primary/50 transition-all duration-200 flex items-start gap-4 block cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-xl bg-quantum-primary/10 border border-quantum-primary/20 flex items-center justify-center text-quantum-primary text-2xl shrink-0 group-hover:scale-105 group-hover:bg-quantum-primary group-hover:text-white transition-all">
                          <i className={`ph ${channel.icon}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-semibold text-slate-400 group-hover:text-slate-300 transition-colors uppercase tracking-wider">
                            {channel.label}
                          </div>
                          <div className="text-base font-bold text-quantum-light mt-0.5 truncate group-hover:text-quantum-accent transition-colors">
                            {channel.value}
                          </div>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                            {channel.description}
                          </p>
                        </div>
                        <div className="text-slate-500 group-hover:text-quantum-primary group-hover:translate-x-1 transition-all self-center text-lg">
                          <i className="ph ph-arrow-up-right" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-quantum-card flex items-center gap-2 text-xs text-slate-400 relative z-10">
                  <i className="ph ph-clock text-quantum-primary text-base shrink-0" />
                  <span>{contactData.channelsCard.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RODAPÉ */}
      <footer className="py-12 bg-[#07111e] text-slate-400 border-t border-[#1a3452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-xl font-bold tracking-wider text-quantum-light">
              <span className="text-quantum-primary">&lt;</span>QUANTUM
              <span className="text-quantum-primary">&gt;/</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Santarém - Pará | Soluções em Marketing e Tecnologia
            </p>
          </div>
          <p className="text-xs text-slate-500">&copy; 2026 Quantum. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

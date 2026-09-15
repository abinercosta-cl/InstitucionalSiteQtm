import './style.css';
import {
  servicesData,
  aboutData,
  differentialsData,
  contactData,
} from './data/servicesData.js';
import { renderServicesCarousel } from './components/serviceCarousel.js';

// Renderiza a estrutura completa da Landing Page com o Tema Dark Sofisticado (Rich Navy)
document.querySelector('#app').innerHTML = `
  <!-- NAVBAR -->
  <header class="fixed top-0 left-0 w-full z-50 bg-[#07111e]/90 backdrop-blur-md border-b border-[#1a3452] shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2 text-2xl font-bold tracking-wider text-quantum-light">
        <span class="text-quantum-primary">&lt;</span>QUANTUM<span class="text-quantum-primary">&gt;/</span>
      </a>

      <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
        <a href="#servicos" class="hover:text-quantum-primary transition-colors">Serviços</a>
        <a href="#sobre" class="hover:text-quantum-primary transition-colors">Sobre</a>
        <a href="#diferenciais" class="hover:text-quantum-primary transition-colors">Diferenciais</a>
        <a href="#contato" class="hover:text-quantum-primary transition-colors">Contato</a>
      </nav>

      <a href="#contato" class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-quantum-primary hover:bg-quantum-accent rounded-lg shadow-md shadow-[#1e70bf]/25 hover:shadow-lg hover:shadow-[#1e70bf]/35 transition-all duration-200 cursor-pointer">
        Falar com Especialista
      </a>
    </div>
  </header>

  <!-- HERO SECTION (Rich Navy Background #07111e) -->
  <section class="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#07111e] via-[#0b1b2e] to-[#07111e] border-b border-[#1a3452]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center relative z-10">
      
      <!-- Tag Superior -->
      <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-quantum-primary/10 text-quantum-primary border border-quantum-primary/20 shadow-sm shadow-[#1e70bf]/10 mb-6">
        <i class="ph ph-sparkle text-sm"></i> Marketing Estratégico & Desenvolvimento de Software
      </span>

      <!-- Título Principal (H1 em Branco Puro / Slate Claro #f8fafc) -->
      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-quantum-light max-w-4xl mx-auto leading-tight text-center">
        Acelerando marcas e construindo o futuro digital da sua empresa.
      </h1>

      <!-- Parágrafo de Apoio (Texto Secundário em Slate Suave #94a3b8) -->
      <p class="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal text-center">
        Unimos gestão de mídias sociais, tráfego pago e engenharia de software sob medida para posicionar o seu negócio com autoridade e alta performance.
      </p>

      <!-- Botões de Ação -->
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <a href="#servicos" class="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-quantum-primary hover:bg-quantum-accent rounded-lg shadow-lg shadow-[#1e70bf]/25 hover:shadow-xl hover:shadow-[#1e70bf]/35 transition-all text-center">
          Conhecer Soluções
        </a>
        <a href="#sobre" class="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-quantum-light hover:text-quantum-primary bg-[#0d1d2f] hover:bg-[#122840] border border-[#1a3452] hover:border-quantum-primary/50 rounded-lg shadow-sm transition-all text-center">
          Saiba Mais
        </a>
      </div>

    </div>
  </section>

  <!-- 1. SEÇÃO DE SERVIÇOS (Fundo de Cards #0d1d2f com opacidade) -->
  <section id="servicos" class="py-20 bg-[#0d1d2f]/60 border-b border-[#1a3452]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-quantum-primary/10 text-quantum-primary border border-quantum-primary/20 mb-3">
          <i class="ph ph-briefcase text-sm"></i> O Que Fazemos
        </span>
        <h2 class="text-3xl font-bold tracking-tight text-quantum-light sm:text-4xl">Nossas Soluções</h2>
        <p class="mt-4 text-slate-400">Estratégias integradas para empresas que buscam presença marcante e sistemas eficientes.</p>
      </div>

      <!-- Container do Carrossel -->
      <div id="services-carousel-container"></div>
    </div>
  </section>

  <!-- 2. SEÇÃO SOBRE (Fundo #07111e) -->
  <section id="sobre" class="py-24 bg-[#07111e] border-b border-[#1a3452] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Conteúdo Textual (Esquerda) -->
        <div class="lg:col-span-7 space-y-6 text-left">
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-quantum-primary/10 text-quantum-primary border border-quantum-primary/20">
            <i class="ph ph-buildings text-sm"></i> ${aboutData.badge}
          </span>
          
          <h2 class="text-3xl sm:text-4xl font-extrabold text-quantum-light tracking-tight leading-tight">
            ${aboutData.title}
          </h2>
          
          <p class="text-lg font-semibold text-quantum-primary leading-relaxed">
            ${aboutData.subtitle}
          </p>

          <p class="text-slate-400 leading-relaxed">
            ${aboutData.description}
          </p>

          <!-- Cards de Missão e Visão -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            ${aboutData.cards
              .map(
                (card) => `
              <div class="p-5 rounded-xl bg-[#0d1d2f] border border-[#1a3452] shadow-sm hover:border-quantum-primary/40 transition-all">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-quantum-primary/10 flex items-center justify-center text-quantum-primary text-lg border border-quantum-primary/20">
                    <i class="ph ${card.icon}"></i>
                  </div>
                  <h3 class="font-bold text-quantum-light">${card.title}</h3>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">${card.description}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </div>

        <!-- Bloco de Estatísticas e Métricas (Card Corporativo Escuro) -->
        <div class="lg:col-span-5">
          <div class="p-8 rounded-2xl bg-gradient-to-br from-[#0d1d2f] to-[#050c17] text-white shadow-2xl relative overflow-hidden border border-quantum-primary/30">
            <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-quantum-primary/20 blur-3xl rounded-full"></div>
            
            <h3 class="text-xl font-bold mb-6 text-slate-100 flex items-center gap-2">
              <i class="ph ph-chart-polar text-quantum-primary text-2xl"></i> Impacto em Números
            </h3>

            <div class="grid grid-cols-2 gap-6 relative z-10">
              ${aboutData.stats
                .map(
                  (stat) => `
                <div class="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div class="text-quantum-primary text-2xl mb-1">
                    <i class="ph ${stat.icon}"></i>
                  </div>
                  <div class="text-3xl font-extrabold text-quantum-light tracking-tight">${stat.value}</div>
                  <div class="text-xs text-slate-400 mt-1 font-medium">${stat.label}</div>
                </div>
              `
                )
                .join('')}
            </div>

            <div class="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 text-center">
              Compromisso com inovação, performance e resultados mensuráveis.
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 3. SEÇÃO DIFERENCIAIS -->
  <section id="diferenciais" class="py-24 bg-[#0d1d2f]/60 border-b border-[#1a3452]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-quantum-primary/10 text-quantum-primary border border-quantum-primary/20 mb-3">
          <i class="ph ph-star text-sm"></i> Nossos Diferenciais
        </span>
        <h2 class="text-3xl font-bold tracking-tight text-quantum-light sm:text-4xl">Por que escolher a Quantum?</h2>
        <p class="mt-4 text-slate-400">Unimos a inteligência de negócios ao rigor técnico para entregar resultados consistentes.</p>
      </div>

      <!-- Grid de Diferenciais -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        ${differentialsData
          .map(
            (item) => `
          <div class="p-8 rounded-2xl bg-[#0d1d2f] border border-[#1a3452] shadow-md quantum-card-hover flex flex-col justify-between text-left">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-quantum-primary/10 border border-quantum-primary/20 flex items-center justify-center text-quantum-primary text-3xl mb-6">
                <i class="ph ${item.icon}"></i>
              </div>
              <h3 class="text-xl font-bold text-quantum-light mb-3">${item.title}</h3>
              <p class="text-sm text-slate-400 leading-relaxed">${item.description}</p>
            </div>
            <div class="mt-6 pt-4 border-t border-[#1a3452] flex items-center gap-2 text-xs font-bold text-quantum-primary">
              <span>Saiba mais</span>
              <i class="ph ph-arrow-right"></i>
            </div>
          </div>
        `
          )
          .join('')}
      </div>

    </div>
  </section>

  <!-- 4. SEÇÃO DE CONTATO (Tema Rich Navy Dark) -->
  <section id="contato" class="py-24 bg-[#07111e] border-b border-[#1a3452] relative overflow-hidden">
    <!-- Glows decorativos de fundo -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-quantum-primary/10 blur-[130px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-quantum-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Cabeçalho da Seção -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-quantum-primary/10 text-quantum-primary border border-quantum-primary/20 mb-3">
          <i class="ph ph-chat-circle-dots text-sm"></i> ${contactData.badge}
        </span>
        <h2 class="text-3xl font-bold tracking-tight text-quantum-light sm:text-4xl">
          ${contactData.title}
        </h2>
        <p class="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          ${contactData.subtitle}
        </p>
      </div>

      <!-- Grid Principal: Formulário + Card Lateral -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Formulário Minimalista (7 Colunas) -->
        <div class="lg:col-span-7 bg-[#0d1d2f] border border-quantum-card rounded-2xl p-6 sm:p-10 shadow-2xl relative flex flex-col justify-between">
          <div>
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-quantum-light flex items-center gap-3">
                <span class="w-9 h-9 rounded-lg bg-quantum-primary/10 border border-quantum-primary/20 flex items-center justify-center text-quantum-primary text-lg">
                  <i class="ph ph-paper-plane-tilt"></i>
                </span>
                ${contactData.form.title}
              </h3>
              <p class="text-sm text-slate-400 mt-2">
                ${contactData.form.description}
              </p>
            </div>

            <form id="contact-form" class="space-y-5" novalidate>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <!-- Nome -->
                <div>
                  <label for="contact-name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    ${contactData.form.fields.name.label} <span class="text-quantum-primary">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <i class="ph ph-user text-lg"></i>
                    </div>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="${contactData.form.fields.name.placeholder}"
                      class="w-full pl-10 pr-4 py-3 bg-[#07111e]/90 border border-quantum-card rounded-xl text-quantum-light placeholder:text-slate-500 text-sm focus:outline-none focus:border-quantum-primary focus:ring-1 focus:ring-quantum-primary hover:border-quantum-primary/40 transition-all duration-200"
                    />
                  </div>
                </div>

                <!-- Empresa -->
                <div>
                  <label for="contact-company" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    ${contactData.form.fields.company.label} <span class="text-quantum-primary">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <i class="ph ph-buildings text-lg"></i>
                    </div>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      required
                      placeholder="${contactData.form.fields.company.placeholder}"
                      class="w-full pl-10 pr-4 py-3 bg-[#07111e]/90 border border-quantum-card rounded-xl text-quantum-light placeholder:text-slate-500 text-sm focus:outline-none focus:border-quantum-primary focus:ring-1 focus:ring-quantum-primary hover:border-quantum-primary/40 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <!-- WhatsApp -->
                <div>
                  <label for="contact-whatsapp" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    ${contactData.form.fields.whatsapp.label} <span class="text-quantum-primary">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <i class="ph ph-whatsapp-logo text-lg"></i>
                    </div>
                    <input
                      type="tel"
                      id="contact-whatsapp"
                      name="whatsapp"
                      required
                      placeholder="${contactData.form.fields.whatsapp.placeholder}"
                      class="w-full pl-10 pr-4 py-3 bg-[#07111e]/90 border border-quantum-card rounded-xl text-quantum-light placeholder:text-slate-500 text-sm focus:outline-none focus:border-quantum-primary focus:ring-1 focus:ring-quantum-primary hover:border-quantum-primary/40 transition-all duration-200"
                    />
                  </div>
                </div>

                <!-- Serviço de Interesse -->
                <div>
                  <label for="contact-service" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    ${contactData.form.fields.service.label} <span class="text-quantum-primary">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <i class="ph ph-briefcase text-lg"></i>
                    </div>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      class="w-full pl-10 pr-10 py-3 bg-[#07111e]/90 border border-quantum-card rounded-xl text-quantum-light text-sm focus:outline-none focus:border-quantum-primary focus:ring-1 focus:ring-quantum-primary hover:border-quantum-primary/40 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected class="bg-[#0d1d2f] text-slate-500">
                        ${contactData.form.fields.service.placeholder}
                      </option>
                      ${contactData.form.fields.service.options
                        .map(
                          (opt) => `
                        <option value="${opt}" class="bg-[#0d1d2f] text-slate-200">${opt}</option>
                      `
                        )
                        .join('')}
                    </select>
                    <div class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <i class="ph ph-caret-down text-base"></i>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Mensagem de erro/validação sutil inline -->
              <div id="contact-form-error" class="hidden p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                <i class="ph ph-warning-circle text-base shrink-0"></i>
                <span id="contact-form-error-msg">Por favor, preencha todos os campos obrigatórios.</span>
              </div>

              <!-- Botão de Envio Primário -->
              <button
                type="submit"
                id="contact-submit-btn"
                class="w-full mt-2 inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold text-white bg-quantum-primary hover:bg-quantum-accent rounded-xl shadow-lg shadow-[#1e70bf]/25 hover:shadow-xl hover:shadow-[#1e70bf]/40 active:scale-[0.99] transition-all duration-200 cursor-pointer group"
              >
                <i class="ph-bold ph-whatsapp-logo text-2xl group-hover:scale-110 transition-transform"></i>
                <span>${contactData.form.buttonText}</span>
                <i class="ph ph-arrow-right text-lg group-hover:translate-x-1 transition-transform"></i>
              </button>
            </form>
          </div>

          <div class="mt-6 pt-4 border-t border-quantum-card text-center">
            <p class="text-xs text-slate-400 flex items-center justify-center gap-1.5">
              <i class="ph ph-shield-check text-quantum-primary text-base"></i>
              ${contactData.form.disclaimer}
            </p>
          </div>
        </div>

        <!-- Card Lateral com Canais Diretos (5 Colunas) -->
        <div class="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div class="p-8 rounded-2xl bg-gradient-to-br from-[#0d1d2f] to-[#07111e] border border-quantum-card shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between">
            <!-- Glow decorativo interno -->
            <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-quantum-primary/15 blur-3xl rounded-full pointer-events-none"></div>

            <div class="relative z-10">
              <!-- Badge de Status -->
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                ${contactData.channelsCard.badge}
              </div>

              <!-- Título do Card Lateral -->
              <h3 class="text-2xl font-bold text-quantum-light">
                ${contactData.channelsCard.title}
              </h3>
              <p class="text-xs text-slate-400 mt-1 mb-6">
                ${contactData.channelsCard.subtitle}
              </p>

              <!-- Lista de Canais Diretos -->
              <div class="space-y-4">
                ${contactData.channelsCard.channels
                  .map(
                    (channel) => `
                  <a
                    href="${channel.href}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-quantum-primary/50 transition-all duration-200 flex items-start gap-4 block cursor-pointer"
                  >
                    <div class="w-12 h-12 rounded-xl bg-quantum-primary/10 border border-quantum-primary/20 flex items-center justify-center text-quantum-primary text-2xl shrink-0 group-hover:scale-105 group-hover:bg-quantum-primary group-hover:text-white transition-all">
                      <i class="ph ${channel.icon}"></i>
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="text-xs font-semibold text-slate-400 group-hover:text-slate-300 transition-colors uppercase tracking-wider">
                        ${channel.label}
                      </div>
                      <div class="text-base font-bold text-quantum-light mt-0.5 truncate group-hover:text-quantum-accent transition-colors">
                        ${channel.value}
                      </div>
                      <p class="text-xs text-slate-400 mt-1 line-clamp-1">
                        ${channel.description}
                      </p>
                    </div>
                    <div class="text-slate-500 group-hover:text-quantum-primary group-hover:translate-x-1 transition-all self-center text-lg">
                      <i class="ph ph-arrow-up-right"></i>
                    </div>
                  </a>
                `
                  )
                  .join('')}
              </div>
            </div>

            <!-- Rodapé com Horário de Atendimento -->
            <div class="mt-8 pt-6 border-t border-quantum-card flex items-center gap-2 text-xs text-slate-400 relative z-10">
              <i class="ph ph-clock text-quantum-primary text-base shrink-0"></i>
              <span>${contactData.channelsCard.availability}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- RODAPÉ (Tema Rich Navy Dark) -->
  <footer class="py-12 bg-[#07111e] text-slate-400 border-t border-[#1a3452]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="text-center sm:text-left">
        <p class="text-xl font-bold tracking-wider text-quantum-light">
          <span class="text-quantum-primary">&lt;</span>QUANTUM<span class="text-quantum-primary">&gt;/</span>
        </p>
        <p class="text-xs text-slate-400 mt-1">Santarém - Pará | Soluções em Marketing e Tecnologia</p>
      </div>
      <p class="text-xs text-slate-500">&copy; 2026 Quantum. Todos os direitos reservados.</p>
    </div>
  </footer>
`;

// Função para inicializar validação e redirecionamento dinâmico para WhatsApp
function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  const phoneInput = document.querySelector('#contact-whatsapp');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      if (value.length > 6) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        e.target.value = `(${value}`;
      }
    });
  }

  const errorBox = document.querySelector('#contact-form-error');
  const errorMsg = document.querySelector('#contact-form-error-msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#contact-name')?.value.trim();
    const company = document.querySelector('#contact-company')?.value.trim();
    const whatsapp = document.querySelector('#contact-whatsapp')?.value.trim();
    const service = document.querySelector('#contact-service')?.value;

    if (!name || !company || !whatsapp || !service) {
      if (errorBox && errorMsg) {
        errorMsg.textContent =
          'Por favor, preencha todos os campos para continuar.';
        errorBox.classList.remove('hidden');
      }
      return;
    }

    if (errorBox) {
      errorBox.classList.add('hidden');
    }

    // Monta a mensagem dinâmica para o WhatsApp
    const message = [
      `Olá, equipe Quantum! Vim pelo site institucional e gostaria de solicitar um orçamento.`,
      ``,
      `👤 *Nome:* ${name}`,
      `🏢 *Empresa:* ${company}`,
      `📱 *WhatsApp:* ${whatsapp}`,
      `🎯 *Serviço de interesse:* ${service}`,
      ``,
      `Gostaria de conversar sobre as soluções e agendar uma reunião de diagnóstico.`,
    ].join('\n');

    const targetPhone = contactData.whatsappTargetNumber || '5593991359644';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(message)}`;

    // Redireciona diretamente para a API do WhatsApp
    window.open(whatsappUrl, '_blank');
  });
}

// Inicializa o carrossel de serviços e o formulário de contato
renderServicesCarousel();
initContactForm();

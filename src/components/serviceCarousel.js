import EmblaCarousel from 'embla-carousel';
import { servicesData } from '../data/servicesData.js';

export function renderServicesCarousel() {
  const container = document.querySelector('#services-carousel-container');
  if (!container) return;

  const slidesHTML = servicesData
    .map(
      (service) => `
    <div class="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4">
      <div class="h-full p-8 rounded-2xl bg-[#0d1d2f] border border-[#1a3452] shadow-xl hover:border-quantum-primary/60 transition-all duration-300 flex flex-col justify-between quantum-card-hover">
        <div>
          <div class="w-12 h-12 rounded-xl bg-quantum-primary/10 flex items-center justify-center text-quantum-primary text-2xl mb-6 border border-quantum-primary/20">
            <i class="ph ${service.icon}"></i>
          </div>
          <h3 class="text-2xl font-bold text-quantum-light mb-3">${service.title}</h3>
          <p class="text-slate-400 mb-6 leading-relaxed text-left">${service.description}</p>
        </div>
        <ul class="space-y-3 text-sm text-slate-300 text-left pt-4 border-t border-[#1a3452]">
          ${service.items
            .map(
              (item) => `
            <li class="flex items-center gap-2">
              <i class="ph ph-check-circle text-quantum-primary font-bold"></i> ${item}
            </li>
          `
            )
            .join('')}
        </ul>
      </div>
    </div>
  `
    )
    .join('');

  container.innerHTML = `
    <div class="relative max-w-5xl mx-auto px-4 sm:px-12">
      <div class="embla overflow-hidden" id="embla-viewport">
        <div class="embla__container flex -ml-4">
          ${slidesHTML}
        </div>
      </div>
      <button id="embla-prev" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 rounded-full bg-[#0d1d2f] border border-[#1a3452] flex items-center justify-center text-quantum-primary hover:bg-quantum-primary hover:text-white shadow-md transition-all cursor-pointer" aria-label="Anterior">
        <i class="ph ph-caret-left text-xl"></i>
      </button>
      <button id="embla-next" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 rounded-full bg-[#0d1d2f] border border-[#1a3452] flex items-center justify-center text-quantum-primary hover:bg-quantum-primary hover:text-white shadow-md transition-all cursor-pointer" aria-label="Próximo">
        <i class="ph ph-caret-right text-xl"></i>
      </button>
    </div>
  `;

  const emblaNode = container.querySelector('#embla-viewport');
  const embla = EmblaCarousel(emblaNode, { loop: true, align: 'start' });

  container
    .querySelector('#embla-prev')
    .addEventListener('click', () => embla.scrollPrev());
  container
    .querySelector('#embla-next')
    .addEventListener('click', () => embla.scrollNext());
}

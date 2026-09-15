import * as React from 'react';
import {
  RadialOrbitalTimeline,
  type TimelineItem,
} from '@/components/ui/radial-orbital-timeline';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Search,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  Workflow,
  ArrowRight,
} from 'lucide-react';

const quantumJourneyData: TimelineItem[] = [
  {
    id: 1,
    stage: 'Etapa 01',
    title: 'Diagnóstico & Imersão',
    description:
      'Mapeamento completo dos gargalos, análise competitiva de mercado e identificação de oportunidades estratégicas para marketing e tecnologia.',
    icon: <Search className="w-5 h-5" />,
    status: 'completed',
    energy: 95,
    duration: 'Semana 1',
    deliverables: [
      'Auditoria de Presença Digital & Software',
      'Definição de Persona & ICP',
      'Matriz de Oportunidades & Metas de ROI',
    ],
    metrics: 'Diagnóstico 360° em até 7 dias úteis',
  },
  {
    id: 2,
    stage: 'Etapa 02',
    title: 'Design & Estratégia',
    description:
      'Planejamento de arquitetura de software, prototipagem de alta fidelidade e estruturação dos funis de conversão e campanhas de tráfego.',
    icon: <Palette className="w-5 h-5" />,
    status: 'completed',
    energy: 90,
    duration: 'Semanas 2 a 3',
    deliverables: [
      'Protótipos Interativos de UI/UX',
      'Arquitetura de APIs & Banco de Dados',
      'Estratégia de Aquisição & Copywriting',
    ],
    metrics: 'Validação e aprovação dos fluxos antes do código',
  },
  {
    id: 3,
    stage: 'Etapa 03',
    title: 'Desenvolvimento & Engenharia',
    description:
      'Implementação com código limpo, arquitetura escalável e máxima performance, integrando CRM, WhatsApp e automações personalizadas.',
    icon: <Code2 className="w-5 h-5" />,
    status: 'in-progress',
    energy: 100,
    duration: 'Semanas 3 a 6',
    deliverables: [
      'Desenvolvimento Web & Landing Pages',
      'Integrações com APIs, Webhooks e CRM',
      'Core Web Vitals nota 90+ (alta velocidade)',
    ],
    metrics: 'Segurança, estabilidade e carregamento instantâneo',
  },
  {
    id: 4,
    stage: 'Etapa 04',
    title: 'Homologação & Tráfego',
    description:
      'Testes rigorosos de ponta a ponta e início sincronizado das campanhas de tráfego pago no Google Ads e Meta Ads com mensuração precisa.',
    icon: <Rocket className="w-5 h-5" />,
    status: 'upcoming',
    energy: 85,
    duration: 'Semanas 6 a 7',
    deliverables: [
      'Testes de Usabilidade e Estresse',
      'Instalação de Pixels, GTM & Conversões API',
      'Ativação das Campanhas de Performance',
    ],
    metrics: 'Tracking 100% calibrado e zero bugs em produção',
  },
  {
    id: 5,
    stage: 'Etapa 05',
    title: 'Escala & Otimização de ROI',
    description:
      'Acompanhamento analítico em tempo real, testes A/B contínuos e otimização das taxas de conversão para multiplicar os resultados do negócio.',
    icon: <TrendingUp className="w-5 h-5" />,
    status: 'upcoming',
    energy: 80,
    duration: 'Evolução Contínua',
    deliverables: [
      'Dashboards Gerenciais em Tempo Real',
      'Otimização Contínua de CAC e LTV',
      'Roadmap de Novas Funcionalidades',
    ],
    metrics: 'Crescimento escalável com foco direto em faturamento',
  },
];

export interface TimelineSectionProps {
  title?: string;
  subtitle?: string;
}

export function TimelineSection({
  title = 'Nossa Metodologia & Ciclo de Entrega',
  subtitle = 'Unimos o rigor técnico da engenharia de software com a precisão do marketing de alta conversão em um fluxo circular e contínuo de aceleração.',
}: TimelineSectionProps) {
  return (
    <section
      id="metodologia"
      className="py-24 bg-[#07111e] border-b border-[#1a3452] relative overflow-hidden"
    >
      {/* Luzes de fundo atmosféricas */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-quantum-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="quantum"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold mb-3 rounded-full"
          >
            <Workflow className="w-3.5 h-3.5" />
            Metodologia Integrada
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-quantum-light leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Visualização Radial Orbital Timeline */}
        <div className="w-full">
          <RadialOrbitalTimeline items={quantumJourneyData} />
        </div>

        {/* Chamada para Ação inferior */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto shadow-lg shadow-[#1e70bf]/25 hover:shadow-xl hover:shadow-[#1e70bf]/40"
          >
            <a href="#contato" className="gap-2">
              <span>Iniciar Projeto na Quantum</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <p className="text-xs text-slate-400 mt-2 sm:mt-0">
            Tempo médio para início de diagnóstico: <strong className="text-quantum-light">12h</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;


export const servicesData = [
  {
    id: 'marketing',
    icon: 'ph-chart-line-up',
    title: 'Marketing & Mídias Sociais',
    description:
      'Posicionamento estratégico de marca para empresas de médio porte. Gestão de conteúdo visual e tráfego focado em resultados.',
    items: [
      'Gestão de Redes Sociais & Conteúdo',
      'Tráfego Pago (Google Ads & Meta Ads)',
      'Branding & Identidade Visual',
    ],
  },
  {
    id: 'software',
    icon: 'ph-code',
    title: 'Engenharia de Software & Sites',
    description:
      'Desenvolvimento de sistemas web, landing pages de alta conversão, e-commerces e automações sob medida.',
    items: [
      'Websites Institucionais & Landing Pages',
      'Web Apps & Sistemas de Gestão',
      'Integrações de APIs e Automações',
    ],
  },
  {
    id: 'traffic',
    icon: 'ph-rocket-launch',
    title: 'Tráfego Pago & Performance',
    description:
      'Campanhas direcionadas para captação de clientes qualificados no Google, Instagram e Facebook.',
    items: [
      'Campanhas de Alta Conversão',
      'Remarketing Inteligente',
      'Relatórios de ROI em Tempo Real',
    ],
  },
];

export const aboutData = {
  badge: 'Quem Somos',
  title: 'Sobre a Quantum',
  subtitle:
    'Unindo marketing estratégico e engenharia de software para acelerar e escalar o seu negócio no ambiente digital.',
  description:
    'Na Quantum, acreditamos que marcas fortes exigem mais do que apenas presença digital: necessitam de inteligência de dados, estratégias eficientes de atração de clientes e sistemas tecnológicos robustos. Atuamos como parceiros estratégicos para impulsionar o crescimento sustentável e previsível da sua empresa.',
  cards: [
    {
      title: 'Nossa Missão',
      icon: 'ph-target',
      description:
        'Conectar empresas aos seus clientes ideais por meio de estratégias de marketing de alta performance e engenharia de software sob medida.',
    },
    {
      title: 'Nossa Visão',
      icon: 'ph-compass',
      description:
        'Ser a principal referência em soluções integradas de tecnologia e marketing estratégico para empresas em rápida expansão.',
    },
  ],
  stats: [
    {
      label: 'Projetos Entregues',
      value: '+50',
      icon: 'ph-check-square-offset',
    },
    { label: 'Satisfação de Clientes', value: '98%', icon: 'ph-thumbs-up' },
    { label: 'Aumento Médio em ROI', value: '3.5x', icon: 'ph-trend-up' },
    { label: 'Soluções Customizadas', value: '100%', icon: 'ph-headset' },
  ],
};

export const differentialsData = [
  {
    id: 'integracao',
    icon: 'ph-arrows-out-cardinal',
    title: 'Visão Integrada 360°',
    description:
      'Alinhamos a estratégia de marca, gestão de tráfego e infraestrutura técnica de software para criar uma jornada contínua de conversão.',
  },
  {
    id: 'roi',
    icon: 'ph-chart-line-up',
    title: 'Decisões Orientadas a ROI',
    description:
      'Todas as campanhas e desenvolvimentos são pautados por métricas claras de negócio, focando no retorno financeiro e custo de aquisição.',
  },
  {
    id: 'engenharia',
    icon: 'ph-cpu',
    title: 'Engenharia de Alta Performance',
    description:
      'Sistemas e sites construídos sob medida com código limpo, altíssima velocidade de carregamento, segurança e escalabilidade.',
  },
  {
    id: 'transparencia',
    icon: 'ph-shield-check',
    title: 'Atendimento & Transparência',
    description:
      'Comunicação constante, dashboards em tempo real e relatórios sem jargões para você acompanhar o progresso a cada etapa.',
  },
];

export const contactData = {
  badge: 'Fale Conosco',
  title: 'Vamos Construir Algo Extraordinário Juntos?',
  subtitle:
    'Preencha o formulário abaixo para receber uma proposta personalizada ou fale diretamente com nossos especialistas pelos canais oficiais.',
  form: {
    title: 'Solicite seu Orçamento',
    description:
      'Preencha os campos abaixo para desenharmos uma solução sob medida com retorno ágil para o seu negócio.',
    fields: {
      name: {
        label: 'Nome Completo',
        placeholder: 'Como podemos te chamar?',
      },
      company: {
        label: 'Empresa',
        placeholder: 'Nome da sua empresa ou marca',
      },
      whatsapp: {
        label: 'WhatsApp',
        placeholder: '(93) 99322-2232',
      },
      service: {
        label: 'Serviço de Interesse',
        placeholder: 'Selecione a solução desejada',
        options: [
          'Marketing & Mídias Sociais',
          'Engenharia de Software & Sites',
          'Tráfego Pago & Performance',
          'Solução Completa 360° (Marketing + Software)',
          'Outro Projeto Sob Medida',
        ],
      },
    },
    buttonText: 'Solicitar Proposta no WhatsApp',
    disclaimer: 'Sem compromisso. Atendimento rápido e direto via WhatsApp.',
  },
  channelsCard: {
    badge: 'Atendimento Ativo',
    title: 'Canais Diretos',
    subtitle:
      'Prefere um contato imediato? Escolha o canal de sua preferência.',
    channels: [
      {
        id: 'whatsapp',
        icon: 'ph-whatsapp-logo',
        label: 'WhatsApp Oficial',
        value: '+55 (93) 99135-9644',
        description: 'Conversa instantânea com nossos consultores.',
        href: 'https://wa.me/5593991359644',
      },
      {
        id: 'email',
        icon: 'ph-envelope-simple',
        label: 'E-mail Institucional',
        value: 'quantum.solucoesestrategias@gmail.com',
        description: 'Para propostas formais e parcerias estratégicas.',
        href: 'mailto:contato@quantumdigital.com.br',
      },
      {
        id: 'location',
        icon: 'ph-map-pin',
        label: 'Localização',
        value: 'Santarém - PA',
        description:
          'Atendimento presencial e atuação remota em todo o Brasil.',
        href: 'https://maps.google.com/?q=Santarem,PA',
      },
    ],
    availability: 'Atendimento: Segunda a Sexta, das 08h às 18h',
  },
  whatsappTargetNumber: '5593991359644',
};

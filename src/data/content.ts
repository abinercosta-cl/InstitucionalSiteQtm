// Todo o texto do site fica aqui, separado dos componentes.
// Para mudar um número de contato ou o texto de uma seção, edite só este arquivo.

export const company = {
  name: 'Quantum',
  city: 'Santarém – PA',
  whatsappNumber: '5593991359644',
  whatsappDisplay: '(93) 99135-9644',
  email: 'quantum.solucoesestrategias@gmail.com',
  hours: 'Segunda a sexta, das 8h às 18h',
};

export const nav = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#como-trabalhamos', label: 'Como trabalhamos' },
  { href: '#contato', label: 'Contato' },
];

export const hero = {
  eyebrow: 'Marketing e software · Santarém, PA',
  title: 'Redes sociais, anúncios e software para a sua empresa crescer.',
  text:
    'Cuidamos das redes sociais, dos anúncios e do site ou sistema da sua empresa. Uma equipe só, do primeiro post à última integração.',
  primaryCta: 'Pedir orçamento',
  secondaryCta: 'Ver serviços',
};

export type Service = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: 'marketing',
    title: 'Marketing e redes sociais',
    description:
      'Planejamento de conteúdo, produção visual e gestão dos perfis para empresas que querem ser lembradas pelo cliente certo.',
    items: ['Gestão de redes sociais', 'Produção de conteúdo', 'Branding e identidade visual'],
  },
  {
    id: 'software',
    title: 'Sites e sistemas',
    description:
      'Sites institucionais, landing pages, lojas virtuais e sistemas internos feitos sob medida, sem templates prontos.',
    items: ['Sites e landing pages', 'Sistemas web de gestão', 'Integrações e automações'],
  },
  {
    id: 'trafego',
    title: 'Tráfego pago',
    description:
      'Campanhas no Google, Instagram e Facebook para trazer contatos de quem realmente tem interesse no que você vende.',
    items: ['Google Ads e Meta Ads', 'Remarketing', 'Relatórios de resultado'],
  },
];

export const about = {
  title: 'Sobre a Quantum',
  lead:
    'Somos uma agência de Santarém que junta marketing e desenvolvimento de software no mesmo lugar.',
  paragraphs: [
    'Presença digital sozinha não traz cliente. Precisa de estratégia para atrair as pessoas certas e de tecnologia que não trave quando elas chegam. É por isso que fazemos as duas coisas.',
    'Atendemos empresas da região de forma presencial e clientes de todo o Brasil remotamente.',
  ],
  mission:
    'Conectar empresas aos clientes certos com marketing bem feito e software sob medida.',
  vision:
    'Ser referência em marketing e tecnologia para empresas em crescimento.',
  stats: [
    { value: '+50', label: 'projetos entregues' },
    { value: '98%', label: 'de clientes satisfeitos' },
    { value: '3,5x', label: 'de aumento médio no retorno' },
  ],
};

export const differentials = [
  {
    title: 'Marketing e tecnologia juntos',
    description:
      'A campanha, a página e o sistema são pensados pela mesma equipe. Nada se perde entre fornecedores diferentes.',
  },
  {
    title: 'Decisão baseada em números',
    description:
      'Cada campanha e cada funcionalidade tem uma meta clara de negócio, como custo por cliente ou retorno do investimento.',
  },
  {
    title: 'Código feito para durar',
    description:
      'Sites rápidos, seguros e fáceis de manter. Sem dependência de plataforma fechada.',
  },
  {
    title: 'Relatórios sem jargão',
    description:
      'Você acompanha o andamento em reuniões e relatórios escritos em português claro.',
  },
];

export type Step = {
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
};

export const workflow = {
  title: 'Como trabalhamos',
  text: 'Cinco etapas, do diagnóstico ao acompanhamento. Você sabe o que está sendo feito em cada semana.',
  responseTime: '12h',
  steps: [
    {
      title: 'Diagnóstico',
      duration: 'Semana 1',
      description:
        'Entendemos o negócio, os concorrentes e onde estão os gargalos de marketing e de tecnologia.',
      deliverables: ['Análise da presença digital', 'Definição do cliente ideal', 'Metas de retorno'],
    },
    {
      title: 'Planejamento',
      duration: 'Semanas 2 e 3',
      description:
        'Desenhamos as telas, a estrutura do sistema e a estratégia de campanhas. Nada é programado antes da sua aprovação.',
      deliverables: ['Protótipo das telas', 'Arquitetura do sistema', 'Estratégia de anúncios e textos'],
    },
    {
      title: 'Desenvolvimento',
      duration: 'Semanas 3 a 6',
      description:
        'Construímos o site ou sistema e fazemos as integrações com CRM, WhatsApp e outras ferramentas que você já usa.',
      deliverables: ['Site ou sistema', 'Integrações com APIs e CRM', 'Otimização de velocidade'],
    },
    {
      title: 'Testes e lançamento',
      duration: 'Semanas 6 e 7',
      description:
        'Testamos tudo de ponta a ponta, configuramos a medição e colocamos as campanhas no ar.',
      deliverables: ['Testes de uso', 'Pixels e conversões configurados', 'Campanhas ativas'],
    },
    {
      title: 'Acompanhamento',
      duration: 'Contínuo',
      description:
        'Medimos os resultados, testamos variações e ajustamos o que for preciso para o investimento render mais.',
      deliverables: ['Relatórios periódicos', 'Ajustes de campanha', 'Novas funcionalidades'],
    },
  ] satisfies Step[],
};

export const contact = {
  title: 'Vamos conversar sobre o seu projeto',
  text:
    'Preencha os campos e a conversa abre direto no WhatsApp com as informações já escritas. Se preferir, use um dos contatos ao lado.',
  serviceOptions: [
    'Marketing e redes sociais',
    'Sites e sistemas',
    'Tráfego pago',
    'Marketing e software juntos',
    'Outro projeto',
  ],
  submit: 'Continuar no WhatsApp',
  note: 'Sem compromisso. Respondemos em horário comercial.',
};

/**
 * Fonte única de verdade do conteúdo e configuração da landing.
 * Edite aqui — os componentes apenas consomem estes valores.
 */

export type FaqItem = { q: string; a: string };
export type Step = { time: string; title: string; desc: string };
export type Feature = { n: string; title: string; desc: string };
export type Stat = { value: string; label: string };

export type SiteConfig = {
  brand: string;
  tagline: string;
  price: string;
  whatsappUrl: string;
  /** Cor de destaque; aplicada como --color-amber no elemento raiz. */
  accent: string;
  hero: {
    eyebrow: string;
    headlineLead: string;
    headlineAccent: string;
    sub: string;
    navCta: string;
    primaryCta: string;
    priceNote: string;
    status: string;
    scrollHint: string;
    chips: {
      text: string;
      accent?: boolean;
      boxed?: boolean;
      depth: number;
      delay: number;
      className: string;
    }[];
  };
  ruler: { label: string; steps: Step[] };
  showcase: {
    eyebrow: string;
    heading: string;
    domain: string;
    demoBrand: string;
    demoEyebrow: string;
    demoTitle: string;
    demoCta: string;
    photoLabel: string;
    stats: Stat[];
    caption: string;
  };
  pricing: { features: string[]; cta: string };
  about: { heading: string; para: string; features: Feature[] };
  faq: { heading: string; items: FaqItem[] };
  contact: { heading: string; sub: string; cta: string };
  footer: { note: string };
};

export const site: SiteConfig = {
  brand: 'Belas Artes Tech',
  tagline: 'SITES SOB MEDIDA',
  price: 'R$ 400',
  whatsappUrl: 'https://wa.me/55SEUNUMERO', // TODO: trocar pelo número real
  accent: '#F2B84B',

  hero: {
    eyebrow: 'SITE PROFISSIONAL · ENTREGA EM 48H',
    headlineLead: 'Cada dia sem site é um cliente que',
    headlineAccent: 'te procura e não te acha.',
    sub: 'Ele busca no Google, não encontra e fecha com o concorrente. A gente constrói, você recebe pronto — uma página rápida, bonita e feita pra transformar visita em contato.',
    navCta: 'Falar agora →',
    primaryCta: 'Quero meu site →',
    priceNote: 'pagamento único',
    status: 'STATUS: BUILDING · 48H TO LIVE',
    scrollHint: 'role para acompanhar ↓',
    chips: [
      {
        text: '// briefing_started',
        boxed: true,
        depth: 0.9,
        delay: 0.5,
        className: 'top-[26%] right-[7%]',
      },
      {
        text: 'deploy → live',
        accent: true,
        boxed: true,
        depth: 1.15,
        delay: 0.7,
        className: 'bottom-[24%] right-[11%]',
      },
      { text: 'grid: 44px', depth: 0.7, delay: 0.6, className: 'top-[15%] right-[24%]' },
    ],
  },

  ruler: {
    label: '// da ideia ao ar',
    steps: [
      {
        time: '0h',
        title: 'Briefing rápido',
        desc: '15 min de conversa pra entender seu negócio e o que precisa aparecer.',
      },
      {
        time: '24h',
        title: 'Primeira versão no ar',
        desc: 'Você recebe um link pra ver o site já rodando e dar seu retorno.',
      },
      {
        time: '48h',
        title: 'No ar, gerando contato',
        desc: 'Ajustes finais, seu domínio publicado e o site pronto pra vender.',
      },
    ],
  },

  showcase: {
    eyebrow: '// a construção',
    heading: 'Enquanto você lê isso, seu site já toma forma.',
    domain: 'estudioaurora.com.br',
    demoBrand: 'Estúdio Aurora',
    demoEyebrow: 'PILATES & BEM-ESTAR',
    demoTitle: 'Seu corpo merece esse cuidado.',
    demoCta: 'Agendar aula grátis →',
    photoLabel: 'foto do estúdio',
    stats: [
      { value: '+180', label: 'alunas ativas' },
      { value: '4.9★', label: 'no Google' },
      { value: '8 anos', label: 'de estúdio' },
    ],
    caption: '↑ prévia de alta fidelidade — em 48h, é o seu negócio nesta tela.',
  },

  pricing: {
    features: [
      'Página única, responsiva (linda no celular)',
      'Textos e visual pensados pro seu negócio',
      'Botão direto pro WhatsApp ou Instagram',
      'No ar em até 48h, com seu domínio',
    ],
    cta: 'Quero começar →',
  },

  about: {
    heading:
      'Não é uma agência engessada. É um time pequeno que entende de design, de código e de gente.',
    para: 'A Belas Artes Tech nasceu pra resolver um problema específico: pequenos negócios que precisam de presença online rápida, sem contrato longo, sem burocracia e sem gastar o que não têm.',
    features: [
      {
        n: '01',
        title: 'Contato direto',
        desc: 'Do primeiro oi até o site no ar, você fala com quem põe a mão na massa.',
      },
      {
        n: '02',
        title: 'Preço fechado',
        desc: 'Você sabe exatamente quanto vai pagar antes de começar.',
      },
      {
        n: '03',
        title: 'Feito à mão',
        desc: 'Cada site é montado pro seu negócio, não é um modelo genérico.',
      },
    ],
  },

  faq: {
    heading: 'Perguntas frequentes',
    items: [
      {
        q: 'Preciso já ter domínio (endereço do site)?',
        a: 'Não. Se você ainda não tem, a gente te ajuda a registrar um — é rápido e custa pouco por ano. Se já tiver, a gente usa o que você já possui.',
      },
      {
        q: 'O site funciona bem no celular?',
        a: 'Sim, todo site é construído pensando primeiro no celular, já que é de lá que a maioria dos seus clientes vai acessar.',
      },
      {
        q: 'E se eu quiser mudar algo depois de pronto?',
        a: 'Pequenos ajustes na entrega estão inclusos. Depois disso, a gente oferece um plano de manutenção mensal opcional pra quem quiser ir atualizando o site com o tempo.',
      },
      {
        q: 'Serve pra qualquer tipo de negócio?',
        a: 'Funciona bem pra negócios locais e profissionais liberais — clínicas, estúdios, prestadores de serviço, lojas — qualquer um que precise que as pessoas encontrem e entrem em contato fácil.',
      },
    ],
  },

  contact: {
    heading: 'Manda uma mensagem e a gente te mostra como fica.',
    sub: 'Sem compromisso. Se fizer sentido pra você, começamos ainda essa semana.',
    cta: 'Chamar no WhatsApp →',
  },

  footer: { note: 'sites sob medida · entrega em 48h' },
};

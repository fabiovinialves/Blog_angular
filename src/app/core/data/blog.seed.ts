import { Author } from '@core/models/author.model';
import { Category, Post } from '@core/models/post.model';

type SeedAuthorKey = 'theo' | 'maya' | 'lina';

const authors: Record<SeedAuthorKey, Author> = {
  theo: {
    id: 'theo',
    name: 'Theodore Reginald',
    role: 'Editor de viagens',
    avatarLabel: 'TR'
  },
  maya: {
    id: 'maya',
    name: 'Maya Collins',
    role: 'Redatora de cultura',
    avatarLabel: 'MC'
  },
  lina: {
    id: 'lina',
    name: 'Lina Brooks',
    role: 'Curadora de lifestyle',
    avatarLabel: 'LB'
  }
};

export const BLOG_CATEGORIES: ReadonlyArray<Category> = [
  { id: 'destination', label: 'Destinos' },
  { id: 'culinary', label: 'Culinária' },
  { id: 'lifestyle', label: 'Estilo de Vida' },
  { id: 'tips', label: 'Dicas e Truques' },
  { id: 'travel', label: 'Viagens' }
];

export const BLOG_POSTS: ReadonlyArray<Post> = [
  {
    id: 'post-1',
    slug: 'explorando-as-maravilhas-das-trilhas',
    title: 'Explorando as maravilhas das trilhas',
    excerpt:
      'Uma paisagem marcante que revela os detalhes que transformam esse destino em um verdadeiro refúgio para viajantes.',
    destination: 'Destino',
    category: 'destination',
    readTimeMinutes: 10,
    publishedAt: '2024-01-24',
    coverImage: 'assets/images/desert.webp',
    author: authors.theo,
    featured: true,
    tags: ['Deserto', 'Aventura', 'Trilha'],
    content: [
      'Falésias douradas, horizonte calmo e o silêncio do deserto criam o cenário ideal para uma viagem mais contemplativa. Caminhar por paisagens assim vai além da atividade física: é uma forma de entender o ritmo do destino.',
      'As melhores trilhas nem sempre são as mais difíceis. Muitas vezes, o que torna um percurso memorável é a mudança de luz ao longo do dia, especialmente perto do entardecer, quando texturas e relevos ganham vida.',
      'Para construir um relato editorial mais forte, combine preparação com observação. Pesquise o terreno, respeite as orientações locais e reserve tempo para parar, olhar ao redor e absorver o lugar.'
    ]
  },
  {
    id: 'post-2',
    slug: 'guia-de-fim-de-semana-por-vales-rochosos',
    title: 'Guia de fim de semana por vales rochosos',
    excerpt:
      'Um roteiro compacto para quem busca vistas dramáticas, paradas leves e nascer do sol inesquecível.',
    destination: 'Destino',
    category: 'destination',
    readTimeMinutes: 8,
    publishedAt: '2024-02-02',
    coverImage: 'assets/images/vale-rochoso.jpg',
    author: authors.theo,
    featured: true,
    tags: ['Fim de semana', 'Road trip', 'Paisagem'],
    content: [
      'Uma viagem curta pode parecer enorme quando cada parada tem personalidade. Vales rochosos são perfeitos para esse tipo de roteiro porque a paisagem muda rápido e recompensa até os desvios mais curtos.',
      'Comece cedo, mantenha o trajeto flexível e priorize uma ou duas experiências principais em vez de tentar fazer tudo. Isso geralmente resulta em uma jornada mais calma e mais sofisticada.',
      'Ao criar conteúdo sobre esse tipo de destino, pense em camadas: movimento, silêncio, contraste e escala.'
    ]
  },
  {
    id: 'post-3',
    slug: 'mala-capsula-para-viajantes-modernos',
    title: 'Mala cápsula para viajantes modernos',
    excerpt:
      'Uma forma elegante de levar menos peças, multiplicar combinações e viajar com mais leveza.',
    destination: 'Estilo de Vida',
    category: 'lifestyle',
    readTimeMinutes: 6,
    publishedAt: '2024-03-05',
    coverImage: 'assets/images/mala-capsula.webp',
    author: authors.lina,
    featured: false,
    tags: ['Minimalismo', 'Mala', 'Guarda-roupa'],
    content: [
      'A lógica da mala cápsula começa com disciplina, mas o benefício é liberdade. Quando todas as peças conversam entre si, se vestir durante a viagem deixa de ser um problema e se torna algo natural.',
      'Camadas neutras, uma peça de destaque e sapatos confiáveis costumam ser suficientes para viagens urbanas. Em vez de arrumar a mala para todas as hipóteses, prepare-se para a viagem que você realmente planejou.',
      'Isso também melhora a coerência visual das fotos da viagem, algo muito útil quando a jornada vira conteúdo.'
    ]
  },
  {
    id: 'post-4',
    slug: 'gadgets-inteligentes-que-realmente-valem-espaco',
    title: 'Gadgets inteligentes que realmente valem espaço',
    excerpt:
      'Uma seleção realista de acessórios compactos que merecem entrar na bolsa quando cada centímetro conta.',
    destination: 'Dicas e Truques',
    category: 'tips',
    readTimeMinutes: 5,
    publishedAt: '2024-03-12',
    coverImage: 'assets/images/tips-gadgets.webp',
    author: authors.maya,
    featured: false,
    tags: ['Tecnologia', 'Bagagem de mão', 'Eficiência'],
    content: [
      'Acessórios de viagem costumam prometer praticidade, mas muitas vezes só aumentam a bagunça. Os melhores gadgets resolvem fricções recorrentes, como recarga, organização e acesso rápido.',
      'Prefira dispositivos multifuncionais, reduza a quantidade de cabos e certifique-se de que tudo o que você leva combina com seu estilo real de viagem e não com uma versão idealizada dele.',
      'O bom equipamento quase passa despercebido durante a viagem, porque simplesmente funciona quando é necessário.'
    ]
  },
  {
    id: 'post-5',
    slug: 'onde-os-cafes-urbanos-moldam-a-jornada',
    title: 'Onde os cafés urbanos moldam a jornada',
    excerpt:
      'Por que os cafés locais são uma das melhores formas de entender o ritmo, o design e a vida cotidiana de um destino.',
    destination: 'Culinária',
    category: 'culinary',
    readTimeMinutes: 7,
    publishedAt: '2024-03-20',
    coverImage: 'assets/images/cafeteria.webp',
    author: authors.maya,
    featured: false,
    tags: ['Café', 'Cultura', 'Cidades'],
    content: [
      'O café raramente é apenas sobre a bebida. Em muitas cidades, ele funciona como um observatório informal onde é possível entender como as pessoas ocupam o espaço e constroem sua rotina.',
      'Observe o horário, o design, a linguagem do cardápio e o ritmo das conversas. Esses detalhes frequentemente dizem mais do que pontos turísticos óbvios.',
      'Para uma narrativa editorial, os cafés funcionam como pequenos pontos de ancoragem entre atmosfera e memória.'
    ]
  },
  {
    id: 'post-6',
    slug: 'rotas-de-trem-para-explorar-com-calma',
    title: 'Rotas de trem para explorar com calma',
    excerpt:
      'Viagens de trem para quem valoriza transições, paisagens e uma jornada com clima cinematográfico.',
    destination: 'Viagens',
    category: 'travel',
    readTimeMinutes: 9,
    publishedAt: '2024-04-02',
    coverImage: 'assets/images/rota-trem.jpg',
    author: authors.theo,
    featured: true,
    tags: ['Trem', 'Paisagem', 'Slow travel'],
    content: [
      'Algumas viagens ficam na memória pelo lugar de chegada. Outras permanecem pela forma como acontecem. Rotas silenciosas de trem pertencem ao segundo grupo.',
      'O trem permite ler, observar e descansar enquanto você continua conectado à paisagem em movimento. Isso dá ao trajeto uma qualidade cinematográfica difícil de reproduzir em outros meios.',
      'Quando a proposta é explorar com calma, o intervalo entre um ponto e outro também passa a fazer parte do destino.'
    ]
  }
];

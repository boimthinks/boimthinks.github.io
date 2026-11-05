export interface Project {
  id: string;
  title: string;
  domain: string;
  url: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'laserindo-palembang',
    title: 'Laserindo Palembang',
    domain: 'laserindopalembang.com',
    url: 'https://laserindopalembang.com',
    category: 'Industrial Fabrication & CNC Laser',
    description: 'Pusat fabrikasi presisi laser cutting plat besi, stainless steel, bending, dan pengelasan profesional di Palembang.',
    image: '/screenshots/laserindo-palembang.webp',
    tech: ['Astro', 'Tailwind CSS', 'Entity SEO', 'Local Schema'],
    featured: true,
  },
  {
    id: 'pireki-id',
    title: 'Pireki Indonesia',
    domain: 'pireki.id',
    url: 'https://pireki.id',
    category: 'Acoustic Partition & Interior Architecture',
    description: 'Produsen dan instalatur pintu partisi geser kedap suara untuk ballroom hotel, ruang rapat korporat, dan auditorium.',
    image: '/screenshots/pireki-id.webp',
    tech: ['Astro', 'Tiered Money Pages', 'Technical Schema', 'ClientRouter'],
    featured: true,
  },
  {
    id: 'alfa-elektrindo',
    title: 'Alfa Elektrindo',
    domain: 'alfa.elektrindo.co.id',
    url: 'https://alfa.elektrindo.co.id',
    category: 'Industrial Automation & Power Electronics',
    description: 'Distributor resmi komponen otomasi industri, PLC, inverter, thyristor module, dan sensor industri presisi.',
    image: '/screenshots/alfa-elektrindo.webp',
    tech: ['Astro', 'Tailwind CSS', 'Semantic Search', 'SSG'],
    featured: true,
  },
  {
    id: 'lincah-travel',
    title: 'Lincah Travel',
    domain: 'lincahtravel.web.id',
    url: 'https://lincahtravel.web.id',
    category: 'Travel & Mobility Services',
    description: 'Layanan transportasi travel door-to-door antar kota, sewa armada VIP, dan logistik kilat berbasis booking otomatis.',
    image: '/screenshots/lincah-travel.webp',
    tech: ['Astro', 'Fast Prefetch', 'WhatsApp Conversion Funnel', 'GEO SEO'],
    featured: true,
  },
  {
    id: 'sriwijaya-grafika',
    title: 'Sriwijaya Grafika',
    domain: 'sriwijayagrafika.com',
    url: 'https://sriwijayagrafika.com',
    category: 'Digital Printing & Advertising',
    description: 'Pusat percetakan modern, neon box, acrylic display, billboard, dan merchandise promosi korporat skala besar.',
    image: '/screenshots/sriwijaya-grafika.webp',
    tech: ['Astro', 'Product Showcase', 'Responsive UI', 'Schema.org'],
    featured: false,
  },
  {
    id: 'interior-batam',
    title: 'Interior Batam',
    domain: 'interiorbatam.web.id',
    url: 'https://interiorbatam.web.id',
    category: 'Interior Design & Fit-Out',
    description: 'Konsultan & kontraktor interior spesialis hunian residensial mewah, commercial store, dan ruang kantor di Batam.',
    image: '/screenshots/interior-batam.webp',
    tech: ['Astro', 'Silo Architecture', 'Entity Graph', 'LocalBusiness'],
    featured: false,
  },
  {
    id: 'pagar-modern',
    title: 'Pagar Modern Palembang',
    domain: 'pagarmodernpalembang.com',
    url: 'https://pagarmodernpalembang.com',
    category: 'Architectural Metalwork',
    description: 'Spesialis fabrikasi pagar cutting laser motif modern, kanopi kaca tempered, railing balkon, dan pintu garasi minimalis.',
    image: '/screenshots/pagar-modern.webp',
    tech: ['Astro', 'Modern Dark Aesthetic', 'Local SEO', 'Fast Loading'],
    featured: false,
  },
  {
    id: 'partisi-ruang-rapat',
    title: 'Partisi Ruang Rapat',
    domain: 'partisiruangrapat.web.id',
    url: 'https://partisiruangrapat.web.id',
    category: 'Movable Wall Solutions',
    description: 'Solusi sekat fleksibel peredam suara dan pintu lipat moveable wall untuk efisiensi ruang kantor dan meeting room.',
    image: '/screenshots/partisi-ruang-rapat.webp',
    tech: ['Astro', 'Acoustic Calculation', 'Inbound Lead Engine'],
    featured: false,
  },
];

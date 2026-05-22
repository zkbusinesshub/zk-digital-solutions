import { Service, Project, Testimonial, FAQItem, BlogPost, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Custom-built, high-performance websites using the latest modern frameworks. Native fast speeds, modular code, and responsive design.',
    iconName: 'Code',
    badge: 'Popular'
  },
  {
    id: 'ai-creation',
    title: 'AI Website Creation',
    description: 'Integrate next-generation AI pipelines and smart interfaces to automate client workflows, content generation, and responsive elements.',
    iconName: 'Cpu',
    badge: 'Trending'
  },
  {
    id: 'portfolio',
    title: 'Business Portfolio Websites',
    description: 'Premium personal and enterprise showcase sites designed to capture leads, display qualifications, and elevate your personal or brand authority.',
    iconName: 'Briefcase'
  },
  {
    id: 'tours-travel',
    title: 'Tours & Travel Websites',
    description: 'Engaging, image-rich booking frameworks, interactive itineraries, dynamic maps, and seamless payment triggers customized for travel hubs.',
    iconName: 'Compass'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Designing',
    description: 'Stunning visual identity packs, custom illustration assets, vector UI templates, presentation decks, and brand marketing collateral.',
    iconName: 'Palette'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'End-to-end custom content calendars, graphic scheduling, target-audience analytics, and community-building designed for consistent brand growth.',
    iconName: 'Share2'
  },
  {
    id: 'seo-opt',
    title: 'SEO Optimization',
    description: 'Advanced technical SEO audits, search intent keyword clustering, rich snippets wiring, and localized landing pages to maximize search engine rankings.',
    iconName: 'TrendingUp'
  },
  {
    id: 'digital-mktg',
    title: 'Digital Marketing',
    description: 'Conversion-focused pay-per-click programmatic ads, targeted lead generation, dynamic retargeting, and ROI tracking for scalable growth.',
    iconName: 'Globe'
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Immersive cinematic commercial videos, engaging social media reels/TikTok shorts, explanatory animation decks, and high-impact audio sync layouts.',
    iconName: 'Video'
  },
  {
    id: 'branding',
    title: 'Business Branding',
    description: 'Complete brand guidelines, cohesive logo designs, custom typography selection, color theory curation, and physical corporate brand guidelines.',
    iconName: 'Sparkles',
    badge: 'Elite'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'travel-agency',
    title: 'Voyage Horizons Travel Portal',
    category: 'Tours & Travel Websites',
    description: 'A premium travel booking platform featuring immersive 3D destination previews, interactive itineraries, and high-speed search filters.',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    demoUrl: '#',
    tags: ['React', 'Tailwind', 'Interactive Maps', 'Booking System']
  },
  {
    id: 'gym-app',
    title: 'ApexPulse Workout Assistant',
    category: 'Gym App UI',
    description: 'A sleek, hyper-modern dark UI fitness application dashboard complete with real-time biometric tracking, custom visual charts, and sound syncs.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    demoUrl: '#',
    tags: ['Framer Motion', 'Mobile Responsive', 'Interactive Charts', 'Dark Theme']
  },
  {
    id: 'islamic-app',
    title: 'Noor Al-Iman Digital Hub',
    category: 'Islamic App',
    description: 'A beautifully crafted, serene, and clutter-free companion app with dynamic pray timers, audio Quran recitation integration, and elegant calligraphy highlights.',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    demoUrl: '#',
    tags: ['Next-Gen Audio', 'Multilingual', 'Clean UI', 'Locational APIs']
  },
  {
    id: 'restaurant-web',
    title: 'Savory Wood-Fired Eatery',
    category: 'Restaurant Website',
    description: 'A high-end gastronomic presentation page featuring full high-resolution interactive food carousels, dynamic seating reservations, and live order alerts.',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
    demoUrl: '#',
    tags: ['Interactive Menu', 'Reservation Engine', 'Fluid Layout', 'Tailwind']
  },
  {
    id: 'fabrication-business',
    title: 'Vanguard Industrial Fabrication',
    category: 'Fabrication Business Website',
    description: 'A robust, corporate brand-led engineering showcase engineered to catalog steel works, CNC precision machining, and architectural client deliverables.',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    demoUrl: '#',
    tags: ['Product Catalog', 'RFQ Engine', 'Industrial Layout', 'High Performance']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'pledge-1',
    name: 'Zero-Template Handcrafted Quality',
    role: 'Our Engineering Standard',
    company: 'ZK Digital Solutions',
    comment: 'We code from scratch using native high-performance React and styled Tailwind CSS. We never deploy heavy, over-bloated pre-made templates, ensuring your business owns modular, super-fast, and secure source files.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'pledge-2',
    name: 'Explicit Honesty & Clear Budgets',
    role: 'Our Relationship Standard',
    company: 'ZK Business Hub Assurance',
    comment: 'We believe in true transparency. There are no hidden fees, artificial scarcity gimmicks, or exaggerated metrics. Every quote is custom-tailored to provide practical, straightforward value for your startups and brands.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'pledge-3',
    name: 'Backed by ZK Business Hub',
    role: 'Our Operational Standard',
    company: 'Vested Security SLA',
    comment: 'Founded by Usman Pathan as a trusted digital venture under ZK Business Hub. Enjoy complete legal security, vetted service frameworks, and systematic reliability throughout our entire branding and web development workflow.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to build a customized business portfolio website?',
    answer: 'A standard custom website takes around 1 to 3 weeks depending on the features and design complexity. Our AI-powered workflows and highly organized development sprints allow us to deploy production-ready code significantly faster than traditional agencies.',
    category: 'Delivery'
  },
  {
    id: 'faq-2',
    question: 'Are the websites you build fully responsive and mobile-optimized?',
    answer: 'Absolutely. Every layout, card, and interactive element we ship is fully responsive across desktop, laptop, tablet, and mobile displays. We design mobile-first to ensure perfect finger touches and layouts.',
    category: 'Technical'
  },
  {
    id: 'faq-3',
    question: 'What is the role of the parent company ZK Business Hub?',
    answer: 'ZK Digital Solutions is the core digital arm of ZK Business Hub. This backing leverages robust business resources, specialized strategic advice, and institutional trustworthiness to satisfy comprehensive digital needs smoothly under one umbrella.',
    category: 'Company'
  },
  {
    id: 'faq-4',
    question: 'Do you offer ongoing post-launch support and hosting?',
    answer: 'Yes, we provide 24/7 technical hosting support, scheduled code optimizations, manual structural reviews, and analytics dashboard maintenance plans. We stay with you long after the initial launch.',
    category: 'Support'
  },
  {
    id: 'faq-5',
    question: 'How does your AI Website Creation service work?',
    answer: 'For our AI Website Creation, we combine advanced generative algorithms with tailored React frontends. This allows us to integrate features like intelligent contextual searching, real-time smart content recommendation, and robust AI automated customer chat widgets directly into your portal.',
    category: 'AI Services'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Top Website Design Trends Driving Business Conversion in 2026',
    excerpt: 'Explore how premium dark interfaces, interactive 3D elements, glassmorphism UI, and hyper-personalized components are changing user engagement standards.',
    category: 'Website Trends',
    date: 'May 18, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    author: {
      name: 'ZK Tech Lead',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 'blog-2',
    title: 'Unlocking Local Business Growth Through Targeted Local SEO',
    excerpt: 'A comprehensive checklist on how structural schema, location listings, fast mobile design, and localized service categories can place you at the top of search rankings.',
    category: 'Business Growth',
    date: 'May 12, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    author: {
      name: 'ZK Strategy Team',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 'blog-3',
    title: 'Integrating Modern AI Chatbots & Automations on Landing Pages',
    excerpt: 'How embedding client-side generative tools inside your agency and customer pipelines turns passive traffic into ready-to-book warm business prospects instantly.',
    category: 'AI Tools',
    date: 'May 02, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    author: {
      name: 'AI Integration Expert',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    }
  }
];

export const WHY_CHOOSE_US_STATS: Stat[] = [
  { id: 'stat-exp', value: 100, suffix: '%', label: 'Hand-crafted Custom React Layouts (No Templates)' },
  { id: 'stat-proj', value: 100, suffix: '%', label: 'Dedicated Focus on Honesty & Integrity' },
  { id: 'stat-cl', value: 1, suffix: 'st', label: 'Founder-led Accountable Service by Usman Pathan' },
  { id: 'stat-dl', value: 24, suffix: '/7', label: 'Reliable Support & Transparency via ZK Business Hub' }
];

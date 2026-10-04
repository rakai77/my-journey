import { JourneyPhase, SkillCategory, ProfileInfo } from '../types/journey';

export const profileInfo: ProfileInfo = {
  name: 'Rakai Wangsasatia',
  title: 'Senior Mobile Engineer & AI Integrator',
  tagline: 'Bridging the gap between robust mobile architecture and the agentic AI frontier.',
  bio: 'A Mid-Senior Software Engineer specializing in mobile architecture, multi-module scaling, and high-security fintech platforms. Now evolving into an AI Engineer, building agentic workflows and on-device intelligent experiences.',
  stats: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Major Apps Shipped', value: '7' },
    { label: 'Countries Served', value: '5', detail: 'ID, MY, SG, TH, IN' },
  ],
  socialLinks: [
    { label: 'GitHub', url: '#', icon: 'github' },
    { label: 'LinkedIn', url: '#', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:contact@example.com', icon: 'mail' },
  ]
};

export const journeyPhases: JourneyPhase[] = [
  {
    id: 'phase-1',
    phaseNumber: 1,
    badge: 'Phase 01: Enterprise Scale',
    title: 'Tricor Unify & Vistra+Orisoft',
    company: 'Tricor Group / Vistra',
    role: 'Mobile Software Engineer',
    period: '2023 - 2024',
    duration: '1 Year',
    clientOrScale: 'Clients: ID, MY, SG, TH, IN',
    location: 'Regional (B2B)',
    shortSummary: 'Engineered the new Tricor Unify HRIS application from scratch to full production release by October 2023.',
    overview: 'Led a major replatforming effort in a fast-paced B2B environment. Engineered the new Tricor Unify application from scratch, utilizing modern Android architecture to deliver a seamless HRIS experience. Successfully brought the project to a full production release on the Play Store and App Store in October 2023, while simultaneously maintaining legacy regional apps.',
    keyResponsibilities: [
      'Architected and built the Tricor Unify app from scratch to global store publication.',
      'Maintained and shipped new features for the legacy Unify Mobile app.',
      'Integrated Google Maps Platform for geofencing-based attendance tracking.',
      'Handled push notifications and real-time syncing for cross-country deployments.'
    ],
    architecture: {
      style: 'MVVM & Modularization',
      description: 'Scalable MVVM architecture integrated with robust modularization to support a massive enterprise codebase and rapid feature delivery.',
      keyDecisions: [
        'Adopted Repository Pattern to manage local vs remote data sources.',
        'Strict decoupling to allow easier unit testing of business rules.'
      ]
    },
    techStack: ['Kotlin', 'MVVM', 'RoomDB', 'SharedPreferences', 'Modularization', 'Mockk & Turbine', 'Google Maps API', 'Firebase'],
    metrics: [
      { label: 'Countries Served', value: '5' },
      { label: 'Concurrent Products', value: '2' },
      { label: 'App Status', value: 'Published', detail: 'Android & iOS' }
    ],
    challenges: [
      {
        challenge: 'Managing dual-product maintenance across Android and iOS teams.',
        solution: 'Implemented strict git-flow and standardized code reviews across platforms.',
        outcome: 'Successfully released Tricor Unify while keeping legacy app stable for existing clients.'
      }
    ],
    lessonsLearned: [
      'Balancing new development with legacy maintenance requires rigorous prioritization and clean code practices.'
    ],
    themeColor: {
      primary: '#8b5cf6', // violet-500
      accent: '#ddd6fe', // violet-200
      glow: 'rgba(139, 92, 246, 0.5)'
    },
    propType: 'tricor-globe',
    references: [
      {
        label: 'Tricor Unify',
        url: 'https://play.google.com/store/apps/details?id=com.orisoft.tricorunify',
        imageUrl: '/images/3d/mockup_workflow_3d.jpg'
      },
      {
        label: 'Vistra+Orisoft',
        url: 'https://play.google.com/store/apps/details?id=com.orisoft.app.unifymobile',
        imageUrl: '/images/3d/mockup_unify_3d.jpg'
      }
    ],
    gallery3D: [
      {
        id: 'tricor-1',
        title: 'Tricor Unify ESS',
        subtitle: 'Employee Self Service',
        badge: 'Play Store Live',
        description: 'Tricor Unify Employee Self Service Portal.',
        imageUrl: '/images/screenshots/tricor_1.webp',
        tag: 'Mobile App / Kotlin',
        type: 'Tricor Unify',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.orisoft.tricorunify'
      },
      {
        id: 'tricor-2',
        title: 'Tricor Unify Leave',
        subtitle: 'Leave Management',
        badge: 'Play Store Live',
        description: 'Manage leaves and attendance seamlessly.',
        imageUrl: '/images/screenshots/tricor_2.webp',
        tag: 'Mobile App / Java',
        type: 'Tricor Unify',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.orisoft.tricorunify'
      },
      {
        id: 'tricor-3',
        title: 'Tricor Unify Dashboard',
        subtitle: 'Main Dashboard',
        badge: 'Play Store Live',
        description: 'Company news and summary dashboard.',
        imageUrl: '/images/screenshots/tricor_3.webp',
        tag: 'Mobile App / XML',
        type: 'Tricor Unify',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.orisoft.tricorunify'
      },
      {
        id: 'vistra-1',
        title: 'Vistra+Orisoft',
        subtitle: 'HCM Portal',
        badge: 'Play Store Live',
        description: 'Vistra Mobile Human Capital Management application.',
        imageUrl: '/images/screenshots/vistra_1.webp',
        tag: 'Mobile App',
        type: 'Vistra',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.orisoft.app.unifymobile'
      },
      {
        id: 'vistra-2',
        title: 'Vistra GPS Tracking',
        subtitle: 'Geo-Attendance',
        badge: 'Play Store Live',
        description: 'GPS-based attendance tracking and logging.',
        imageUrl: '/images/screenshots/vistra_2.webp',
        tag: 'Geolocation / Android',
        type: 'Vistra',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.orisoft.app.unifymobile'
      },
      {
        id: 'vistra-3',
        title: 'Vistra Claims',
        subtitle: 'Claim Management',
        badge: 'Play Store Live',
        description: 'Claim submission and approval workflows.',
        imageUrl: '/images/screenshots/vistra_3.webp',
        tag: 'Enterprise',
        type: 'Vistra',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.orisoft.app.unifymobile'
      }
    ]
  },
  {
    id: 'phase-2',
    phaseNumber: 2,
    badge: 'Phase 02: Banking Integration',
    title: 'Bale by Bank BTN & Smart Residence',
    company: 'Bank BTN',
    role: 'Android Engineer',
    period: '2021',
    duration: '1 yr 3 mos',
    clientOrScale: 'Bank BTN',
    location: 'Indonesia',
    shortSummary: 'Spearheaded the complex migration of the Smart Residence app into the Bale by BTN super-app ecosystem, establishing a unified B2C mobile banking platform.',
    overview: 'Led a high-impact initiative to migrate and enhance the standalone Smart Residence application into the unified Bale by BTN super-app. This strategic move seamlessly integrated residential management features—including real-time virtual account (VA) payments and global push notifications—directly into Bank BTN\'s core mobile banking ecosystem, empowering a vast network of B2C customers.',
    keyResponsibilities: [
      'Orchestrated the end-to-end migration of Smart Residence features into the Bale by BTN super-app.',
      'Architected a global push notification handling system within the main mobile banking application.',
      'Developed secure, real-time Virtual Account payment flows dedicated to residential and mortgage (KPR) transactions.',
      'Modernized legacy business logic to align with the new super-app architecture and tech stack.'
    ],
    architecture: {
      style: 'MVP with Modular Components',
      description: 'Employed a robust MVP architecture to clearly separate business logic from UI, enabling easier unit testing and safer feature migrations from the legacy codebase.',
      keyDecisions: [
        'Adopted Koin for lightweight, decoupled Dependency Injection across newly integrated modules.',
        'Utilized Kotlin Coroutines for highly performant, non-blocking network operations and UI updates.',
        'Enforced rigorous reliability through comprehensive unit testing using MockK and Turbine.'
      ]
    },
    techStack: ['Kotlin', 'MVP Architecture', 'Coroutines', 'Koin DI', 'MockK & Turbine', 'XML Layouts'],
    metrics: [
      { label: 'Integration', value: 'B2C Super-App' },
      { label: 'Payments', value: 'Real-time VA' }
    ],
    challenges: [
      {
        challenge: 'Enhancing and migrating business logic from a legacy app to a new super-app ecosystem with differing implementations and tech stacks.',
        solution: 'Conducted a thorough architectural audit and rewrote critical flows using MVP and Coroutines, ensuring seamless compatibility and stability.',
        outcome: 'Successfully unified the platforms without disrupting existing B2C users, massively reducing technical debt.'
      },
      {
        challenge: 'Integrating Virtual Account (VA) payments directly with the mobile banking app for seamless residential billing.',
        solution: 'Developed specialized payment modules that securely interface with Bank BTN\'s core banking APIs for real-time VA reconciliation.',
        outcome: 'Streamlined the residential payment process, resulting in faster transaction times and an elevated customer experience.'
      }
    ],
    lessonsLearned: [
      'Mastered the complexities of migrating legacy systems into modern architectures.',
      'Gained deep insights into secure banking API integrations and payment flow handling.'
    ],
    themeColor: {
      primary: '#0ea5e9', // Sky blue
      accent: '#38bdf8',
      glow: 'rgba(14, 165, 233, 0.4)'
    },
    propType: 'btn-modular',
    gallery3D: [
      {
        id: 'btn-1',
        title: 'Bale Super App',
        subtitle: 'Dashboard',
        badge: 'UI Design',
        description: 'Main dashboard integration for Bank BTN.',
        imageUrl: '/images/screenshots/figma_bale_2.png',
        tag: 'Mobile App',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.co.btn.smartresidence'
      },
      {
        id: 'btn-2',
        title: 'Smart Residence',
        subtitle: 'Community',
        badge: 'UI Design',
        description: 'Residential management tools integrated directly into the super-app.',
        imageUrl: '/images/screenshots/figma_bale_3.png',
        tag: 'Mobile App',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.co.btn.smartresidence'
      },
      {
        id: 'btn-3',
        title: 'VA Payments',
        subtitle: 'Billing System',
        badge: 'UI Design',
        description: 'Real-time virtual account billing for residential tracking.',
        imageUrl: '/images/screenshots/figma_bale_1.png',
        tag: 'Fintech',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.co.btn.smartresidence'
      }
    ]
  },
  {
    id: 'phase-3',
    phaseNumber: 3,
    badge: 'Phase 03: Media & Multi-Platform',
    title: 'Kompas.id Media Platform',
    company: 'NBS',
    role: 'Senior Mobile Engineer',
    period: '2022 - 2023',
    duration: '1 Year',
    clientOrScale: 'Kompas.id',
    location: 'Indonesia',
    shortSummary: 'Expanded Kompas.id to Android TV and explored Kotlin Multiplatform Mobile (KMM) for cross-platform efficiency.',
    overview: 'Joined the engineering team for one of Indonesia\'s largest digital media platforms. Expanded the mobile ecosystem to smart TVs and laid the groundwork for code-sharing between iOS and Android.',
    keyResponsibilities: [
      'Developed the Android TV app using the Leanback SDK and Jetpack Compose for TV.',
      'Integrated ExoPlayer with DRM for secure, high-quality audio/video streaming.',
      'Led R&D for Kotlin Multiplatform Mobile (KMM) integration.',
      'Implemented dynamic paywall and In-App Purchase logic.'
    ],
    architecture: {
      style: 'MVI (Model-View-Intent) & KMM',
      description: 'Unidirectional data flow architecture suited for complex media state management and shared multiplatform logic.',
      keyDecisions: [
        'Adopted MVI to handle complex UI states (loading, buffering, playing, error) predictably.',
        'Isolated business logic into shared KMM modules.'
      ]
    },
    techStack: ['Kotlin Multiplatform (KMM)', 'Android TV', 'ExoPlayer', 'DRM', 'MVI'],
    metrics: [
      { label: 'Platforms', value: 'Mobile & TV' },
      { label: 'Streaming', value: 'DRM Protected' }
    ],
    challenges: [
      {
        challenge: 'Navigating Android TV using a D-pad remote without touch events.',
        solution: 'Implemented strict focus management and custom focus indicators using Compose for TV.',
        outcome: 'Delivered a seamless, accessible TV viewing experience.'
      }
    ],
    lessonsLearned: [
      'Cross-platform development requires careful consideration of platform-specific UX paradigms.'
    ],
    themeColor: {
      primary: '#3b82f6', // blue-500
      accent: '#bfdbfe', // blue-200
      glow: 'rgba(59, 130, 246, 0.5)'
    },
    propType: 'kompas-player',
    gallery3D: [
      {
        id: 'kompas-id',
        title: 'Kompas.id',
        subtitle: 'Media Platform',
        badge: 'Play Store Live',
        description: 'Media Platform',
        imageUrl: '/images/screenshots/kompasid.webp',
        tag: 'Play Store',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.kompas.app'
      }
    ]
  },
  {
    id: 'phase-4',
    phaseNumber: 4,
    badge: 'Phase 04: High-Security Fintech',
    title: 'Pegadaian Gold Fintech Platform',
    company: 'PT Pegadaian',
    role: 'Senior Mobile Engineer',
    period: '2023 - 2024',
    duration: '1 Year',
    clientOrScale: 'State-Owned Financial Enterprise',
    location: 'Indonesia',
    shortSummary: 'Built high-security financial infrastructure for gold savings and micro-loans.',
    overview: 'Engineered critical financial systems handling digital gold investments and micro-financing. The primary focus was on ensuring banking-grade security and transaction reliability.',
    keyResponsibilities: [
      'Implemented Root & Jailbreak detection mechanisms.',
      'Integrated SSL/Certificate Pinning to prevent Man-in-the-Middle (MITM) attacks.',
      'Added Biometric Authentication (BiometricPrompt) for secure logins and transactions.',
      'Refactored legacy async code to modern Kotlin Coroutines and StateFlow.'
    ],
    architecture: {
      style: 'Domain-Driven Design (DDD)',
      description: 'Strict separation of core financial domains to ensure business rules remain untainted by framework details.',
      keyDecisions: [
        'Used StateFlow to manage complex transactional states reliably across configuration changes.',
        'Centralized all security interceptors at the network layer.'
      ]
    },
    techStack: ['Coroutines', 'StateFlow', 'Security Utils', 'Biometrics', 'SSL Pinning'],
    metrics: [
      { label: 'Security Audit', value: '100% Passed' },
      { label: 'Crash-Free', value: '99.9%' }
    ],
    challenges: [
      {
        challenge: 'Securing sensitive user financial data on compromised devices.',
        solution: 'Integrated hardware-backed keystore encryption and robust obfuscation (ProGuard/R8).',
        outcome: 'Prevented data extraction and unauthorized access on rooted devices.'
      }
    ],
    lessonsLearned: [
      'In fintech, security is not a feature; it is the fundamental baseline.'
    ],
    themeColor: {
      primary: '#eab308', // yellow-500 (gold)
      accent: '#fef08a', // yellow-200
      glow: 'rgba(234, 179, 8, 0.5)'
    },
    propType: 'pegadaian-vault',
    gallery3D: [
      {
        id: 'pegadaian',
        title: 'Pegadaian Digital',
        subtitle: 'Fintech App',
        badge: 'Play Store Live',
        description: 'Fintech platform',
        imageUrl: '/images/screenshots/pegadaian.jpg',
        tag: 'Play Store',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.pegadaian.pds'
      }
    ]
  },
  {
    id: 'phase-5',
    phaseNumber: 5,
    badge: 'Phase 05: Hardware Integration',
    title: 'Livin\' Merchant POS Ecosystem',
    company: 'Bank Mandiri',
    role: 'Tech Lead / Senior Mobile Engineer',
    period: '2024 - Present',
    duration: 'Current',
    clientOrScale: 'Millions of MSMEs',
    location: 'Indonesia',
    shortSummary: 'Leading the mobile integration for POS hardware, Bluetooth thermal printers, and offline-first payments.',
    overview: 'Leading the technical implementation for a massive merchant ecosystem. Focused on hardware integration (printers, EDC) and ensuring merchants can process payments even in unstable network conditions.',
    keyResponsibilities: [
      'Integrated Bluetooth Thermal Printers using low-level ESC/POS command parsing.',
      'Established EDC terminal communication protocols.',
      'Developed real-time QRIS dynamic payment settlement flows.',
      'Architected an Offline-First syncing engine using Room Database and WorkManager.'
    ],
    architecture: {
      style: 'Offline-First Architecture',
      description: 'Local database acts as the single source of truth, synchronizing with the backend asynchronously.',
      keyDecisions: [
        'Utilized Room for robust local storage.',
        'Used WorkManager for guaranteed eventual delivery of offline transactions.'
      ]
    },
    techStack: ['Bluetooth BLE', 'ESC/POS', 'Room DB', 'WorkManager', 'Hardware Integration'],
    metrics: [
      { label: 'Hardware', value: 'POS & EDC' },
      { label: 'Architecture', value: 'Offline-First' }
    ],
    challenges: [
      {
        challenge: 'Printing receipts reliably across dozens of different, cheap thermal printer brands.',
        solution: 'Built a custom ESC/POS command builder to standardize byte arrays sent over Bluetooth RFCOMM.',
        outcome: 'Achieved 95%+ compatibility with generic thermal printers in the market.'
      }
    ],
    lessonsLearned: [
      'Hardware integration requires deep understanding of low-level bytes and asynchronous error handling.'
    ],
    themeColor: {
      primary: '#f97316', // orange-500
      accent: '#fed7aa', // orange-200
      glow: 'rgba(249, 115, 22, 0.5)'
    },
    propType: 'livin-pos',
    gallery3D: [
      {
        id: 'livin-pos',
        title: 'Livin POS',
        subtitle: 'Merchant POS',
        badge: 'Play Store Live',
        description: 'POS Merchant',
        imageUrl: '/images/screenshots/livin_pos.jpg',
        tag: 'Play Store',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.co.bankmandiri.livinmerchant'
      }
    ]
  },
  {
    id: 'phase-6',
    phaseNumber: 6,
    badge: 'Phase 06: The Frontier',
    title: 'AI & Agentic Mobile Engineering',
    company: 'Future',
    role: 'AI Solutions Engineer',
    period: 'Future Outlook',
    duration: 'Ongoing',
    clientOrScale: 'Next-Gen Applications',
    location: 'Global',
    shortSummary: 'Evolving from traditional mobile development to integrating Autonomous AI Agents and LLMs directly into applications.',
    overview: 'The mobile ecosystem is shifting. My current trajectory focuses on bridging mobile engineering with the AI frontier—building agentic workflows, on-device intelligence, and autonomous tools that write code and solve problems.',
    keyResponsibilities: [
      'Exploring On-Device ML and optimized LLM execution.',
      'Building agentic developer tooling using LangChain, LlamaIndex, and Gemini API.',
      'Implementing Vector RAG (Retrieval-Augmented Generation) pipelines for mobile clients.',
      'Mastering function calling and prompt engineering.'
    ],
    architecture: {
      style: 'Agentic workflows & RAG',
      description: 'Systems designed around proactive autonomous agents rather than passive CRUD interfaces.',
      keyDecisions: [
        'Decoupling reasoning (LLM) from execution (Function calling).',
        'Integrating context-aware vector databases for dynamic prompts.'
      ]
    },
    techStack: ['Gemini API', 'LangChain', 'On-Device ML', 'Prompt Engineering', 'Vector DB'],
    metrics: [
      { label: 'Focus', value: 'AI Agents' },
      { label: 'Goal', value: 'Autonomous Engineering' }
    ],
    challenges: [
      {
        challenge: 'Balancing LLM latency and hallucination rates in production.',
        solution: 'Implementing robust RAG pipelines and strict output parsing validation.',
        outcome: 'More predictable and reliable AI-driven features.'
      }
    ],
    lessonsLearned: [
      'Prompt engineering is the new compilation; context is everything.'
    ],
    themeColor: {
      primary: '#ec4899', // pink-500
      accent: '#fbcfe8', // pink-200
      glow: 'rgba(236, 72, 153, 0.5)'
    },
    propType: 'ai-core'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Mobile Engineering',
    skills: [
      { name: 'Kotlin', level: 'Expert', tags: ['Coroutines', 'Flow'] },
      { name: 'Android SDK', level: 'Expert', tags: ['Lifecycle', 'Services'] },
      { name: 'Jetpack Compose', level: 'Advanced', tags: ['Declarative UI'] },
      { name: 'Java', level: 'Advanced', tags: ['Legacy Systems'] },
      { name: 'KMM', level: 'Proficient', tags: ['Multiplatform'] }
    ]
  },
  {
    category: 'Architecture & Design',
    skills: [
      { name: 'Clean Architecture', level: 'Expert' },
      { name: 'MVVM & MVI', level: 'Expert' },
      { name: 'Multi-Module', level: 'Advanced' },
      { name: 'Offline-First', level: 'Advanced', tags: ['Room', 'WorkManager'] },
      { name: 'Design Systems', level: 'Advanced' }
    ]
  },
  {
    category: 'Hardware & Core',
    skills: [
      { name: 'Bluetooth BLE', level: 'Advanced', tags: ['Thermal Printers'] },
      { name: 'ESC/POS Protocol', level: 'Advanced' },
      { name: 'Google Maps API', level: 'Advanced' },
      { name: 'ExoPlayer / DRM', level: 'Proficient' },
      { name: 'Security', level: 'Advanced', tags: ['Root Detection', 'SSL Pinning'] }
    ]
  },
  {
    category: 'AI & Emerging',
    skills: [
      { name: 'Prompt Engineering', level: 'Advanced' },
      { name: 'Agentic Workflows', level: 'Proficient', tags: ['LangChain'] },
      { name: 'LLM Integration', level: 'Proficient', tags: ['Gemini', 'Function Calling'] },
      { name: 'Vector RAG', level: 'Proficient' }
    ]
  }
];

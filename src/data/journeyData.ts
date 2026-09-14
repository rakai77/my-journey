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
    id: 'phase-0',
    phaseNumber: 0,
    badge: 'Phase 00: Foundations',
    title: 'The Origin: Banking Android Bootcamp',
    company: 'Dicoding & Banking Bootcamp',
    role: 'Mobile Development Apprentice',
    period: 'Early Career',
    duration: '6 Months',
    clientOrScale: 'Individual Skill Building',
    location: 'Indonesia',
    shortSummary: 'Mastering Java, Kotlin, and the fundamentals of Android SDK through intensive bootcamps.',
    overview: 'My journey began with a deep dive into mobile engineering. Through an intensive banking Android bootcamp and Dicoding, I built a strong foundation in Object-Oriented Programming (OOP), Android lifecycle, and architectural patterns like MVC and MVP.',
    keyResponsibilities: [
      'Built native Android applications from scratch using Java and Kotlin.',
      'Implemented local data persistence using SQLite.',
      'Gained practical understanding of Clean Code and Git version control.'
    ],
    architecture: {
      style: 'MVC & MVP',
      description: 'Standard monolithic applications separating view logic from data manipulation.',
      keyDecisions: [
        'Used MVP to decouple business logic from Activities/Fragments.',
        'Adopted Kotlin early as the primary development language.'
      ]
    },
    techStack: ['Java', 'Kotlin', 'Android SDK', 'SQLite', 'XML', 'Git'],
    metrics: [
      { label: 'Apps Built', value: '3+' },
      { label: 'Core Language', value: 'Kotlin' }
    ],
    challenges: [
      {
        challenge: 'Understanding Android component lifecycles',
        solution: 'Built multiple small apps focusing on configuration changes and state retention.',
        outcome: 'Solidified knowledge to prevent memory leaks and crash scenarios.'
      }
    ],
    lessonsLearned: [
      'A strong grasp of the fundamentals (OOP, Memory Management) is more valuable than knowing specific libraries.'
    ],
    themeColor: {
      primary: '#0ea5e9', // sky-500
      accent: '#bae6fd', // sky-200
      glow: 'rgba(14, 165, 233, 0.5)'
    },
    propType: 'bootcamp-terminal'
  },
  {
    id: 'phase-1',
    phaseNumber: 1,
    badge: 'Phase 01: Enterprise Scale',
    title: 'Tricor Unify: Multi-Country HRIS Replatforming',
    company: 'Tricor Orisoft',
    role: 'Mobile Software Engineer',
    period: '2019 - 2021',
    duration: '1 Year 7 Months',
    clientOrScale: 'Clients: ID, MY, SG, TH, IN',
    location: 'Regional (B2B)',
    shortSummary: 'Rebuilt Tricor Unify from scratch while maintaining legacy Unify Mobile for clients across 5 countries.',
    overview: 'Stepped into a fast-paced B2B environment to handle a major replatforming effort. Tasked with building the new "Tricor Unify" app from scratch using modern standards while simultaneously maintaining the legacy "Unify Mobile" app for regional clients.',
    keyResponsibilities: [
      'Architected and built Tricor Unify Android app from scratch.',
      'Maintained and shipped new features for the legacy Unify Mobile app.',
      'Integrated Google Maps Platform for geofencing-based attendance tracking.',
      'Handled push notifications and real-time syncing for cross-country deployments.'
    ],
    architecture: {
      style: 'Clean Architecture',
      description: 'Layered architecture separating Domain, Data, and Presentation to support a massive enterprise codebase.',
      keyDecisions: [
        'Adopted Repository Pattern to manage local vs remote data sources.',
        'Strict decoupling to allow easier unit testing of business rules.'
      ]
    },
    techStack: ['Kotlin', 'Clean Architecture', 'Google Maps API', 'Firebase Cloud Messaging', 'Retrofit'],
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
    propType: 'tricor-globe'
  },
  {
    id: 'phase-2',
    phaseNumber: 2,
    badge: 'Phase 02: Super App',
    title: 'Super App BTN Bale',
    company: 'Vascomm',
    role: 'Senior Android Engineer',
    period: '2021 - 2022',
    duration: '1 Year',
    clientOrScale: 'Bank BTN',
    location: 'Indonesia',
    shortSummary: 'Architected a multi-module Super App integrating 15+ micro-apps and a custom Design System.',
    overview: 'Led the architectural transition for Bank BTN\'s property and banking Super App. Scaled the codebase from a monolith to a highly scalable multi-module architecture to support multiple concurrent development teams.',
    keyResponsibilities: [
      'Migrated monolithic app to a 15+ Dynamic Feature Module architecture.',
      'Spearheaded the migration to Jetpack Compose for modern declarative UI.',
      'Developed a reusable internal UI Design System component library.',
      'Implemented strict banking security protocols via OkHttp Interceptors.'
    ],
    architecture: {
      style: 'Multi-Module & MVVM',
      description: 'Highly modularized project structure based on business domains, enabling independent compilation.',
      keyDecisions: [
        'Abstracted core dependencies into a shared `:core` module.',
        'Enforced strict boundaries between `:feature` modules to prevent cyclic dependencies.'
      ]
    },
    techStack: ['Jetpack Compose', 'Multi-Module', 'MVVM', 'OkHttp', 'ProGuard/R8'],
    metrics: [
      { label: 'Feature Modules', value: '15+' },
      { label: 'UI Framework', value: 'Compose Migration' }
    ],
    challenges: [
      {
        challenge: 'Extremely slow build times due to monolithic structure.',
        solution: 'Refactored into independent feature modules and optimized Gradle build caching.',
        outcome: 'Reduced incremental build times by 60%, drastically improving developer velocity.'
      }
    ],
    lessonsLearned: [
      'Modularization is not just about code separation; it is about scaling team organization.'
    ],
    themeColor: {
      primary: '#10b981', // emerald-500
      accent: '#a7f3d0', // emerald-200
      glow: 'rgba(16, 185, 129, 0.5)'
    },
    propType: 'btn-modular'
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
    propType: 'kompas-player'
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
    propType: 'pegadaian-vault'
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
    propType: 'livin-pos'
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

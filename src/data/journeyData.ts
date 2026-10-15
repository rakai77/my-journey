import { JourneyPhase, SkillCategory, ProfileInfo } from '../types/journey';

export const profileInfo: ProfileInfo = {
  name: 'Rakai Wangsasatia',
  title: 'Mid-Senior Mobile Engineer & AI Integrator',
  tagline: 'Bridging the gap between robust mobile architecture and the agentic AI frontier.',
  bio: 'A Mid-Senior Software Engineer specializing in mobile architecture, multi-module scaling, and high-security fintech platforms. Now evolving into an AI Engineer, building agentic workflows and on-device intelligent experiences.',
  stats: [
    { label: 'Years Experience', value: '3+' },
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
    role: 'Junior Mobile Software Engineer',
    period: 'Apr 2023 - Sep 2024',
    duration: '1 yr 7 mos',
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
    period: 'Oct 2024 - Dec 2024',
    duration: '3 Months',
    clientOrScale: 'Bank BTN',
    location: 'Indonesia',
    shortSummary: 'High-velocity 3-month integration migrating Smart Residence into the Bale by BTN super-app ecosystem, establishing unified B2C mobile banking workflows.',
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
        id: 'btn-ps-1',
        title: 'Bale by BTN',
        subtitle: 'Smart Residence',
        badge: 'Play Store Live',
        description: 'Bale by BTN Super App integration.',
        imageUrl: '/images/screenshots/bale_1.webp',
        tag: 'Play Store',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.co.btn.smartresidence'
      },
      {
        id: 'btn-ps-2',
        title: 'Bale Dashboard',
        subtitle: 'Home',
        badge: 'Play Store Live',
        description: 'Main landing and navigation.',
        imageUrl: '/images/screenshots/bale_2.webp',
        tag: 'Play Store',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.co.btn.smartresidence'
      },
      {
        id: 'btn-ps-3',
        title: 'Property Search',
        subtitle: 'Mortgage',
        badge: 'Play Store Live',
        description: 'Real estate and property search feature.',
        imageUrl: '/images/screenshots/bale_3.webp',
        tag: 'Play Store',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.co.btn.smartresidence'
      },
      {
        id: 'btn-ps-4',
        title: 'Smart Residence Super-App',
        subtitle: 'Kelola Tagihan & Hunian',
        badge: 'Super-App Hub',
        description: 'Fitur terintegrasi pengelolaan hunian, tagihan B2C, dan panduan warga.',
        imageUrl: '/images/screenshots/bale_figma_framed.webp',
        tag: 'Mobile App',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.co.btn.smartresidence'
      },
      {
        id: 'btn-ps-5',
        title: 'Unit & Resident Management',
        subtitle: 'List Unit & Persetujuan',
        badge: 'Play Store Live',
        description: 'Manajemen unit apartemen dan gedung Menara BTN dengan alur persetujuan mudah.',
        imageUrl: '/images/screenshots/bale_5.webp',
        tag: 'Residential',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.co.btn.smartresidence'
      },
      {
        id: 'btn-ps-6',
        title: 'Balé Community Dashboard',
        subtitle: 'Home Service & Layanan Warga',
        badge: 'Play Store Live',
        description: 'Dashboard utama balé community dengan integrasi Home Service dan Balé Properti.',
        imageUrl: '/images/screenshots/bale_4.webp',
        tag: 'Super-App',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.co.btn.smartresidence'
      }
    ]
  },
  {
    id: 'phase-3',
    phaseNumber: 3,
    badge: 'Phase 03: OTT Streaming & Multiplatform',
    title: 'KGNow! by Kompas Gramedia',
    company: 'NBS (Nusantara Beta Studio)',
    role: 'Mobile Software Engineer',
    period: 'Jan 2025 - May 2025',
    duration: '4 Months',
    clientOrScale: 'Kompas Gramedia • IT Consultancy',
    location: 'Jakarta, Indonesia',
    shortSummary: 'Engineered the KGNow! OTT streaming super-app for Kompas Gramedia, pioneering Compose Multiplatform and high-throughput video engines.',
    overview: 'Partnered as Mobile Software Engineer at digital consultancy NBS (Nusantara Beta Studio), serving media conglomerate Kompas Gramedia to architect and develop KGNow!—an enterprise OTT video streaming and VOD aggregator unifying live broadcasts and video content across Kompas TV, Kompas.com, Tribunnews, and Grid.id. Pioneered the team\'s adoption of Compose Multiplatform (CMP) and modular Clean MVVM architecture. Spearheaded mission-critical feature modules: high-performance video player engine (:feature-player with 24/7 live streaming and short-form rolls), offline video caching (:feature-download), and personalized content discovery (:feature-dashboard) integrated with SQLDelight, Proto DataStore, Google Mobile Ads, and Play Integrity.',
    keyResponsibilities: [
      'Spearheaded mobile architecture and development for the KGNow! video streaming platform using Kotlin, Compose Multiplatform (CMP), and SwiftUI.',
      'Architected and implemented :feature-player, delivering low-latency HLS/DASH video playback, live streaming for Kompas TV 24/7, and smooth gesture-driven vertical video rolls.',
      'Built :feature-download, enabling secure offline video caching, background download task scheduling, and local media playback using encrypted storage.',
      'Developed :feature-dashboard with dynamic recommendation carousels, categorized video shelves, and seamless Google Mobile Ads (AdMob/IMA) video monetization.',
      'Implemented multiplatform local persistence using SQLDelight DB for structured content catalogs and Proto DataStore for type-safe user preferences.',
      'Enforced app security and media integrity by integrating Google Play Integrity API to prevent illicit content scraping and tampering.'
    ],
    architecture: {
      style: 'Modular MVVM & Compose Multiplatform',
      description: 'Multi-module architecture isolating cross-platform domain logic and media player controls from UI presentation, leveraging unidirectional StateFlow state streams.',
      keyDecisions: [
        'Multi-Module structure (:core, :domain, :data, :feature-player, :feature-download, :feature-dashboard) ensuring independent build caches and clear module isolation.',
        'Adopted Compose Multiplatform & SwiftUI to share core state machines and business models while maintaining 100% native 60fps rendering performance.',
        'Leveraged SQLDelight for compile-time verified cross-platform database queries and Proto DataStore for schema-versioned preferences.',
        'Isolated video advertisement rendering with Google Mobile Ads SDK without interrupting video buffering or frame pacing.'
      ]
    },
    techStack: [
      'Kotlin',
      'Compose Multiplatform',
      'SwiftUI',
      'Modular MVVM',
      'SQLDelight DB',
      'Proto DataStore',
      'Google Mobile Ads',
      'Play Integrity API',
      'Firebase',
      'ExoPlayer / Media3',
      'Coroutines & Flow'
    ],
    metrics: [
      { label: 'Platform Type', value: 'OTT & VOD', detail: 'Kompas Media Network' },
      { label: 'Architecture', value: 'Multiplatform', detail: 'Compose MP & SwiftUI' },
      { label: 'Client', value: 'Kompas Gramedia', detail: 'Via NBS IT Consultancy' },
      { label: 'Live Video', value: '24/7 Streaming', detail: 'Kompas TV Broadcast' }
    ],
    challenges: [
      {
        challenge: 'Pioneering early-stage Compose UI and Compose Multiplatform in an enterprise commercial project without established production blueprints.',
        solution: 'Constructed custom reusable UI primitives, established rigorous state-hoisting patterns with StateFlow, and bridged platform-specific video surface views cleanly into Compose.',
        outcome: 'Successfully established the consultancy\'s first production Compose Multiplatform foundation, drastically reducing shared UI boilerplate.'
      },
      {
        challenge: 'Transitioning into the OTT entertainment & VOD media domain with demanding real-time streaming, DRM, and background video download caching.',
        solution: 'Engineered a resilient video player controller layer with adaptive bitrate switching, background download workers with pause/resume support, and robust buffer management.',
        outcome: 'Achieved instantaneous video start times, rock-solid offline playback, and zero UI stutter during live 24-hour Kompas TV broadcasts.'
      }
    ],
    lessonsLearned: [
      'Compose Multiplatform is highly viable for complex media applications when platform-specific rendering layers (such as video player surfaces) are cleanly abstracted.',
      'In video streaming apps, decoupling the player engine lifecycle from UI composables is vital to prevent unnecessary player re-allocations and memory leaks.',
      'Proto DataStore and SQLDelight provide superior compile-time guarantees compared to legacy shared preferences and raw SQLite.'
    ],
    themeColor: {
      primary: '#e11d48', // Vibrant Coral Red (KGNow! brand identity)
      accent: '#fb923c',  // Coral Amber accent
      glow: 'rgba(225, 29, 72, 0.45)'
    },
    propType: 'kompas-player',
    references: [
      {
        label: 'KGNow! on Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.kgnow.official.android'
      },
      {
        label: 'KGNow! Official Portal',
        url: 'https://www.kgnow.com/'
      },
      {
        label: 'NBS (Nusantara Beta Studio)',
        url: 'https://nbs.co.id/'
      }
    ],
    gallery3D: [
      {
        id: 'kgnow-1',
        title: 'VOD Discovery Hub',
        subtitle: 'Dashboard & Media Aggregator',
        badge: 'Core Feature',
        description: 'Main video discovery dashboard aggregating news and entertainment from Kompas TV, Kompas.com, Tribunnews, and Grid.id with Google Ads integration.',
        imageUrl: '/images/screenshots/kgnow_1.webp',
        tag: 'VOD & Media Discovery',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.kgnow.official.android'
      },
      {
        id: 'kgnow-2',
        title: 'Live Streaming Player',
        subtitle: 'Kompas TV 24-Hour Broadcast',
        badge: 'OTT Streaming',
        description: 'High-performance video streaming engine delivering 24/7 real-time broadcast playback with adaptive bitrate streaming and interactive engagements.',
        imageUrl: '/images/screenshots/kgnow_2.webp',
        tag: 'Player & Live Streaming',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.kgnow.official.android'
      },
      {
        id: 'kgnow-3',
        title: 'Offline Video Downloads',
        subtitle: 'Playlists & Local Caching',
        badge: 'Offline Engine',
        description: 'Background download manager enabling offline playback, custom user playlist collections, and encrypted storage management.',
        imageUrl: '/images/screenshots/kgnow_3.webp',
        tag: 'Downloads & Storage',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.kgnow.official.android'
      },
      {
        id: 'kgnow-4',
        title: 'Short Video Rolls Engine',
        subtitle: 'Vertical Fast-Playback Feed',
        badge: 'Shorts Engine',
        description: 'Full-screen vertical short video player with responsive touch gestures, creator followings, and instant video pre-buffering.',
        imageUrl: '/images/screenshots/kgnow_4.webp',
        tag: 'Shorts & Player',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.kgnow.official.android'
      }
    ]
  },
  {
    id: 'phase-4',
    phaseNumber: 4,
    badge: 'Phase 04: Greenfield Fintech & Super-App',
    title: 'TRING! by Pegadaian',
    company: 'PT Pegadaian',
    role: 'Mid-Senior Mobile Engineer',
    period: 'May 2025 - May 2026',
    duration: '1 Year',
    clientOrScale: '5M+ Users • State-Owned Enterprise (BUMN)',
    location: 'Jakarta, Indonesia',
    shortSummary: 'Architected and engineered the TRING! by Pegadaian super-app from scratch, consolidating legacy React Native apps into a unified native fintech platform.',
    overview: 'Spearheaded mobile architecture and development for TRING! by Pegadaian—a high-stakes enterprise greenfield initiative unifying two legacy React Native applications (Pegadaian Digital & Pegadaian Syariah) into a single, robust native fintech super-app. Built from the ground up using Kotlin Jetpack Compose and modular MVVM architecture. Took primary ownership of core financial transactional funnels: Digital Gold (Tabungan & Cicil Emas), Digital Pawn (Gadai dari Rumah), and Biometric Auth, integrated with MoEngage analytics, AppsFlyer attribution, and automated Jenkins CI/CD pipelines.',
    keyResponsibilities: [
      'Engineered the greenfield TRING! Android super-app from scratch using Kotlin, Jetpack Compose, and Modular Clean MVVM Architecture.',
      'Took core ownership of high-volume financial modules: :feature-emas (real-time bullion trading & price lock), :feature-gadai (doorstep pawn appraisal & loan disbursement), and :feature-auth (biometric & hardware keystore security).',
      'Re-architected and consolidated conventional and Pegadaian Syariah business models from legacy React Native codebases into a single unified 1 User ID account ecosystem.',
      'Integrated enterprise mobile services: Google Maps Platform for branch & agent routing, Firebase FCM for push notifications, MoEngage for real-time user behavior analytics, and AppsFlyer for attribution deep-linking.',
      'Architected offline-first local persistence using Room DB for bullion rates and EncryptedSharedPreferences for token caching.',
      'Automated testing and multi-flavor build distributions across development, staging, and production environments via Jenkins CI/CD pipelines.'
    ],
    architecture: {
      style: 'Modular MVVM & Jetpack Compose',
      description: 'Multi-module architecture isolating domain entities and financial business logic from UI frameworks, utilizing unidirectional StateFlow state hoisting.',
      keyDecisions: [
        'Multi-Module separation (:core, :domain, :data, :feature-emas, :feature-gadai, :feature-auth) for granular build caching, isolated feature ownership, and strict dependency boundaries.',
        'Adopted pure declarative UI (Jetpack Compose) from scratch to replace legacy hybrid React Native code, boosting rendering performance and UI consistency.',
        'Centralized event tracking and marketing attribution with MoEngage and AppsFlyer abstraction layers.',
        'Robust offline-first synchronization using Room DB with automated price expiration invalidate guards.'
      ]
    },
    techStack: [
      'Kotlin',
      'Jetpack Compose',
      'Modular MVVM',
      'Room DB',
      'SharedPreferences',
      'Firebase FCM',
      'Google Maps Platform',
      'MoEngage Analytics',
      'AppsFlyer',
      'Jenkins CI/CD',
      'BiometricPrompt',
      'Coroutines & StateFlow'
    ],
    metrics: [
      { label: 'Super-App Scale', value: '5M+ Users', detail: 'State-Owned Enterprise' },
      { label: 'Architecture', value: '100% Native', detail: 'Greenfield Jetpack Compose' },
      { label: 'Ecosystem', value: 'Unified', detail: 'Conventional + Syariah in 1 App' },
      { label: 'Automation', value: 'Jenkins CI/CD', detail: 'Automated Build & Staging Pipeline' }
    ],
    challenges: [
      {
        challenge: 'Pioneering Greenfield Declarative UI (Jetpack Compose & SwiftUI) from scratch on a mission-critical banking super-app without prior internal legacy templates.',
        solution: 'Engineered a shared design system token library, established strict StateFlow-to-Compose state hoisting guidelines, and decoupled modular navigation graphs.',
        outcome: 'Achieved 50% faster feature velocity compared to legacy React Native/XML, consistent 60fps animations, and a seamless native experience.'
      },
      {
        challenge: 'Retrofitting Unit Tests into an expanding codebase as feature velocity outpaced initial test coverage.',
        solution: 'Refactored dependencies around clean interface boundaries, introduced MockK and Turbine for reactive Coroutine flow testing, and enforced minimum test coverage quality gates in Jenkins CI/CD.',
        outcome: 'Safeguarded mission-critical financial calculation engines (gold margin calculations, pawn interest tiers, and auth token validation) from regression bugs.'
      },
      {
        challenge: 'Unifying disparate legacy schemas and workflows from Pegadaian Digital and Pegadaian Syariah into a single seamless app.',
        solution: 'Created a dynamic profile and product routing layer within :feature-auth and :feature-emas that automatically adapts business rules and UI flows based on the user account type.',
        outcome: 'Completely eliminated dual-app maintenance overhead, consolidated millions of users, and reduced overall release cycle time by 40%.'
      }
    ],
    lessonsLearned: [
      'Migrating from hybrid React Native to pure native declarative UI (Compose/SwiftUI) pays massive dividends in reliability, performance, and platform-specific UX.',
      'Establishing automated CI test gates early prevents technical debt from accumulating during high-speed super-app scaling.',
      'Consolidating multi-brand enterprise products under a single super-app requires strong modular domain modeling to keep business rules decoupled.'
    ],
    themeColor: {
      primary: '#059669', // Pegadaian Emerald Green
      accent: '#f59e0b',  // Gold Accent
      glow: 'rgba(5, 150, 105, 0.45)'
    },
    propType: 'pegadaian-vault',
    references: [
      {
        label: 'Tring! on Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.pegadaiandigital'
      },
      {
        label: 'Tring! on App Store',
        url: 'https://apps.apple.com/id/app/tring-by-pegadaian/id1528643905'
      },
      {
        label: 'Pegadaian Official',
        url: 'https://www.pegadaian.co.id/'
      }
    ],
    gallery3D: [
      {
        id: 'tring-1',
        title: 'TRING! 1st Versary Milestone',
        subtitle: 'Super-App Milestone & Biometrics',
        badge: 'Scale & Security',
        description: 'Milestone landing screen celebrating 7M+ users, featuring real-time market gold tickers and banking-grade biometric entry.',
        imageUrl: '/images/screenshots/tring_1.webp',
        tag: 'Authentication & Scale',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.pegadaiandigital'
      },
      {
        id: 'tring-2',
        title: 'Tabungan & Cicil Emas Hub',
        subtitle: 'Main Bullion Account & Trading',
        badge: 'Core Feature',
        description: 'Main gold savings dashboard displaying real-time bullion holdings, buy/sell spreads, and instant gold deposit triggers.',
        imageUrl: '/images/screenshots/tring_2.webp',
        tag: 'Fintech & Trading',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.pegadaiandigital'
      },
      {
        id: 'tring-3',
        title: 'Portofolio & Aset Finansial',
        subtitle: 'Assets & Liabilities Overview',
        badge: 'Wealth Management',
        description: 'Comprehensive financial health dashboard summarizing total gold wealth, active pawn loan commitments, and credit status.',
        imageUrl: '/images/screenshots/tring_3.webp',
        tag: 'Portfolio & Analytics',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.pegadaiandigital'
      },
      {
        id: 'tring-4',
        title: 'Beli Tabungan Emas Instan',
        subtitle: 'Beli Tabungan Emas Funnel',
        badge: 'Transactional Flow',
        description: 'Dynamic gold purchase funnel with real-time price calculations, recipient account routing, and quick-amount chips.',
        imageUrl: '/images/screenshots/tring_4.webp',
        tag: 'Checkout & Settlement',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.pegadaiandigital'
      },
      {
        id: 'tring-5',
        title: 'Loyalty & Reward Center',
        subtitle: 'Level, Points & Vouchers',
        badge: 'Gamification',
        description: 'Unified customer loyalty ecosystem featuring reward tier points, gold discount vouchers, and MoEngage engagement campaigns.',
        imageUrl: '/images/screenshots/tring_5.webp',
        tag: 'Loyalty & Gamification',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=com.pegadaiandigital'
      }
    ]
  },
  {
    id: 'phase-5',
    phaseNumber: 5,
    badge: 'Phase 05: Hardware Integration',
    title: 'Livin\' Merchant POS Ecosystem',
    company: 'Bank Mandiri',
    role: 'Mid-Senior Mobile Engineer',
    period: 'May 2026 - Present',
    duration: 'Present',
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

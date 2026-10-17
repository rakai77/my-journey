import { JourneyPhase, SkillCategory, ProfileInfo } from '../types/journey';

export const profileInfo: ProfileInfo = {
  name: 'Rakai Wangsasatia',
  avatarUrl: '/images/profile/rakai_avatar.webp',
  title: 'Mid-Senior Mobile Engineer & AI Integrator',
  tagline: 'Bridging the gap between robust mobile architecture and the agentic AI frontier.',
  bio: 'A Mid-Senior Software Engineer with 2+ years of Banking & Finance experience and 2+ years as an IT Consultant, specializing in mobile architecture, multi-module scaling, and high-security fintech platforms. Now evolving into an AI Engineer, building agentic workflows and on-device intelligent experiences.',
  stats: [
    { label: 'Total Experience', value: '3+ Yrs' },
    { label: 'Finance & Banking', value: '2 Yrs', detail: 'Mandiri, BTN, Pegadaian' },
    { label: 'IT Consultant', value: '2 Yrs', detail: 'Enterprise & B2B' },
    { label: 'Major Apps Shipped', value: '7' },
    { label: 'Countries Served', value: '5', detail: 'ID, MY, SG, TH, IN' },
  ],
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/rakai77', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rakai-wangsasatia', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:rakai77.rr@gmail.com', icon: 'mail' },
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
    badge: 'Phase 05: Micro-Frontend Migration & POS Hardware',
    title: 'Livin\' Merchant by Bank Mandiri',
    company: 'Bank Mandiri',
    role: 'Mid-Senior Mobile Engineer',
    period: 'May 2026 - Present',
    duration: 'Present',
    clientOrScale: '1.5M+ Merchants • State-Owned Enterprise (BUMN)',
    location: 'Jakarta, Indonesia',
    shortSummary: 'Spearheading mobile engineering for Livin\' Merchant POS ecosystem, driving an 80% Kotlin micro-frontend migration from legacy Xamarin, 3rd-party hardware integrations (dongles, printers, EDC), and Jenkins CI/CD.',
    overview: 'Leading core mobile engineering on Livin\' Merchant by Bank Mandiri—an enterprise B2C and Point-of-Sale (POS) super-app empowering over 1.5 million MSME merchants across Indonesia. A key architectural mandate of this initiative is executing an incremental Micro-Frontend mobile migration (Strangler Fig pattern) from a legacy monolithic Xamarin architecture into modular, high-performance Native Kotlin feature modules. With Xamarin serving as the host container shell, feature domains operate in autonomous repositories—enabling continuous feature delivery alongside architectural modernization. Successfully migrated 80% of the active codebase to Native Kotlin. Took primary technical ownership of Point-of-Sale (POS) cashier modules, dynamic QRIS settlement, 3rd-party hardware peripherals (Bluetooth mPOS card dongle activation, low-level ESC/POS thermal receipt printers, and EDC machines), backed by automated multi-repo Jenkins CI/CD pipelines.',
    keyResponsibilities: [
      'Architected and executed the incremental Micro-Frontend mobile migration from legacy Xamarin to Native Kotlin, successfully achieving 80% Kotlin adoption while shipping parallel business features.',
      'Engineered the hardware peripheral abstraction layer: implemented Bluetooth BLE/RFCOMM pairing for mPOS card reader dongles, low-level ESC/POS byte command streaming for thermal printers, and EDC terminal handshakes.',
      'Developed mission-critical POS merchant cashier flows: dynamic product catalog browsing, quick cart checkout, and real-time dynamic QRIS generation with instant audio payment alerts.',
      'Established automated multi-repository Jenkins CI/CD pipelines with composite build verification to resolve cascading dependency updates across micro-frontend modules.'
    ],
    architecture: {
      style: 'Micro-Frontend & Modular Clean MVVM',
      description: 'Distributed micro-app architecture leveraging an incremental Strangler Fig pattern where a legacy Xamarin host container encapsulates independent, testable Native Kotlin feature modules with Hilt dependency injection.',
      keyDecisions: [
        'Employed Micro-Frontend mobile architecture across separate repositories, decoupling feature development velocity from legacy platform constraints.',
        'Standardized on Hilt DI and Clean MVVM within Kotlin modules to enforce strict separation of domain rules, data repositories, and UI.',
        'Architected a bi-directional interop communication bridge between the Xamarin host runtime and native Android Kotlin modules using structured routing contracts.',
        'Integrated Retrofit and Coroutines/StateFlow for reactive, non-blocking networking and real-time transaction status streams.'
      ]
    },
    techStack: [
      'Kotlin',
      'Clean MVVM',
      'Hilt DI',
      'Modularization',
      'Retrofit',
      'Coroutines & Flow',
      'Xamarin Interop',
      'SharedPreferences',
      'Firebase',
      'Google Maps Platform',
      'Jenkins CI/CD',
      'Bluetooth BLE & ESC/POS',
      'Card Dongle & EDC Integration'
    ],
    metrics: [
      { label: 'Migration', value: '80% Kotlin', detail: 'From Legacy Xamarin' },
      { label: 'Merchants', value: '1.5M+', detail: 'MSME Super-App' },
      { label: 'Peripherals', value: 'Dongle & POS', detail: 'Printers & EDC' },
      { label: 'Automation', value: 'Jenkins', detail: 'Multi-Repo CI/CD' }
    ],
    challenges: [
      {
        challenge: 'Migrating a mission-critical banking POS app from legacy monolithic Xamarin to Native Kotlin without freezing business feature velocity.',
        solution: 'Adopted the Strangler Fig Micro-Frontend pattern, encapsulating the Xamarin app as a shell host while developing new features in standalone Kotlin modules with clean event bridges.',
        outcome: 'Reached 80% native Kotlin adoption smoothly, slashing compile times and boosting app responsiveness with zero downtime for 1.5M+ active merchants.'
      },
      {
        challenge: 'Managing cascading version updates and diamond dependency drift across multiple independent micro-frontend repositories when shared core modules upgrade.',
        solution: 'Instituted strict semantic versioning contracts, centralized Gradle dependency catalogs, and automated composite build validation in Jenkins prior to core artifact release.',
        outcome: 'Eliminated runtime ABI breakage, reduced integration friction by 60%, and guaranteed binary compatibility across all distributed micro-apps.'
      },
      {
        challenge: 'Integrating diverse 3rd-party hardware peripherals (card reader dongles, ESC/POS thermal printers, EDC terminals) across fragmented Android device vendors.',
        solution: 'Architected an adaptive peripheral driver layer with connection retry state machines, low-level byte-array formatting for ESC/POS, and unified EMV card payment delegates.',
        outcome: 'Achieved 99%+ receipt print reliability and seamless tap/dip card transactions across diverse merchant hardware environments.'
      }
    ],
    lessonsLearned: [
      'The Strangler Fig Micro-Frontend approach is the gold standard for migrating enterprise legacy mobile codebases without incurring business standstill.',
      'In multi-repo mobile architectures, automated CI dependency verification and strict semantic versioning are essential to prevent downstream compilation and runtime mismatches.',
      'Handling physical hardware requires low-level byte-stream discipline, graceful asynchronous timeout handling, and bulletproof connection recovery logic.'
    ],
    themeColor: {
      primary: '#0284c7', // Mandiri Royal Blue
      accent: '#f59e0b',  // Mandiri Gold Accent
      glow: 'rgba(2, 132, 199, 0.45)'
    },
    propType: 'livin-pos',
    references: [
      {
        label: 'Livin\' Merchant on Play Store',
        url: 'https://play.google.com/store/apps/details?id=id.bmri.livinmerchant'
      },
      {
        label: 'Bank Mandiri Official Portal',
        url: 'https://bankmandiri.co.id/'
      }
    ],
    gallery3D: [
      {
        id: 'livin-1',
        title: 'POS Kasir & Checkout Cepat',
        subtitle: 'Multi-Item Order & Kasir POS',
        badge: 'Point of Sale',
        description: 'Antarmuka kasir pintar dengan pencarian katalog cepat, varian menu, dan kalkulasi tagihan pesanan otomatis.',
        imageUrl: '/images/screenshots/livin_1.webp',
        tag: 'POS & Cashier',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.bmri.livinmerchant'
      },
      {
        id: 'livin-2',
        title: 'Dynamic QRIS & Card Dongle',
        subtitle: 'Terima QRIS & Kartu via Dongle',
        badge: 'Payments Hub',
        description: 'Dukungan multi-pembayaran instan: QRIS dinamis Bank Mandiri serta integrasi kartu debit/kredit via Card Dongle mPOS.',
        imageUrl: '/images/screenshots/livin_2.webp',
        tag: 'Hardware & Payments',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.bmri.livinmerchant'
      },
      {
        id: 'livin-3',
        title: 'Notifikasi Suara Transaksi',
        subtitle: 'Instant Audio Alert Realtime',
        badge: 'Audio Notification',
        description: 'Notifikasi suara otomatis menyebutkan nominal pembayaran masuk seketika untuk efisiensi merchant saat jam sibuk.',
        imageUrl: '/images/screenshots/livin_3.webp',
        tag: 'Soundbox & Alerts',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.bmri.livinmerchant'
      },
      {
        id: 'livin-4',
        title: 'Pencairan Realtime Mandiri',
        subtitle: 'Settlement Fleksibel s.d. 5x Sehari',
        badge: 'Disbursement',
        description: 'Fleksibilitas transfer dana hasil penjualan langsung ke rekening Mandiri secara instan maupun terjadwal berkala.',
        imageUrl: '/images/screenshots/livin_4.webp',
        tag: 'Settlement & Banking',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.bmri.livinmerchant'
      },
      {
        id: 'livin-5',
        title: 'Manajemen Multi-Outlet',
        subtitle: 'Kelola Cabang & Akses Pegawai',
        badge: 'Business Suite',
        description: 'Pemantauan performa bisnis lintas cabang, penetapan rekening pencairan berbeda per outlet, dan hierarki kasir.',
        imageUrl: '/images/screenshots/livin_5.webp',
        tag: 'Multi-Outlet Management',
        type: 'store-screenshot',
        storeUrl: 'https://play.google.com/store/apps/details?id=id.bmri.livinmerchant'
      }
    ]
  },
  {
    id: 'phase-6',
    phaseNumber: 6,
    badge: 'Phase 06: Agentic AI & Frontier',
    title: 'AI Engineering & Compose Multiplatform',
    company: 'Next Journey',
    navTitle: 'Next Journey',
    role: 'Mid-Senior Mobile & AI Solutions Engineer',
    period: '2026 - Present',
    duration: 'Active / Frontier',
    clientOrScale: 'Bank Mandiri Internal RM Tools & Autonomous Dev Workflows',
    location: 'Jakarta, Indonesia',
    shortSummary: 'Pioneering Compose Multiplatform for enterprise banking tools while accelerating engineering velocity through Claude Code, Google Antigravity, and Codex agentic workflows.',
    overview: 'Spearheading modern cross-platform development at Bank Mandiri with Compose Multiplatform (CMP) through RM Satu Tools—an internal enterprise app empowering Relationship Managers. Concurrently redefining daily software engineering velocity by integrating autonomous AI agents (Claude Code, Google Antigravity, and Codex) into production workflows: automating repetitive development tasks, conducting AI-assisted code reviews, synthesizing Pull Requests, triggering Jenkins CI/CD pipelines, and streamlining daily Jira ticket tracking.',
    keyResponsibilities: [
      'Architecting RM Satu Tools using Compose Multiplatform (CMP) to share business logic and UI components across Android and enterprise desktop platforms.',
      'Eliminating repetitive boilerplate and manual refactoring by integrating Claude Code, Antigravity, and Codex into daily dev environments.',
      'Implementing autonomous AI code reviews to catch edge-case bugs, enforce architectural patterns, and uphold strict banking code quality.',
      'Automating Pull Request (PR) lifecycle: generating comprehensive diff summaries, acceptance checklists, and automated unit test plans.',
      'Orchestrating autonomous Jenkins CI/CD triggers and build verification workflows directly through AI agent task execution.',
      'Streamlining daily Jira sprint hygiene with automated ticket triage, commit-to-issue cross-referencing, and acceptance criteria tracking.'
    ],
    architecture: {
      style: 'Compose Multiplatform (CMP) & Agentic CI/CD',
      description: 'Unified Kotlin multiplatform core combined with proactive AI-agent workflows operating over Git, Jenkins, and Jira ecosystems.',
      keyDecisions: [
        'Adopted Compose Multiplatform to share 100% of business logic and declarative UI across platforms for Bank Mandiri internal tools.',
        'Embedded Claude Code, Google Antigravity, and Codex into the developer feedback loop for PR creation, lint analysis, and pipeline dispatch.',
        'Built prompt-engineered context anchors and repository instruction rules (AGENTS.md) to guarantee deterministic code output.'
      ]
    },
    techStack: [
      'Compose Multiplatform (CMP)',
      'Kotlin Multiplatform',
      'Claude Code',
      'Google Antigravity',
      'Codex & LLMs',
      'Jenkins Automation',
      'Jira Automation',
      'GitHub / GitLab PR Workflows',
      'Three.js & React (Portfolio)',
      'Prompt Engineering'
    ],
    metrics: [
      { label: 'Architecture', value: 'CMP Unified', detail: 'Compose Multiplatform' },
      { label: 'Tooling', value: 'Claude & AGY', detail: 'Agentic Pair Dev' },
      { label: 'Workflows', value: 'PR & Jenkins', detail: 'Automated CI/CD' },
      { label: 'Tracking', value: 'Jira & Daily', detail: 'Backlog Sync' }
    ],
    challenges: [
      {
        challenge: 'Unifying internal enterprise workflows for Bank Mandiri Relationship Managers across diverse desktop and mobile environments without duplicating codebase effort.',
        solution: 'Engineered RM Satu Tools using Compose Multiplatform (CMP), centralizing data repositories, networking, and UI component libraries into a single shared Kotlin codebase.',
        outcome: 'Cut feature development time by 45%, achieved 100% UI consistency across device form factors, and accelerated internal banking tool delivery.'
      },
      {
        challenge: 'Manual engineering friction in repetitive coding tasks, lengthy code review turnarounds, and tedious PR documentation.',
        solution: 'Embedded Claude Code and Google Antigravity as autonomous pair programmers, automating diff reviews, generating rich PR descriptions with test verification steps, and catching edge cases early.',
        outcome: 'Accelerated PR cycle times by 60%, improved test coverage clarity, and freed up senior engineering time for high-leverage architectural design.'
      },
      {
        challenge: 'Context switching and manual overhead required to trigger Jenkins build pipelines and keep Jira sprint tickets updated with commit logs.',
        solution: 'Integrated agentic scripting and webhook triggers that connect git branch activity with Jira status transitions and automatically trigger Jenkins test/build pipelines upon PR approval.',
        outcome: 'Eliminated manual status reporting friction, ensured 100% traceability between commits and Jira tickets, and reduced CI pipeline dispatch latency.'
      }
    ],
    lessonsLearned: [
      'Compose Multiplatform has matured into an enterprise-ready powerhouse, drastically reducing cross-platform development friction for internal and consumer tools.',
      'AI agents like Claude Code and Google Antigravity are force multipliers when guided by clear architectural rules (AGENTS.md) and contextual constraints.',
      'Automating the PR, Jenkins, and Jira triumvirate transforms software delivery from fragmented chores into an effortless, continuous flow.'
    ],
    themeColor: {
      primary: '#8b5cf6', // Electric Violet / AI Glow
      accent: '#06b6d4',  // Cyber Cyan
      glow: 'rgba(139, 92, 246, 0.5)'
    },
    propType: 'ai-core',
    references: [
      {
        label: 'Compose Multiplatform by JetBrains',
        url: 'https://www.jetbrains.com/lp/compose-multiplatform/'
      },
      {
        label: 'Bank Mandiri Official Portal',
        url: 'https://bankmandiri.co.id/'
      }
    ],
    gallery3D: [
      {
        id: 'ai-1',
        title: 'Interactive 3D Portfolio — Stage & Hero',
        subtitle: 'Physics Drag & Tilt with Three.js Canvas',
        badge: 'Interactive 3D Web',
        description: 'Real-time 3D perspective stage featuring Three.js, React Three Fiber, stars environment, and physics-driven drag-and-tilt mobile mockup showcasing production projects.',
        imageUrl: '/images/screenshots/ai_1.webp',
        tag: '3D Web & Canvas',
        type: 'concept-art'
      },
      {
        id: 'ai-2',
        title: 'Deep Dive Architecture Explorer',
        subtitle: 'Multi-Tab Technical Breakdown & Outcomes',
        badge: 'Architecture Explorer',
        description: 'Interactive deep dive card allowing granular exploration across Executive Overview, Responsibilities, Architecture & Technical Decisions, Challenges, and Gallery.',
        imageUrl: '/images/screenshots/ai_2.webp',
        tag: 'Clean Architecture',
        type: 'concept-art'
      },
      {
        id: 'ai-3',
        title: 'Adaptive Mobile Responsive Interface',
        subtitle: 'Fluid Design Tokens & Touch Inertia',
        badge: 'Mobile Responsive',
        description: 'Pixel-perfect mobile adaptation delivering smooth touch scrolling, compact glassmorphic headers, and instant responsive transitions across all screen sizes.',
        imageUrl: '/images/screenshots/ai_3.webp',
        tag: 'Mobile Responsive',
        type: 'concept-art'
      },
      {
        id: 'ai-4',
        title: 'Skills Matrix & Engineering Hub',
        subtitle: 'Core Competencies & Production Metrics',
        badge: 'Skills & Profile',
        description: 'Comprehensive engineering profile highlighting mobile architecture, multi-module scaling, fintech security protocols, and autonomous AI integrations.',
        imageUrl: '/images/screenshots/ai_4.webp',
        tag: 'Skills & Terminal',
        type: 'concept-art'
      },
      {
        id: 'ai-5',
        title: 'AI Agentic Co-Engineering',
        subtitle: 'Google Antigravity & Pair Programming',
        badge: 'Autonomous Dev Flow',
        description: 'This entire portfolio was co-engineered in partnership with Google Antigravity autonomous AI agent, leveraging strict engineering rules and continuous validation.',
        imageUrl: '/images/screenshots/ai_5.webp',
        tag: 'Agentic Engineering',
        type: 'concept-art'
      }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Mobile Engineering',
    skills: [
      { name: 'Kotlin', level: 'Expert', tags: ['Coroutines', 'Flow'] },
      { name: 'Android SDK', level: 'Expert', tags: ['Lifecycle', 'Services'] },
      { name: 'Jetpack Compose', level: 'Advanced', tags: ['Declarative UI'] },
      { name: 'iOS', level: 'Advanced', tags: ['Swift', 'UIKit'] },
      { name: 'SwiftUI', level: 'Advanced', tags: ['Declarative UI', 'Combine'] },
      { name: 'Flutter', level: 'Proficient', tags: ['Dart', 'Cross-Platform'] },
      { name: 'Xamarin', level: 'Advanced', tags: ['C#', 'Xamarin.Forms'] },
      { name: 'KMM / CMP', level: 'Advanced', tags: ['Multiplatform', 'Compose'] },
      { name: 'Website Builder', level: 'Proficient', tags: ['WordPress', 'Webflow', 'Next.js'] },
      { name: 'Java', level: 'Advanced', tags: ['Legacy Systems'] }
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

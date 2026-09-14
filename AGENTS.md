# Project Engineering Rules & Standards

Engineering guidelines, conventions, and operational standards for developing the **3D Software Engineer Journey Portfolio** (`journey-web`).

---

## 1. Clean Architecture & Separation of Concerns
The codebase must enforce strict separation of concerns across architectural layers:
* **Presentation Layer (`src/components/`):**
  * `2d/`: Pure 2D user interface components (Hero, Cards, Modals, Navbar, Footer, Controls).
  * `3d/`: 3D graphics components (Canvas, Meshes, Lights, Shaders, Props). 3D components must remain decoupled from complex business and domain logic.
* **Domain / Data Layer (`src/data/`, `src/types/`):**
  * Data must be strictly isolated and act as the *Single Source of Truth* (`journeyData.ts`).
  * Types and interfaces must be strongly defined using TypeScript (`src/types/`).
* **Logic / Application Layer (`src/hooks/`, `src/utils/`):**
  * All 3D vector/matrix math, scroll progress computations, event listeners, and helper functions must reside in dedicated, testable, and reusable modules.

---

## 2. Naming Conventions & Language Standard
* **Universal Language Standard:** All code identities, comments, and documentation must be written in **English**:
  * Class names: `PascalCase` (e.g., `PhoneDevice`, `TimelineController`, `CaseStudyModal`)
  * Function/Method names: `camelCase` (e.g., `calculateScrollProgress`, `renderPhaseProps`, `toggleRecruiterMode`)
  * Variable & Constant names: `camelCase` or `UPPER_SNAKE_CASE` for constants (e.g., `isDeviceLoaded`, `DEFAULT_ROTATION_SPEED`)
  * Component file names: `PascalCase.tsx` (e.g., `SceneCanvas.tsx`, `HeroSection.tsx`)
  * Utility/Hook file names: `camelCase.ts` (e.g., `useScrollProgress.ts`, `mathUtils.ts`)
* Code comments and JSDoc documentation must be written in English.

---

## 3. Directory & File Organization
The directory structure must remain clean, modular, and strictly organized:
```text
journey-web/
├── AGENTS.md                  # Project rules & engineering conventions
├── public/
│   ├── models/                # Optimized 3D assets (.glb / .gltf)
│   ├── textures/              # Textures & environment maps
│   ├── icons/                 # Platform SVG icons & favicons
│   └── images/                # Static screenshots / fallback images
├── src/
│   ├── assets/                # Static imports
│   ├── components/
│   │   ├── 2d/                # 2D UI Components (Navbar, Hero, Cards, Modals)
│   │   ├── 3d/                # 3D R3F Components (Scene, Phone, Lights)
│   │   │   └── PhaseProps/    # Specific 3D objects per phase
│   │   ├── ai/                # AI Agent Assistant components
│   │   └── common/            # Shared UI components (Button, Badge, Modal)
│   ├── data/                  # Static timeline data & constants
│   ├── hooks/                 # Custom React hooks
│   ├── styles/                # CSS tokens, glassmorphism, animations
│   ├── types/                 # TypeScript type declarations
│   ├── utils/                 # Helpers, math, formatting
│   ├── App.tsx                # Main application component
│   └── main.tsx               # Entry point
├── index.html                 # Main HTML document & SEO metadata
├── package.json               # Locked dependencies & scripts
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind theme & design tokens
└── vite.config.ts             # Vite build configuration
```

---

## 4. Asset Management & Best Practices
* **3D Models:**
  * Must use `.glb` or `.gltf` format.
  * Must be optimized: Maintain low-to-mid poly counts, compress using Draco or Meshopt to keep file sizes as minimal as possible.
  * *Lazy loading* / *Suspense*: All 3D assets must be loaded asynchronously with appropriate visual fallback indicators.
* **Images & Textures:**
  * Use modern web formats: `.webp` or vector `.svg`.
  * Restrict texture resolutions to web standards (maximum 1K/2K resolution).
* **Static Assets:**
  * Store all static assets cleanly under the `public/` directory with consistent lowercase hyphenated naming.

---

## 5. Resource Sourcing & Manual Implementation Fallback
* Leverage high-quality community resources and open-source ecosystems (GitHub, Three.js examples, Drei helpers, GSAP showcase).
* **Manual Crafting Fallback:** When a specific animation, shader, or 3D visual component is not available through ready-made packages or libraries:
  * Implement it manually via custom code (e.g., custom GLSL shaders, procedural mathematical animations like sinusoidal levitation, custom particle emitters, or custom SVG path animations).
  * Document any manual mathematical or shader implementations clearly in code comments for maintainability.

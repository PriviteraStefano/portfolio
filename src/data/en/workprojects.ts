export interface Project {
  title: string;
  description: string;
  url: string;
  technologies?: string[];
  period?: string;
  highlights?: string[];
}

const kmpMobileApp: Project = {
  title: "Kotlin Multiplatform Mobile App (ERP Integration)",
  description:
    "Led a complete ground-up reimplementation of a 12+ year old warehouse management application " +
    "using modern Kotlin Multiplatform technology. Developed both the core library and extended module system, " +
    "enabling flexible, reusable solutions for multiple ERP systems and clients.",
  technologies: [
    "Kotlin",
    "Kotlin Multiplatform",
    "WebAssembly",
    "Oracle JDE",
    "NetSuite",
  ],
  period: "2024-Present",
  highlights: [
    "Built modular architecture allowing core + custom modules for rapid client onboarding",
    "Extended from warehouse use-case to complete business solution (sales, operations)",
    "Deployed to production with 2+ major clients within 3 months",
    "Managed as sole BU technical lead, interfacing with clients, marketing, and diverse teams",
    "Integrated WASM support enabling web distribution without client-side updates",
  ],
  url: "projects/kmp-application",
};

const pimRefactoring: Project = {
  title: "PIM Application Frontend Modernization",
  description:
    "Completely redesigned and rebuilt the frontend of a legacy Product Information Management system " +
    "(Go backend, Neo4j database). Unified disparate UI libraries into a cohesive ShadcnUI system while " +
    "significantly improving both UX and functionality.",
  technologies: [
    "React",
    "TypeScript",
    "ShadcnUI",
    "Go",
    "Neo4j",
    "Material UI",
  ],
  period: "Jan - Apr 2024",
  highlights: [
    "Replaced fragmented UI (Material UI + Chakra UI mix) with unified ShadcnUI design system",
    "Implemented multi-select, bulk editing, inline editing, hierarchical data visualization",
    "Added comprehensive media asset management with image/PDF preview functionality",
    "Improved both UI consistency and user experience across the entire application",
  ],
  url: "projects/pim-modernization",
};

const dataIntegrations: Project = {
  title: "ETL Pipelines & System Integrations",
  description:
    "Designed and implemented multiple data synchronization pipelines in Go and Kotlin, " +
    "integrating disparate enterprise systems. Created reusable client libraries and configurable " +
    "ETL frameworks enabling flexible field mapping and data transformations.",
  technologies: [
    "Go",
    "Kotlin",
    "gRPC",
    "ARIS",
    "SAP SuccessFactors",
    "NetSuite",
    "PostgreSQL",
  ],
  period: "Throughout 2024-2025",
  highlights: [
    "Built SAP SuccessFactors ↔ ARIS real-time sync with K8s-based cron pipeline",
    "Implemented NetSuite ↔ PIM ETL with modular Go libraries and Expr-based field mapping",
    "Created reusable service client libraries with independent versioning and releases",
    "Architected configuration-driven pipelines supporting flexible data transformations",
  ],
  url: "projects/data-integrations",
};

const supplierPortal: Project = {
  title: "Enterprise Supplier Portal",
  description:
    "Frontend leadership for a comprehensive supplier management platform for major equipment manufacturer. " +
    "Modernized chaotic multi-repo React codebase into structured, type-safe React + TypeScript system. " +
    "Managed complete frontend stack for complex multi-service portal.",
  technologies: [
    "React",
    "TypeScript",
    "Node.js",
    "gRPC",
    "Java",
    "Spring Boot",
  ],
  period: "Jul - Present",
  highlights: [
    "Standardized frontend across service requests, invoicing, deliveries, parts management, notifications",
    "Migrated from React + JavaScript chaos to unified React + TypeScript architecture",
    "Implemented operational reports, statistics, equipment tracking and positioning",
    "Maintained strict brand identity across all service interfaces",
  ],
  url: "projects/supplier-portal",
};

const businessAppsWeb: Project = {
  title: "JDE to Web Business Applications",
  description:
    "Developed modern React + Java web applications replacing legacy JDE business processes. " +
    "Built data-heavy frontends with advanced filtering, sorting, exporting capabilities. " +
    "Mentored team members in React and TypeScript best practices.",
  technologies: [
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "gRPC",
    "CSV",
    "Excel",
    "PDF",
  ],
  period: "Feb - Jun 2024",
  highlights: [
    "Developed configurable data grids with dynamic columns, calculated values, filtering, sorting",
    "Implemented CSV, Excel, PDF export functionality for complex JDE data structures",
    "Mentored junior developer in React and TypeScript framework adoption",
    "Transitioned from legacy XML-based UI to modern, scalable web architecture",
  ],
  url: "projects/business-web-apps",
};

const backendModernization: Project = {
  title: "Mobile Backend Modernization",
  description:
    "Rewrote the entire backend of the KMP mobile application from Java + MyBatis to Kotlin + Spring Boot, " +
    "adopting hexagonal architecture and modern database patterns. Improved type safety, null safety, " +
    "and code maintainability across MySQL, Oracle, and SQL Server databases.",
  technologies: [
    "Kotlin",
    "Spring Boot",
    "Kotlin Exposed",
    "PostgreSQL",
    "MySQL",
    "Oracle DB",
    "SQL Server",
  ],
  period: "Oct - Dec 2024",
  highlights: [
    "Migrated from Java to Kotlin improving code readability and null safety",
    "Replaced MyBatis with type-safe Kotlin Exposed ORM",
    "Implemented hexagonal architecture separating concerns (input, output, business logic)",
    "Maintained backward compatibility across multiple database systems",
  ],
  url: "projects/backend-modernization",
};

const arisScripting: Project = {
  title: "ARIS Business Process Automation",
  description:
    "Developed custom Report and Macro scripts for SAP ARIS business process automation platform. " +
    "Learned a dated (pre-SE8) technology with minimal documentation and demonstrated adaptability " +
    "across complex, underdocumented systems.",
  technologies: ["ARIS Script", "Java SE6", "JavaScript", "ARIS"],
  period: "Nov - Dec 2023",
  highlights: [
    "Delivered customized report and macro scripts without formal documentation",
    "Demonstrated ability to learn complex legacy systems independently",
    "Provided personalized process automation solutions despite system age and limited resources",
  ],
  url: "projects/aris-scripting",
};

const youTrackManagement: Project = {
  title: "Internal Project Management System",
  description:
    "Co-led implementation of YouTrack project management system to replace unstructured " +
    "oral/email-based task management. Established structured tracking for issues and tasks " +
    "across all projects with real-time progress visibility.",
  technologies: ["YouTrack", "Project Management"],
  period: "Dec 2024 - Jan 2025",
  highlights: [
    "Centralized project tracking and issue management across all business units",
    "Enabled real-time progress monitoring and visibility",
    "Created documentation and team workflows for consistent task tracking",
  ],
  url: "",
};

export const workProjects = [
  kmpMobileApp,
  pimRefactoring,
  dataIntegrations,
  supplierPortal,
  businessAppsWeb,
  backendModernization,
  arisScripting,
  youTrackManagement,
];

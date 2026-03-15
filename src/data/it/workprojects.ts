export interface Project {
  title: string;
  description: string;
  url: string;
  technologies?: string[];
  period?: string;
  highlights?: string[];
}

const kmpMobileApp: Project = {
  title: "App Mobile Kotlin Multiplatform (Integrazione ERP)",
  description:
    "Ho guidato una completa reimplementazione da zero di un'applicazione di gestione magazzino " +
    "datata più di 12 anni, utilizzando la moderna tecnologia Kotlin Multiplatform. Ho sviluppato " +
    "sia la libreria core che il sistema di moduli estendibili, permettendo soluzioni flessibili " +
    "e riutilizzabili per multiple sistemi ERP e clienti.",
  technologies: ["Kotlin", "Kotlin Multiplatform", "WebAssembly", "Oracle JDE", "NetSuite"],
  period: "2024-Presente",
  highlights: [
    "Architettura modulare che permette core + moduli personalizzati per veloce onboarding clienti",
    "Esteso da semplice magazzino a soluzione completa per l'azienda (vendite, operazioni)",
    "Deployato in produzione con 2+ clienti principali in 3 mesi",
    "Gestito come unico leader tecnico della BU, interfacciandomi con clienti, marketing, e team diversi",
    "Integrato supporto WASM permettendo distribuzione web senza aggiornamenti lato client"
  ],
  url: "projects/kmp-application",
};

const pimRefactoring: Project = {
  title: "Modernizzazione Frontend Applicazione PIM",
  description:
    "Completamente riprogettato e riscritto il frontend di un'applicazione legacy di gestione " +
    "informazioni prodotto (backend Go, database Neo4j). Ho unificato librerie UI disparate in " +
    "un sistema coeso ShadcnUI migliorando significativamente sia UX che funzionalità.",
  technologies: ["React", "TypeScript", "ShadcnUI", "Go", "Neo4j"],
  period: "Gen - Apr 2024",
  highlights: [
    "Sostituito fragmentato mix di UI (Material UI + Chakra UI) con design system unificato ShadcnUI",
    "Implementato multi-select, editing multiplo, editing in cella, visualizzazione gerarchica dati",
    "Aggiunto gestione asset media con preview immagini/PDF",
    "Migliorato sia consistenza UI che esperienza utente nell'intera applicazione"
  ],
  url: "projects/pim-modernization",
};

const dataIntegrations: Project = {
  title: "Pipeline ETL & Integrazioni di Sistema",
  description:
    "Progettato e implementato multiple pipeline di sincronizzazione dati in Go e Kotlin, " +
    "integrando sistemi enterprise disparati. Ho creato librerie client riutilizzabili e " +
    "framework ETL configurabili permettendo mappatura campi flessibile e trasformazioni dati.",
  technologies: ["Go", "Kotlin", "gRPC", "ARIS", "SAP SuccessFactors", "NetSuite"],
  period: "Durante 2024-2025",
  highlights: [
    "Costruito sync real-time SAP SuccessFactors ↔ ARIS con pipeline cron basato K8s",
    "Implementato ETL NetSuite ↔ PIM con librerie Go modulari e mappatura campi Expr-based",
    "Creato librerie client servizio riutilizzabili con versionamento e rilasci indipendenti",
    "Architettura pipeline configuration-driven supportando trasformazioni dati flessibili"
  ],
  url: "projects/data-integrations",
};

const supplierPortal: Project = {
  title: "Portale Fornitori Enterprise",
  description:
    "Leadership frontend per una piattaforma completa di gestione fornitori per grande " +
    "produttore di attrezzature. Ho modernizzato codebase React caotico in sistema strutturato " +
    "e type-safe React + TypeScript. Ho gestito il complete stack frontend per portale multi-servizio complesso.",
  technologies: ["React", "TypeScript", "Node.js", "gRPC", "Java", "Spring Boot"],
  period: "Lug - Presente",
  highlights: [
    "Standardizzato frontend tra richieste servizio, fatturazione, consegne, gestione ricambi, notifiche",
    "Migrato da caos React + JavaScript a architettura unificata React + TypeScript",
    "Implementato report operativi, statistiche, tracking e posizionamento attrezzature",
    "Mantenuto identità brand rigorosa su tutte le interfacce servizio"
  ],
  url: "projects/supplier-portal",
};

const businessAppsWeb: Project = {
  title: "Applicazioni Web JDE a Modernezza",
  description:
    "Ho sviluppato moderne applicazioni web React + Java rimpiazzando processi business JDE legacy. " +
    "Ho costruito frontend data-heavy con capacità avanzate di filtro, sorting, export. " +
    "Ho mentored team members in React e TypeScript best practices.",
  technologies: ["React", "TypeScript", "Java", "Spring Boot", "gRPC", "CSV", "Excel", "PDF"],
  period: "Feb - Giu 2024",
  highlights: [
    "Sviluppato griglie dati configurabili con colonne dinamiche, valori calcolati, filtro, sorting",
    "Implementato export CSV, Excel, PDF per strutture dati JDE complesse",
    "Mentored developer junior in adozione framework React e TypeScript",
    "Transizionato da legacy UI basato XML a architettura web moderna e scalabile"
  ],
  url: "projects/business-web-apps",
};

const backendModernization: Project = {
  title: "Modernizzazione Backend Applicazione Mobile",
  description:
    "Ho completamente riscritto il backend dell'applicazione mobile KMP da Java + MyBatis a " +
    "Kotlin + Spring Boot, adottando hexagonal architecture e pattern database moderni. Ho migliorato " +
    "type safety, null safety, e mantenibilità codice su MySQL, Oracle, SQL Server.",
  technologies: ["Kotlin", "Spring Boot", "Kotlin Exposed", "PostgreSQL", "MySQL", "Oracle DB", "SQL Server"],
  period: "Ott - Dic 2024",
  highlights: [
    "Migrato da Java a Kotlin migliorando leggibilità codice e null safety",
    "Sostituito MyBatis con type-safe Kotlin Exposed ORM",
    "Implementato hexagonal architecture separando concerns (input, output, business logic)",
    "Mantenuto backward compatibility tra multiple sistemi database"
  ],
  url: "projects/backend-modernization",
};

const arisScripting: Project = {
  title: "Automazione Processi Business ARIS",
  description:
    "Ho sviluppato script custom Report e Macro per piattaforma automazione processi business SAP ARIS. " +
    "Ho imparato tecnologia datata (pre-SE8) con documentazione minima e dimostrato adattabilità " +
    "su sistemi complessi e poco documentati.",
  technologies: ["ARIS Script", "Java SE6", "JavaScript", "ARIS"],
  period: "Nov - Dic 2023",
  highlights: [
    "Consegnato script report e macro personalizzati senza documentazione formale",
    "Dimostrato abilità di imparare sistemi legacy complessi indipendentemente",
    "Fornito soluzioni automazione processi personalizzate nonostante age sistema e risorse limitate"
  ],
  url: "projects/aris-scripting",
};

const youTrackManagement: Project = {
  title: "Sistema Gestione Progetti Interno",
  description:
    "Ho co-guidato implementazione di sistema YouTrack per rimpiazzare gestione task basata " +
    "su comunicazione orale/email non strutturata. Ho stabilito tracking strutturato per issue " +
    "e task su tutti i progetti con visibilità progresso real-time.",
  technologies: ["YouTrack", "Project Management"],
  period: "Dic 2024 - Gen 2025",
  highlights: [
    "Centralizzato tracking progetti e gestione issue su tutte le business unit",
    "Abilitato monitoraggio progresso real-time e visibilità",
    "Creato documentazione e workflow team per tracking task consistente"
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

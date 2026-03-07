export interface Project {
  title: string;
  description: string;
  url: string;
}

const gnMobile: Project = {
  title: "KMP Application",
  description:
    "Sviluppato un'app Kotlin Multiplatform multi-modulo e una libreria core usata da clienti nel settore logistico. " +
    "Focus sulla compatibilità con ERP come Oracle JDE e NetSuite.",
  url: "/projects/kmp-application",
};

const arisIntegrations: Project = {
  title: "Integrazioni con Golang",
  description:
    "Scritto script di import/export in Go per spostare dati tra sistemi come ARIS e SAP Success Factory. " +
    "Lavoro poco glamour, ma ha fatto una differenza concreta nella affidabilità del flusso dati tra i servizi.",
  url: "/projects/aris-integrations",
};

const oneDB: Project = {
  title: "Applicazione React Aziendale",
  description:
    "Rifatto il frontend di un vecchio tool di gestione database in React e TypeScript. " +
    "Aggiunto il supporto per più sorgenti dati e reso finalmente usabile la modifica dei dati prodotto tramite le API backend.",
  url: "/projects/react-application",
};

const landingPages: Project = {
  title: "Landing page e documentazione",
  description:
    "Realizzato landing page e documentazione di progetto con Astro. Questo sito è uno di quelli.",
  url: "/projects/landing-pages",
};

export const workProjects = [gnMobile, arisIntegrations, oneDB, landingPages];

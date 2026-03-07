export interface Project {
  title: string;
  description: string;
  url: string;
}

const gnMobile: Project = {
  title: "KMP Application",
  description:
    "Built a multi-module Kotlin Multiplatform app and core library used by warehouse clients. " +
    "Focused on compatibility with ERPs like Oracle JDE and NetSuite.",
  url: "/projects/kmp-application",
};

const arisIntegrations: Project = {
  title: "Integrations with Golang",
  description:
    "Wrote data import/export scripts in Go to move data between systems like ARIS and SAP Success Factory. " +
    "Mostly unglamorous work, but it made a real difference to how reliably data flowed between services.",
  url: "/projects/aris-integrations",
};

const oneDB: Project = {
  title: "Business React Application",
  description:
    "Rebuilt the frontend of a legacy database management tool in React and TypeScript. " +
    "Added support for multiple data sources and made editing product data through the backend APIs actually usable.",
  url: "/projects/react-application",
};

const landingPages: Project = {
  title: "Landing pages and documentation",
  description:
    "Built landing pages and project documentation with Astro. This site is one of them.",
  url: "/projects/landing-pages",
};

export const workProjects = [gnMobile, arisIntegrations, oneDB, landingPages];

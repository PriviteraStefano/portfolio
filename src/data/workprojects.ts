export interface Project {
  title: string,
  description: string,
  url: string
}

const gnMobile : Project = {
  title: "KMP Application",
  description: "Engineered and developed a multi-module Kotlin Multiplatform application and core library. Used by " +
    "different customers to improve their warehouse efficiency with a focus on compatibility with industry standard ERPs " +
    "such as Oracle JDE and NetSuite.",
  url: "/projects/kmp-application"
}

const arisIntegrations : Project = {
  title: "Integrations with Golang",
  description: "Created data import/export scripts in Go, streamlining data management and data integration processes" +
    "between different systems/services like ARIS and SAP Success Factory.",
  url: "/projects/aris-integrations"
}

const oneDB : Project = {
  title: "Business React Application",
  description: "Revamped the frontend of a legacy web application for centralized database management using React " +
    "and TypeScript, enabling the integration of data from various sources. This redesign introduced new functionalities" +
    " that enhanced user experience and allowed for easier editing of product data through the backend APIs.",
  url: "/projects/react-application"
}

const landingPages : Project = {
  title: "Landing pages and documentations",
  description: "Designed engaging landing pages and comprehensive project documentation using Astro. " +
    "This site was also created with it!",
  url: "/projects/landing-pages"
}

export const workProjects = [
  gnMobile, arisIntegrations, oneDB, landingPages
]
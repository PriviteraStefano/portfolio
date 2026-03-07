export interface Template {
  url: string;
  description: string;
  title: string;
}

const svggradients: Template = {
  url: "https://www.svggradients.com/",
  description:
    "Una raccolta gratuita di gradienti SVG Mesh pronti da usare nel tuo design tool o direttamente in HTML.",
  title: "SVG Gradients",
};
const quicksetup: Template = {
  url: "https://www.figma.com/community/plugin/1074647052897925336",
  description:
    "Un plugin Figma per creare pagine vuote e divisori — funziona con qualsiasi abbonamento.",
  title: "Quick Setup",
};
const vscodethemes: Template = {
  url: "https://marketplace.visualstudio.com/publishers/wicked-labs",
  description: "Una raccolta di 7 temi per VS Code.",
  title: "VS Code Themes",
};

export const byName = {
  svggradients,
  quicksetup,
  vscodethemes,
};
export const otherprojects = Object.values(byName);

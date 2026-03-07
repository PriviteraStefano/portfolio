export interface Template {
  url: string;
  description: string;
  title: string;
}

const svggradients: Template = {
  url: "https://www.svggradients.com/",
  description:
    "A free collection of SVG Mesh gradients ready to drop into your design tool or HTML.",
  title: "SVG Gradients",
};
const quicksetup: Template = {
  url: "https://www.figma.com/community/plugin/1074647052897925336",
  description:
    "A Figma plugin for creating empty pages and dividers — works on any subscription tier.",
  title: "Quick Setup",
};
const vscodethemes: Template = {
  url: "https://marketplace.visualstudio.com/publishers/wicked-labs",
  description: "A collection of 7 VS Code themes.",
  title: "VS Code Themes",
};

export const byName = {
  svggradients,
  quicksetup,
  vscodethemes,
};
export const otherprojects = Object.values(byName);

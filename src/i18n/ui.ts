import { about, experience, focus, name, work } from "@/data/en/intro";
import {
  name as nomeIt,
  about as riguardoIt,
  work as lavoroIt,
  experience as esperienzaIt,
  focus as passione,
} from "@/data/it/intro";

export const languages = {
  en: "English",
  it: "Italian",
};

export const defaultLang = "en";

export const ui = {
  en: {
    //INTRO
    name: name,
    "about-me-title": "About me",
    about: about,
    "work-title": "Work",
    work: work,
    "experience-title": "Experience",
    experience: experience,
    "focus-title": "Focus",
    focus: focus,

    //PROJECTS
  },
  it: {
    //INTRO
    name: nomeIt,
    "about-me-title": "Chi sono",
    about: riguardoIt,
    "work-title": "Lavoro",
    work: lavoroIt,
    "experience-title": "Esperienza",
    experience: esperienzaIt,
    "focus-title": "Focus",
    focus: passione,

    //PROJECTS
  },
} as const;

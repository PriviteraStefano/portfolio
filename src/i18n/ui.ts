import {
  about, experience, focus,
  name,
  work
} from "@/data/en/intro";
import {
  esperienza,
  lavoro,
  nome, passione, riguardo
} from "@/data/it/intro";

export const languages = {
  en: 'English',
  it: 'Italian',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    //INTRO
    'name': name,
    'about-me-title': "About me",
    'about': about,
    'work-title': "Work",
    'work': work,
    'experience-title': "Experience",
    'experience': experience,
    'focus-title': "Focus",
    'focus': focus

    //PROJECTS
  },
  it: {
    //INTRO
    'name': nome,
    'about-me-title': "Chi sono",
    'about': riguardo,
    'work-title': "Lavoro",
    'work': lavoro,
    'experience-title': "Esperienza",
    'experience': esperienza,
    'focus': passione

    //PROJECTS

  },
} as const;
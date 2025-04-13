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
    'name': name,
    'about': about,
    'work': work,
    'experience': experience,
    'focus': focus
  },
  it: {
    'name': nome,
    'about': riguardo,
    'work': lavoro,
    'experience': esperienza,
    'focus': passione
  },
} as const;
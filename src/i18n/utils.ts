import {ui, defaultLang, languages} from './ui';

export function getLangFromUrl(url: URL) {
  let lang = 'en'

  Object.keys(languages)
    .forEach(l => {
      if (url.pathname.includes(`/${l}/`)) {
        lang = l
      }
    })
  return lang as keyof typeof ui
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  }
}
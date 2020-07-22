const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  browserLanguageDetection: true,
  defaultLanguage: 'en',
  otherLanguages: ['en', 'vi'],
  localeSubpaths: {
    vi: 'vi',
    en: 'en',
  },
  localePath: typeof window === "undefined" ? "public/locales" : "locales",
})
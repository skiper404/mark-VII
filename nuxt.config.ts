export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@tresjs/nuxt",
    "@nuxt/fonts",
    "@nuxt/icon/module",
    "@nuxtjs/i18n",
  ],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  i18n: {
    locales: [
      { code: "en", language: "en-US", file: "en.json" },
      { code: "ru", language: "ru-RU", file: "ru.json" },
    ],
    defaultLocale: "en",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },
});

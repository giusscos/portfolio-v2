// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Giuseppe Cosenza - Freelance Frontend Developer",
      meta: [
        {
          name: "description",
          content:
            "Elevate your brand in the digital age and unlock new opportunities for growth. With a focus on innovation and meticulous craftsmanship, we transform ideas into powerful digital experiences that drive results.",
        },
        { name: "author", content: "Giuseppe Pio Cosenza - giusscos" },
        { name: "theme-color", content: "#f0f0f0" },
        // Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://giusscos.it" },
        {
          property: "og:title",
          content: "Giuseppe Cosenza - Freelance Frontend Developer",
        },
        {
          property: "og:description",
          content:
            "Elevate your brand in the digital age and unlock new opportunities for growth. With a focus on innovation and meticulous craftsmanship, we transform ideas into powerful digital experiences that drive results.",
        },
        {
          property: "og:image",
          content: "https://giusscos.it/images/small-banner.png",
        },

        // Twitter
        { property: "twitter:card", content: "summary_large_image" },
        {
          property: "twitter:url",
          content: "https://giusscos.it/images/small-banner.png",
        },
        {
          property: "twitter:title",
          content: "Giuseppe Cosenza - Freelance Frontend Developer",
        },
        {
          property: "twitter:description",
          content:
            "Elevate your brand in the digital age and unlock new opportunities for growth. With a focus on innovation and meticulous craftsmanship, we transform ideas into powerful digital experiences that drive results.",
        },
        {
          property: "twitter:image",
          content: "https://giusscos.it/images/small-banner.png",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
});

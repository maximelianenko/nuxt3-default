// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // ssr: true,
  app: {
    pageTransition: {
      name: 'page', mode: 'out-in'
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    'nuxt-viewport',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/google-fonts",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  imports: {
    dirs: ['store']
  },
  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },

    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'md',
    },

    fallbackBreakpoint: 'lg'
  },
  css: [
    "~/assets/scss/main.scss",
    "~/assets/scss/nullstyle.scss",
  ],
  googleFonts: {
    download: true,
    inject: true,
    families: {
      "Raleway": [100,200,300,400,500,600,700,800],
      // "Comfortaa": [500],
      "Unbounded": [500]
      // "Source+Serif+4": {
      //   ital: 200
      // }
    }
  },
  
  // routeRules: {
  //   '/input-overlay': { ssr: false },

  // }
})
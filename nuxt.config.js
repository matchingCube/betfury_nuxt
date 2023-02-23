export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "betfury-project",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "@/plugins/api.js",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"],
          },
        ],
      },
    ],
    "nuxt-i18n",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
  ],

  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        imgUrl: "en.png",
      },
      {
        code: "es",
        name: "Español",
        imgUrl: "es.png",
      },
      {
        code: "fr",
        name: "Français",
        imgUrl: "fr.png",
      },
      {
        code: "de",
        name: "Deutsch",
        imgUrl: "de.png",
      },
      {
        code: "fi",
        name: "Filipino",
        imgUrl: "fi.png",
      },
      {
        code: "po",
        name: "Português",
        imgUrl: "po.png",
      },
      {
        code: "py",
        name: "Русский",
        imgUrl: "py.png",
      },
      {
        code: "tu",
        name: "Türkçe",
        imgUrl: "tu.png",
      },
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          login: "Login",
          signup: "Sign Up",
        },
        es: {
          login: "iniciar sesion",
          signup: "Registro",
        },
        fr: {
          login: "Se connecter",
          signup: "S'inscrire",
        },
        de: {
          login: "Einloggen",
          signup: "Anmelden",
        },
        fi: {
          login: "Mag log-in",
          signup: "Mag sign Up",
        },
        po: {
          login: "Iniciar Sessão",
          signup: "Registo",
        },
        py: {
          login: "Войти",
          signup: "Регистрация",
        },
        tu: {
          login: "Oturum aç",
          signup: "Kaydol",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
};

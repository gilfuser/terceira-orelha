// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: "server",
    typescript: {
        shim: false
    },
    head: {
        title: "3aOrelha",
        htmlAttrs: {
        lang: "pt-br",
        },
        meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    purgeCSS: {
        whiteList: ["dark-mode"],
    },
    plugins: [
        // "~/plugins/vue-iframes",
    ],
    modules: [
        "@nuxtjs/color-mode",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/svg",
        // 'vue-scrollto/nuxt',
    ],
    webfontloader: {
        google: {
        families: [
            "Montserrat:300,400,500,600,800,900",
            "Bitter:700",
            "Poppins:400",
        ],
        },
    },
    svg: {
        vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
  },
  loading: {
    color: "orange",
    height: "5px",
  },

  // Nuxt Composition API Workaround as for May 27th
  // generate: {
  //   // choose to suit your project
  //   interval: 2000,
  // },
  tailwindcss: {
    // jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true,
    // cssPath: "~/assets/css/tailwind.css",
    // configPath: "tailwind.config.js",
    // config: {},
  },
  hooks: {
    // scrollBehavior: async function (to, from, savedPosition) {
    //   if (savedPosition) {
    //     return savedPosition
    //   }

    //   const findEl = async (hash, x = 0) => {
    //     return (
    //       document.querySelector(hash) ||
    //       new Promise((resolve) => {
    //         if (x > 50) {
    //           return resolve(document.querySelector("#app"))
    //         }
    //         setTimeout(() => {
    //           resolve(findEl(hash, ++x || 1))
    //         }, 100)
    //       })
    //     )
    //   }
    //   if (to.hash) {
    //     let el = await findEl(to.hash)
    //     if ("scrollBehavior" in document.documentElement.style) {
    //       return window.scrollTo({
    //         top: el.getBoundingClientRect().top + window.scrollY,
    //         behavior: "smooth",
    //       })
    //     } else {
    //       return window.scrollTo(
    //         0,
    //         el.getBoundingClientRect().top + window.scrollY
    //       )
    //     }
    //   }

    //   return { x: 0, y: 0 }
    // },
  },

  colorMode: {
    classSuffix: "",
  },
})

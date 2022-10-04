import VueIframe from 'vue-iframes/dist/vue-iframes.ssr'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueIframe)
})

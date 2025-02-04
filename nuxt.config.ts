// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-windicss', 'nuxt-schema-org', 'nuxt-icon'],
  content: {
    documentDriven: true,
  },
  schemaOrg: {
    canonicalHost: 'https://esteban-soubiran.site',
  },
})

import { defineNuxtPlugin } from '#app'
import { GoogleMap } from 'vue3-google-map'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(GoogleMap, {
    load: {
      key: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
    },
  })
})

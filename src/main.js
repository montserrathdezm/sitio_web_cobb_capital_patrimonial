import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Estilos
import './styles/styles.scss'
// Google maps
import VueGoogleMaps from '@fawmi/vue-google-maps'

import createI18n from './i18n'

let VUE_APP_HOST_BACK_END =
  (process.env.VUE_APP_API_URL == "" || typeof process.env.VUE_APP_API_URL == "undefined")
    ? "https:/https://cobbcapital.mx/"
    : process.env.VUE_APP_API_URL;

const app = createApp(App);  // Crea la aplicación

app.config.globalProperties.$baseURL = VUE_APP_HOST_BACK_END; 


const vuetify = createVuetify({
  components, 
  directives,
})

app.use(store).use(createI18n).use(router).use(vuetify).use(VueGoogleMaps,{load: {key: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'}}).mount('#app')
/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// vue-router
import router from './router/router'

// vuex
import Vuex from 'vuex';
import { store } from './store/store'

const app = createApp(App)

registerPlugins(app)

app
  .use(router)
  .use(Vuex)
  .use(store)
  .mount('#app')

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

const app = createApp(App)

registerPlugins(app)

app
  .use(router)
  .mount('#app')

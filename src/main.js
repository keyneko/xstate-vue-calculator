import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import * as Sentry from '@sentry/vue'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)

Sentry.init({
  Vue,
  dsn: 'https://eee2c3de6b11634d5debe12b96561bdd@o4507135161991168.ingest.us.sentry.io/4507135164678144',
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')

myUndefinedFunction()

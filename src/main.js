// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
//require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import Quasar from 'quasar'
import router from './router'
import store from './store'
import moment from 'moment'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(Vuex)
Vue.use(Quasar) // Install Quasar Framework

Vue.filter('formatDateUnixTimestamp', function(valueMs) {
  if (valueMs) {
    return moment(valueMs).format('YYYY/MM/DD hh:mm')
  }
})

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    store,
    router,
    render: h => h(require('./App').default)
  })
})

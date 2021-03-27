import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.config.productionTip = false
Vue.use(Vuetify)
sync(store, router)
Vue.use(VueSweetalert2)
new Vue({
   vuetify: new Vuetify(),
   router,
   store,
   template: '<App/>',
   render: h => h(App)
}).$mount('#app')

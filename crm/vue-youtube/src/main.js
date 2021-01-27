import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import tooltipDirective from '@/directives/tooltip.derective'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.component('Loader', Loader);


// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCiINfrTehuqBbOsJQTRDwL9btFFy_kwOo",
  authDomain: "vue-94ef9.firebaseapp.com",
  databaseURL: "https://vue-94ef9.firebaseio.com",
  projectId: "vue-94ef9",
  storageBucket: "vue-94ef9.appspot.com",
  messagingSenderId: "409966612823",
  appId: "1:409966612823:web:3b2bf9218d36248966ee12"
};

let app

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})



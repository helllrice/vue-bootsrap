import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/style/style.css'
import './assets/style/responsive.css'
const app = createApp(App)

app.use(router)
    .use(bootstrap)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('VueDatePicker', VueDatePicker)

app.mount('#app')

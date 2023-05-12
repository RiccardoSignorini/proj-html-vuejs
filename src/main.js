import { createApp } from 'vue'
import App from './App.vue'

// COLLEGAMENTI BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// COLLEGAMENTI LIBRERIE FONTAWSOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// AGGIUNTA ICONE SINGOLE
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
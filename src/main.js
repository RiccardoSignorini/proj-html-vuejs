import { createApp } from 'vue'
import App from './App.vue'

// COLLEGAMENTI BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// COLLEGAMENTI LIBRERIE FONTAWSOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// AGGIUNTA ICONE SINGOLE
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
library.add(faBuilding, faArrowsRotate, faHouseChimney, faTruck)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'

// COLLEGAMENTI BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// COLLEGAMENTI LIBRERIE FONTAWSOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// IMPORTAZIONE ICONE SINGOLE
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

// AGGIUNTA ICONE SINGOLE ALLA LIBRERIA
library.add(faBuilding, faArrowsRotate, faHouseChimney, faTruck, faSuitcase, faUsers, faGlobe, faGear, faLightbulb, faFacebookF, faTwitter, faYoutube, faInstagram, faPhoneFlip, faEnvelope, faClock)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
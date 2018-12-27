import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus ,faFutbol, faBasketballBall } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faFutbol, faBasketballBall)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEllipsisV, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

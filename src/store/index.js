import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import counter from './modules/counter'
import user from './modules/user'

const store = new Vuex.Store({
    state:{
        // count:10
    },
    modules:{
        counter,
        user
    }
})

export default store
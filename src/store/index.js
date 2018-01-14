import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from 'vuex-orm'
import database from './database'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store

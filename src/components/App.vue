<template>
  <div class="App">
    <AppHeader />

    <Description />

    <div class="container">
      <div class="users"><Users /></div>
      <div class="todos"><Todos /></div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import data from '../data'
import store from '../store'
import AppHeader from './AppHeader'
import Description from './Description'
import Users from './Users'
import Todos from './Todos'
import AppFooter from './AppFooter'

export default {
  store,

  components: {
    AppHeader,
    Description,
    Users,
    Todos,
    AppFooter
  },

  created () {
    // Here we are stubbing the initial data. In the real world, this
    // should be the response from the API Backend.
    const initialData = data

    this.$store.dispatch('entities/todos/create', { data: initialData })
  }
}
</script>

<style src="../styles/bootstrap.css"></style>

<style scoped>
.App {
  padding: 96px 48px 128px;
}

.container {
  display: flex;
  margin: 0 auto;
  width: 960px;
}

.users {
  padding-right: 48px;
  width: calc(100% / 3);
}

.todos {
  width: calc((100% / 3) * 2);
}
</style>

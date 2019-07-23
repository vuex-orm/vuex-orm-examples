<template>
  <div class="App">
    <AppHeader />

    <AppDescription />

    <div class="container">
      <div class="users"><UsersSection /></div>
      <div class="todos"><TodosSection /></div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import data from '@/data'
import store from '@/store'
import Todo from '@/models/Todo'
import AppHeader from './AppHeader'
import AppDescription from './AppDescription'
import UsersSection from './UsersSection'
import TodosSection from './TodosSection'
import AppFooter from './AppFooter'

export default {
  store,

  components: {
    AppHeader,
    AppDescription,
    UsersSection,
    TodosSection,
    AppFooter
  },

  data () {
    return {
      yay: 'Hello!'
    }
  },

  created () {
    // Here we are stubbing the initial data. In the real world, this
    // should be the response from the API Backend.
    const initialData = data

    Todo.insert({ data: initialData })
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

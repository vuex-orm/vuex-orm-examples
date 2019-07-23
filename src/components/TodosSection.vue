<template>
  <section class="Todos">
    <div class="container">
      <div class="header">
        <h2 class="title">TODOS</h2>
        <button class="button" @click="add">ADD TODO</button>
      </div>

      <TodoList />
    </div>
  </section>
</template>

<script>
import Todo from '@/models/Todo'
import TodoList from './TodoList'

export default {
  components: {
    TodoList
  },

  methods: {
    add () {
      Todo.insert({
        data: { title: '' }
      })
    }
  }
}
</script>

<style scoped>
@import "styles/variables";

.container {
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: var(--shadow-depth-3);
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
}

.title {
  line-height: 32px;
  font-size: 16px;
  color: var(--c-gray);
}

.button {
  border: 1px solid var(--c-gray-light);
  border-radius: 2px;
  padding: 0 16px;
  line-height: 30px;
  font-size: 12px;
  color: var(--c-gray);
  transition: all .3s;

  &:hover {
    border-color: var(--c-gray);
    color: var(--c-black);
  }
}
</style>

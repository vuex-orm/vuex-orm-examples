<template>
  <div class="TodosList">
    <div class="todo" :class="{ done: todo.done }" :key="todo.id" v-for="todo in todos">
      <button class="icon" @click="toggle(todo)">
        <IconCheckCircle class="svg check" />
      </button>

      <input
        class="input"
        :value="todo.title"
        placeholder="Type in the title of the task!"
        @input="e => { update(todo, e.target.value) }"
      >

      <TodoListAssignee :todoId="todo.id" />

      <button class="icon" @click="destroy(todo)">
        <IconTrash class="svg" />
      </button>
    </div>
  </div>
</template>

<script>
import Todo from '@/models/Todo'
import IconCheckCircle from './icons/IconCheckCircle'
import IconTrash from './icons/IconTrash'
import TodoListAssignee from './TodoListAssignee'

export default {
  components: {
    IconCheckCircle,
    IconTrash,
    TodoListAssignee
  },

  computed: {
    todos () {
      return Todo.query().orderBy('id', 'desc').get()
    }
  },

  methods: {
    toggle (todo) {
      todo.$update({ done: !todo.done })
    },

    update (todo, title) {
      todo.$update({ title })
    },

    destroy (todo) {
      todo.$delete()
    }
  }
}
</script>

<style scoped>
@import "styles/variables";

.todo {
  display: flex;
  align-items: center;
  border-top: 1px solid var(--c-divider);
}

.todo:hover {
  background-color: #fafafa;
}

.todo:hover .svg {
  opacity: 1;
}

.todo.done {
  .input {
    text-decoration: line-through;
    color: var(--c-gray);
  }

  .icon .svg.check {
    fill: #38d2d8;
  }
}

.input {
  flex-grow: 1;
  border: 0;
  padding: 12px 24px 12px 0;
  width: 100%;
  background-color: transparent;
  transition: all .3s;
}

.icon {
  display: block;
  padding: 12px 24px;
}

.icon:hover .svg {
  fill: var(--c-black);
}

.icon:hover .svg.check {
  fill: var(--c-black);
}

.svg {
  width: 14px;
  height: 14px;
  opacity: 0;
  transform: translateY(2px);
  transition: all .3s;
  fill: var(--c-gray);
}

.svg.check {
  opacity: 1;
  fill: var(--c-gray-light);
}
</style>

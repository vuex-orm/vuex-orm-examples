<template>
  <p class="Description">
    Try adding users and todos to see how each data gets updated. Also, open your <a href="https://github.com/vuejs/vue-devtools" target="_blank">Vue Devtools</a> to see how Vuex ORM handles data and how those data are decoupled from each other. Oh, by the way, this application uses <a href="https://github.com/vuejs/vuex" target="_blank">Vuex</a> while not having to write a single line of modules.
  </p>
</template>

<style scoped>
@import "styles/variables";

.Description {
  margin: 0 auto;
  padding-bottom: 64px;
  width: 560px;
  text-align: center;

  a {
    text-decoration: underline;
    transition: all .3s;
  }

  a:hover {
    color: var(--c-gray);
  }
}
</style>

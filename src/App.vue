<template>
  <div id="app">
    <addTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from '@/components/Todos';
import addTodo from '@/components/addTodo';

export default {
  name: 'App',
  components: { Todos, addTodo },
};
</script>

<style>
body {
  background: #5E81AC;
}

.container {
  width: 80%;
  margin: auto;
}
</style>

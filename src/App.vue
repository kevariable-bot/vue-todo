<template>
  <div id="app">
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import Todos from '@/components/Todos';
import AddTodo from '@/components/AddTodo';
import FilterTodos from '@/components/FilterTodos';

export default {
  name: 'App',
  components: { Todos, AddTodo, FilterTodos },
};
</script>

<style>
body {
  background: #5e81ac;
}

.container {
  width: 80%;
  margin: auto;
}
</style>

<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import Todos from '@/components/Todos';

export default {
  name: 'App',
  components: { Todos },
};
</script>

<style>
body {
  background: #5E81AC;
}
</style>

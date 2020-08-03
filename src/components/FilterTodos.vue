<template>
  <div class="container">
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="25">25</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  title: 'FilterTodos',
  methods: {
    ...mapActions(['filterTodos']),
  },
};
</script>

<style scoped>
select {
  margin-bottom: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  border: 2px solid #2e3440;
  background: #81a1c1;
  outline: none;
  cursor: pointer;
}
</style>

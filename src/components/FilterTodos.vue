<template>
  <div>
    <loader v-if="loader" object="#81a1c1" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#2e3440" opacity="80" name="dots"></loader>

    <div class="container">
      <select @change="loaderFilterTodos($event)">
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="25">25</option>
        <option value="5">5</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  title: 'FilterTodos',
  data() {
    return { loader: false };
  },
  methods: {
    ...mapActions(['filterTodos']),
    async loaderFilterTodos(e) {
      this.loader = true;
      await this.filterTodos(e);
      this.loader = false;
    },
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

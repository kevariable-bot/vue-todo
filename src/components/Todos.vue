<template>
  <div class="container">
    <div class="todos">
      <div class="todo" v-for="{ title, id } in allTodos" :key="id">
        <p>{{ title }}</p>
        <i class="fa fa-times" @click="deleteTodos(id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todos',
  computed: mapGetters(['allTodos']),
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodos']),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 10px;
}

.todo {
  padding: 30px;
  background: #81a1c1;
  border-radius: 5px;
  border: 2px solid #2e3440;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.todo i {
  margin-left: 5px;
  color: #bf616a;
  font-weight: bold;
  font-size: 20px;
}

.todo p {
  padding-right: 10px;
}
</style>

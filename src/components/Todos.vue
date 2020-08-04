<template>
  <div>
    <loader
      v-if="loader"
      object="#81a1c1"
      color1="#ffffff"
      color2="#17fd3d"
      size="5"
      speed="2"
      bg="#343a40"
      objectbg="#2e3440"
      opacity="80"
      name="dots"
    ></loader>
    <div class="container">

      <div>
        <ul>
          <li>Double click to check</li>
        </ul>
      </div>

      <div class="todos">
        <div
          class="todo"
          v-for="{ title, id, completed } in allTodos"
          :key="id"
          @dblclick="loaderOnDblclick(id, title, completed)"
          :class="{ 'has-completed': completed }"
        >
          <p>{{ title }}</p>
          <i class="fa fa-times" @click="loaderDeleteTodos(id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todos',
  data() {
    return { loader: false };
  },
  computed: mapGetters(['allTodos']),
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodos', 'dblclickTodos']),
    async loaderFetchTodos() {
      this.loader = true;
      await this.fetchTodos();
      this.loader = false;
    },
    async loaderDeleteTodos(id) {
      this.loader = true;
      await this.deleteTodos(id);
      this.loader = false;
    },
    async loaderOnDblclick(id, title, completed) {
      const data = {
        id,
        title,
        completed: !completed,
      };

      this.dblclickTodos(data);
    },
  },
  created() {
    this.loaderFetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

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
  cursor: pointer;
}

.todo p {
  padding-right: 10px;
}

@media only screen and (min-width: 500px) {
  .todos {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media only screen and (min-width: 800px) {
  .todos {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.has-completed {
  background: #bf616a;
}
</style>

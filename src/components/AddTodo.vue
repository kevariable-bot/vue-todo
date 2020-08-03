<template>
<div>
  <loader v-if="loader" object="#81a1c1" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#2e3440" opacity="80" name="dots"></loader>

  <div class="container">
    <h3>It's Todos</h3>

    <form @submit="onSubmit">
      <input type="text" v-model="title" />
      <button type="submit">
        submit
      </button>
    </form>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'addTodos',
  data() {
    return {
      title: '',
      loader: false,
    };
  },
  methods: {
    ...mapActions(['addTodos']),
    async onSubmit(e) {
      this.loader = true;

      e.preventDefault();

      await this.addTodos(this.title);

      this.loader = false;
    },
  },
};
</script>

<style scoped>
.container h3 {
  color: #2e3440;
  font-family: arial;
  font-weight: 100;
  font-size: 35px;
}

form {
  display: flex;
  width: 60%;
  margin-bottom: 10px;
}

form input {
  flex: 3;
  padding: 5px;
  outline: none;
  border: 2px solid #2e3440;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: #81a1c1;
}

form button {
  flex: 1;
  font-family: arial;
  font-weight: 100;
  font-size: 15px;
  border: 2px solid #81a1c1;
  background: #2e3440;
  color: #eceff4;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  outline: none;
  cursor: pointer;
}

form button:active {
  opacity: 0.8;
}
</style>

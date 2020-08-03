<template>
  <div class="container">
    <h3>It's Today</h3>

    <div class="todos">
      <div class="todo">
        Hello todo
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todos',
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
}

.container h3 {
  color: #2E3440;
  font-family: arial;
  font-weight: 100;
  font-size: 35px;
}

.todos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.todo {
  padding: 30px;
  background: #81A1C1;
  border-radius: 5px;
  border: 2px solid #2E3440;
}
</style>

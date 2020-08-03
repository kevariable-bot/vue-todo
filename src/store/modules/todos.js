import Axios from 'axios';

const state = {
  todos: [],
};

const getters = {
  allTodos: state => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const res = await Axios.get('https://jsonplaceholder.typicode.com/todos');

    commit('setTodos', res.data);
  },
  async addTodos({ commit }, title) {
    const res = await Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    });

    console.log(res);

    commit('newTodo', res.data);
  },
  async deleteTodos({ commit }, id) {
    await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('removeTodo', id);
  },
  async filterTodos({ commit }, e) {
    const limit = e.target.options[e.target.options.selectedIndex].innerText;

    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit('setTodos', res.data);
  },
};

const mutations = {
  setTodos: (state, data) => (state.todos = data),
  newTodo: (state, data) => state.todos.unshift(data),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
};

export default { state, getters, actions, mutations };

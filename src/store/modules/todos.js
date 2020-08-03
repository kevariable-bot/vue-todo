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
      completed: false
    });

    console.log(res);

    commit('newTodo', res.data);
  },
};

const mutations = {
  setTodos: (state, data) => (state.todos = data),
  newTodo: (state, data) => state.todos.unshift(data)
};

export default { state, getters, actions, mutations };

const state = {
  todos: [
    {
      id: 1,
      title: 'Hello 1',
    },
    {
      id: 2,
      title: 'Hello 2',
    },
  ],
};

const getters = {
  allTodos: state => state.todos,
};

export default { state, getters };

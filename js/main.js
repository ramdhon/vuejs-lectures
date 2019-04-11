const app = new Vue({
  el: '#app',

  data: {
    todos: [],
  },

  methods: {
    submitTodo(todo) {
      console.log('submitTodo invoked');
      this.todos.unshift(todo);
    },
  },
});

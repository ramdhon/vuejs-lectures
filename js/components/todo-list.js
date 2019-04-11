Vue.component('todo-list', {
  props: ['todos'],

  created() {
    console.log('todo-list created');
  },

  template: `
    <div class="row">
      <todo-item
        v-for="(todo, index) in todos"
        v-bind:key="index"
        v-bind:todo="todo">
      </todo-item>
    </div>
  `,
});

Vue.component('add-todo-form', {
  data() {
    return {
      todo: '',
    };
  },

  methods: {
    submitTodo() {
      this.$emit('submit-todo', this.todo);
      this.todo = '';
    }
  },

  created() {
    console.log('add-todo-form created');
  },

  template: `
    <form v-on:submit.prevent="submitTodo">
      <div class="input-group mb-3">
        <input type="text" v-model="todo" class="form-control" placeholder="Todo" aria-label="Todo" aria-describedby="button-addon2">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
        </div>
      </div>
    </form>
  `,
});

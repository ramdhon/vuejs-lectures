Vue.component('todo-item', {
  props: ['todo'],

  created() {
    console.log('todo-item created');
  },

  template: `
    <div class="col-4 mb-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ todo }}</h5>
        </div>
      </div>
    </div>
  `,
});

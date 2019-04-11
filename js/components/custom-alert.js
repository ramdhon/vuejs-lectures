Vue.component('custom-alert', {
  created() {
    console.log('custom-alert created');
  },

  template: `
    <div class="alert alert-primary" role="alert">
      <slot></slot>
    </div>
  `,
});

Router.map(function() {
  this.resource('foos', function() {
    this.route('edit', { path: ':foo_id/edit' });
  });
});

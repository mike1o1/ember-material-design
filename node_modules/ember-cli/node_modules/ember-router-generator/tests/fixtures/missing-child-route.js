Router.map(function() {
  this.route('foo', function() {
    this.route('bar', function() {
      this.resource('baz', {
        path: 'baz'
      });
    });
  });
});

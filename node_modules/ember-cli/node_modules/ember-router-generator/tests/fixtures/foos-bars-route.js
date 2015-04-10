Router.map(function() {
  this.resource('foos', function() {
    this.resource('bar', function() {});
  });
});

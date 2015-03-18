Router.route('/', function () {
  this.render('home');
});
Router.route('/events', function () {
  this.render('events');
});
Router.route('/contact', function () {
  this.render('contact');
});
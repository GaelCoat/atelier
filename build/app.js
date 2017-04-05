const AppView = Backbone.View.extend({

  events: {
    'click .scrollTo': 'scrollTo',
  },

  initialize: function() {

  },

  scrollTo: function(e) {

    var section = this.$el.find(e.currentTarget).data('scroll');
    $('html, body').animate( { scrollTop: $('#'+section).offset().top }, 750 );
    return this;
  },

  initMap: function() {

    var Google = window.google;
    var zoom = 17;
    var image = 'img/cursor.png';

    var map = new Google.maps.Map(this.$el.find('#map').get(0), {
      center: {lat: 44.7736811, lng: -0.6147753},
      scrollwheel: false,
      zoom: zoom
    });

    var marker = new Google.maps.Marker({
      map: map,
      icon: image,
      position: {lat: 44.7736811, lng: -0.6147753}
    });

    return this;
  },

  render: function() {

    return this.initMap();
  },

});

const App = new AppView({
  el: 'body'
});

App.render();

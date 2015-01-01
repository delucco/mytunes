// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  // el: '<audio controls autoplay />',
  tagName: 'div',

  template: _.template('<span class="nowPlaying"><%= artist %> \
                        <%= title %> </span><br/> \
                        <audio id="player" controls autoplay src=<%= url %> />'),

  initialize: function() {
    this.render();
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    this.$el.html( this.template(this.model.attributes) );
    this.model.setSongListeners();

    // return this.$el.attr('src', this.model ? this.model.get('url') : '');

  }

});

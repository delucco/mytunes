// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    artist: '',
    title: '',
    url: ''
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  remove: function(){
    this.trigger('removeSong', this);
  },

  setSongListeners: function() {

    $('#player').on('ended', function () {
      console.log('ended!');
    })
  }

});

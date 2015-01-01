// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('removeSong', function(song){
      this.remove(song);
    }, this);

    this.on('play', function(song){

    }, this);

  },

  addSong: function (song) {
    this.add(new SongModel(song.attributes));
  }

});

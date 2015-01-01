// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.set('queue', []);
  },

  addSong: function (song) {
    // console.log(song.toJSON());
    // this.get('models').push(song);
    this.add(new SongModel(song.attributes));
  }

});

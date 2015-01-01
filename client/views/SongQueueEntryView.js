// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="play">play</td> \
                        <td class="enqueue">add</td> \
                        <td>(<%= artist %>)</td> \
                        <td><%= title %></td>'),

  events: {
    'click .play': function() {
      this.model.play();
    },
    'click .enqueue': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});

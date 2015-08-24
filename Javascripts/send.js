define(function(require) {
  var $ = require("jquery");

  return {
    toFb: function(player1, player2) {
      var ref = new Firebase("https://robin-war-card-game.firebaseio.com/");
     ref.child("game").child("player1").set(player1);
     ref.child("game").child("player2").set(player2);
    }
  }

});
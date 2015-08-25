define(function(require) {
var $ = require("jquery");
var flip = require("flip");

return {
    player1: function() {
        $.ajax({
            url: "https://robin-war-card-game.firebaseio.com/game/player1.json",
            method: "GET"
        
        }).done(function(data) {
            // console.log(data);
            require(["hbs!../templates/player1"], function(player1Template) {
            $("#player1").html(player1Template);

        });
        $("#player1").on('click', "#deck1", function() {
     flip.p1Deck(data);
     //console.log("click", click);
   });
        });
        
    },
    player2: function() {
        $.ajax({
            url: "https://robin-war-card-game.firebaseio.com/game/player2.json",
            method: "GET"
        
        }).done(function(data) {
            require(["hbs!../templates/player2"], function(player2Template) {
            $("#player2").html(player2Template);
        });
        $("#player2").on('click', "#deck2", function() {
     flip.p2Deck(data);
   });
        });
    }
    };

});
define(function(require) {
  var $ = require("jquery");
  var deal = require("deal");

  return {
    cards: function(deck_id) {
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=104", 
        method: "GET"
       }).done(function(data) {
        console.log(data);
        deal.hands(data);
      });
     }  
   }; 
});

  //pf3xulg647am
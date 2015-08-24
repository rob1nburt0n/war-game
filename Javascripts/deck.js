define(['jquery', "shuffle"], function($, shuffle) {
  return {
    allCards: function() {
      
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2", 
        method: "GET"
       }).done(function(data) {
       console.log(data.deck_id);
       shuffle.cards(data.deck_id);
   }); 
  }
 };
});


//"pf3xulg647am"
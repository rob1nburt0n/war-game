requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});


requirejs(
  ["dependencies", "jquery", "deck", "shuffle", "deal", "flip", "send", "show"], 
  function(dependencies, $, deck, shuffle, deal, flip, send, show) {


  deck.allCards();
   
   show.player1();
   show.player2();

});



//main calls deck, deck calls shuffle, shuffle calls deal, deal calls send
//main calls retrieve x2, retrieve calls show x2, show calls hbs 2x, 

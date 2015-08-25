define(function(require) {
var $ = require("jquery");
return {
  p1Deck: function(deck1) {
    console.log(deck1);
    var p1Arr = [];
    var p1card = deck1.shift();
    p1Arr.push(p1card);
    console.log(p1Arr);
    $(".flip1").html("<img src=" + p1Arr[0].image + ">");
  },
  p2Deck: function(deck2) {
    console.log(deck2);
    var p2Arr = [];
    var p2card = deck2.shift();
    p2Arr.push(p2card);
    $(".flip2").html("<img src=" + p2Arr[0].image + ">");
 
    }
 };
});
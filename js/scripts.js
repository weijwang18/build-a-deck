$(document).ready(function(event){
  let deck = [];
  const suits = ["spades", "hearts", "clubs", "dimonds"]
  const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"] 

  suits.forEach(function(suit) {
    values.forEach(function(value) {
     deck.push(`${value} of ${suit}`)
    });
  });

  deck.forEach(function(element) {
    $("#deck").append("<li>" + element + "</li>");
  });
});


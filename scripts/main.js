/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

function handValue(hand) {
  var runningTotal = 0;
  var aces = [];

  for (i = 0; i < hand.length; i++) {
    if (hand[i] == "K" || hand[i] == "Q" || hand[i] == "J") {
      runningTotal += 10;
    } else if (hand[i] == "A") {
      aces.push(hand[i]);
    } else {
      runningTotal += Number(hand[i]);
    }
  }

  for (x = 0; x < aces.length; x++) {
    if (runningTotal + 11 <= 21) {
      runningTotal += 11;
    } else if (runningTotal + 11 > 21) {
      runningTotal += 1;
    }
  }
  return runningTotal;
}

// function needs to evaluate an incoming array of strings
// we need to sweep through the array and evaluate each one
// as each is evaluated, a value will be added to a running total score
//

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

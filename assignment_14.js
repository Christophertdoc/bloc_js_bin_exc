//xokenu

var favoriteNumber;
favoriteNumber = function(fav, guess) {
  if (guess > fav) {
    return "Too high";
  } else if (guess < fav) {
    return "Too low";
  } else if (guess == fav) {
      return "You got it!";
  }
};

var checkLock;
checkLock = function(a, b, c, d) {
  if ((a == 3 || a == 5 || a == 7 )
    && (b == 2)
    && (c >= 5 && c <= 100)
    && (d < 9 || d > 20)) {
      return "correct";
  } else {
      return "incorrect";
  }
};


var canIGet;
canIGet = function(item, money) {
  if (item == 'MacBook Air' && money >= 999) {
    return true;
  } else if (item == 'MacBook Pro' && money >= 1299) {
    return true;
  } else if (item == 'Mac Pro' && money >= 2499) {
    return true;
  } else if (item == 'Apple Sticker' && money >= 1) {
    return true;
  } else
    return false;
};

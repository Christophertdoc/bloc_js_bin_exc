//hapener

var createCourse = function(title,duration,students) {
  return {duration, students, title};
};


var formLetter = function(letter) {
  return "Hello " + letter.recipient + "," + "\n\n"
  + letter.msg + "\n\n"
  + "Sincerely," + "\n"
  + letter.sender;
};

var canIGet = function(item, money) {
  if (item === "MacBook Air" && money >= 999) {
    return true;
  } else if (item === "MacBook Pro" && money >= 1299) {
    return true;
  } else if (item === "Mac Pro" && money >= 2499) {
    return true;
  } else if (item === "Apple Sticker" && money >= 1) {
    return true;
  } else {
    return false;
  }
};

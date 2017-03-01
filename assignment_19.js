// xonacot

// === Create a Bloc Student ===========================

var protoStudent = {
  learn: function(subject) {
    return "The " + this.type + " student is learning " + subject;
  }
};


var blocStudent = Object.create(protoStudent);
blocStudent.type = "Bloc";
// Implement code so that `blocStudent`
// inherits from `protoStudent`.

blocStudent.learn("Frontend Web Development");

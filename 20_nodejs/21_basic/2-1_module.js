// 2-1_module.js

/*
exports.add = function (a, b) {
  return a + b;
};

exports.sub = function (a, b) {
  return a - b;
};
*/

var myCalc = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
};

module.exports = myCalc;

/*
var myCalc = {
  add: function (a, b) {
    return a + b;
  },

  sub: function (a, b) {
    return a - b;
  },
};

exports.calc = myCalc;
*/

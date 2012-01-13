
var distance = function (a, b) {
  var sum = 0;
  for (key in a) {
    if (key in b) {
      var x = b[key] - a[key];
      var square = Math.pow(x, 2);
      console.log(key + ': ' + square);
      sum += square;
    }
  }
  return 1 / (Math.sqrt(sum) + 1);
}

module.exports = {
  distance: distance
}

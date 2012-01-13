var euclidean = require('../');

var Bob = {
 'Blue': 1,
 'Yellow': 0,
 'Green': 1
};

var Jane = {
 'Blue': 0,
 'Yellow': 1,
 'Green': 1
};

console.log(
  euclidean.distance(Bob, Jane)
);

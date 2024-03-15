var uniqueRandomArray = require('unique-random-array');
var names = ['test', 'pedro', 'jose'];

module.exports = {
  all: names,
  random: uniqueRandomArray(names)
};
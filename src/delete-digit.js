const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let max = 0, 
	str = n.toString(); 
	for (let i = 0; i < str.length; i++) { 
		let num = +(str.slice(0,i) + str.slice(i+1)); 
		max = Math.max(max, num); 
	} 
	return max; 
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let amount = 0; 

	let m1 = s1.split('');
	let m2 = s2.split('');
  
	for (let i = 0; i < m1.length; i++) { 
		let index = m2.indexOf(m1[i]); 
		if (index !== -1) { 
			m2.splice(index, 1); 
			amount += 1 
		} 
	} 
	return amount
}

module.exports = {
  getCommonCharacterCount
};

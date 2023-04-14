const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!Array.isArray(arr)) throw new Error (`'arr' parameter must be an instance of the Array!`);

	let result = [];
	let mqArr = arr.slice();  

	for (let i = 0; i < mqArr.length; i++) {
		if (mqArr[i] === '--discard-next') {
			delete mqArr[i + 1];
			i++;
		} else if (mqArr[i] === '--discard-prev') {
			if (mqArr[i - 1]) {
			result.pop();
			};
		} else if (mqArr[i] === '--double-next') {
			if (mqArr[i + 1]) {
			result.push(mqArr[i + 1]);
			};
		} else if (mqArr[i] === '--double-prev') {
			if (mqArr[i - 1]) {
			result.push(mqArr[i - 1]);
			};
		} else {
			result.push(mqArr[i]);
		};
	};
	return result;
}

module.exports = {
  transform
};

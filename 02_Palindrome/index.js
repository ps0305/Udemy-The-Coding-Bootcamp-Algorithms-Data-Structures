// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// arr.every(callback(element[, index[, array]])[, thisArg])

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}
var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
console.log(===========================================)
function palindrome(str) {
	return str.split('').every((char, i) => {
		return char ===str[str.length - i -1];
	});
}

module.exports = palindrome;


/*function palindrome(str) {
	const reversed = str.split('').reverse().join('');
	return str === reversed;
}*/
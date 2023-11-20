// H E L L O
// We store that in an array 
// Reverse that array and store it into a string 

const reverseString = function(string) {
	let letters = string.split("");
	// loop through the array backwards and store its elements in a new array
	let reversed = [];
	for (let i = letters.length - 1; i >= 0; i--) {
		reversed.push(letters[i]);
	}
	//console.log(reversed);
	let reversedString = reversed.join("");
	return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

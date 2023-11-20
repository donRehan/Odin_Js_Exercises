const repeatString = function(string, number) {
	//store the actual word so I can repeatedly add it to itself
	let word = string;
	//loop number times and add to word each time;
	for (let i = 1; i < number; i++) {
		word += string;
	}
	//case if number is zero or negative
	if (number === 0) {
		return '';
	}
	if (number < 0) {
		return 'ERROR';
	}
	return word;
};

// Do not edit below this line
module.exports = repeatString;

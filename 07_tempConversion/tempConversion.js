const convertToCelsius = function(number) {
	let unrounded = (number - 32) * (5/9);
	let rounded = Math.round(unrounded * 10) / 10;
	return rounded;
};

const convertToFahrenheit = function(number) {
	let unrounded = ((number * (9/5)) + 32);
	let rounded = Math.round(unrounded * 10) / 10;
	return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

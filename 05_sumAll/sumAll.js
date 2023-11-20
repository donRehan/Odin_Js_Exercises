const sumAll = function(initial , final) {
	let total = 0;
	if (typeof initial != "number" || typeof final != "number"
		|| initial < 0 || final < 0
	) {
		return "ERROR";
	}
	else if(final > initial) {
		for(let i = initial; i <= final; i++){
			total += i;
		}
	}
	else if(final < initial) {
		for(let i = final; i <= initial; i++){
			total += i;
		}
	}
	return total;
};

// Do not edit below this line
module.exports = sumAll;

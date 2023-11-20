const removeFromArray = function(array, ...elements) {
	// ... elements acts as an array of elements ie if we have function 
	// (3,2,4) then elements array would include [3,2,4] thats all it is
	//loop through elments 
	for (let i = 0; i < elements.length; i++) {
		//use splice to remove the elemnt from the array
		if(array.indexOf(elements[i]) !== -1)
		{
			array.splice(array.indexOf(elements[i]), 1)
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;

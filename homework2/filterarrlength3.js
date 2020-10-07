// Implement a function for filtering an array by word length, length values are inclusive, the filter should work like this:
// const fruits = [‘orange’, ‘apple’, ‘banana’, ‘’]

// filterByLength(fruits, 0,5) // [‘apple’, ‘’]

const fruits = ['orange', 'apple', 'banana', ''];

function filterByLength (arr, min, max) {

	return arr.filter(element => {
		return (element.length >=min && element.length <=max);
	});

}

console.log(filterByLength(fruits, 0, 5));

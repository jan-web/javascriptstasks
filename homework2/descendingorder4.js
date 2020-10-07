// Implement a function to filter an array of numbers in descending order
// const numbers = [-20, -10, 0, 10, 20, 30]

// sortDesc(numbers) // [30, 20, 10, 0, -10, -20]

const numbers = [-20, -10, 0, 10, 20, 30];

function sortDesc (numbers) {
	return numbers.sort((prevNumber, nextNumber) => nextNumber - prevNumber);
}

console.log(sortDesc(numbers)); // [ 30, 20, 10, 0, -10, -20 ]
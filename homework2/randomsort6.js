// Implement a function to randomly sort array elements

const arr = [2, 5, 7, 3, 6, 8];

const randomSortedArr = arr.sort((prev, next) => Math.random() * 10 - Math.random() * 10);
console.log(randomSortedArr);
// Написать функцию для реверсии слова не используя встроенные методы


function reverseWord (word) {
	let result = [];
	for (let i=word.length-1; i>=0; i--) {
		result.push(word[i]);
	}
	return result.join('');
}

console.log(reverseWord('javascript'));
// Кэширование

// Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.

// Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат.
// Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно

// Пример:
// const calculate = cache();

// calculate(3, 3); // { value: 27, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: true}


function cache() {
	const cacheData = {};
	return (x, y)=>{
		let key = [x, y];
		if(key in cacheData){
			return { value: cacheData[key], fromCache: true}
		} else {
			cacheData[key] = Math.pow(x,y);
			return { value: cacheData[key], fromCache: false}
		}
	};
}

const calculate = cache();

console.log(calculate(3, 3)); // { value: 27, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(-2, -3)); // { value: -0.125, fromCache: false }
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}
console.log(calculate(0, 0)); // { value: 1, fromCache: false }





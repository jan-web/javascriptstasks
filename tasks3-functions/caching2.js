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
	let num1;
	let num2;
	let result;

	return (x, y)=>{
		if(x === num1 && y === num2 || x === num2 && y === num1){
			return { value: result, fromCache: true}
		} else {
			return { value: result = Math.pow(num1=x, num2=y), fromCache: false}
		}
	};
}

const calculate = cache();

console.log(calculate(3, 3)); // { value: 27, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}
console.log(calculate(-2, -3)); // { value: -0.125, fromCache: false }
console.log(calculate(0, 0)); // { value: 1, fromCache: false }

// Всё работает как часы!

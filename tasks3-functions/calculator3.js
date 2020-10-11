// Калькулятор

// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат, по умолчанию должны присутствовать методы add, substract

// Пример:
// const calculator = new Calc()

// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5

// Также, он должен хранить историю всех операций и выводить ее по запросу:

// calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*',
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */

// И очищать историю
// calculator.clearHistory()
// calculator.history() // []

function Calc () {
	const archive = [];
	const base= [['+', (a, b) => a + b],
				  ['-', (a, b) => a - b]
				];

	function calculation (op, num1, num2){
		for(let i=0; i<base.length; i++){
			if(base[i][0] == op) {
				console.log((base[i][1])(num1,num2));
				break;
			}
		}
	}

	this.operation = (str) =>{
		const [num1, op, num2] = str.split(' ');
		archive.push({operation: op, operands: num1, num2});
		return calculation(op, Number(num1), Number(num2));
	};
	this.addOperation = (str, func) => {
		base.push([str, func]);
	};
	this.history = () => {
		console.log(archive);
	};
	this.clearHistory = () => {
		archive.splice(0, archive.length);
	};
}


const calculator = new Calc();

calculator.operation('31 + 32'); // 63
calculator.operation('39 - 26'); // 13
calculator.addOperation('/', (a, b) => a / b);
calculator.operation('10 / 2'); // 5
calculator.addOperation('*', (a, b) => a * b);
calculator.operation('10 * 2'); // 20


calculator.history(); /* [{operation: '+', operands: [31,32]}, {operation: '*',
operands: [10,2]}, {operation: '/', operands: [10,2]}] */

calculator.clearHistory();
calculator.history(); // []

// Было непросто. Но я его сделал!

// С помощью прототипа реализовать структуру "Квадрат" которая будет расширять структуру "Прямоугольник", должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр

// Структура "Прямоугольник"
  function Rectangle () {
	this.name = 'Rectangle';
	this.setDimension = function (dims) {
		[this.side1, this.side2] = dims.split(' ');
	};
	this.getDimension = function () {
		return `Side1 of ${this.name} = ${this.side1} Side2 = ${this.side2}`;
	};
	this.area = function () {
		return `Area of ${this.name} = ${this.side1*this.side2}`;
	};
	this.perimeter = function () {
		return `Perimeter of ${this.name} = ${this.side1*2 + this.side2*2}`;
	};

}
// Создаём экземпляр "Прямоугольник"
const newRec = new Rectangle();

// Структура "Квадрат"
function Square () {
	this.name = 'Square';
}
// Разширяем "Квадрат" за счет "Прямоугольник"
Square.prototype = new Rectangle();
//Создаем экземпляр "Квадрат"
const newSquare = new Square();

//Задаём размеры "Прямоугольник"
newRec.setDimension('10 20');
//Получаем размеры "Прямоугольник"
console.log(newRec.getDimension());
//Получаем площадь "Прямоугольник"
console.log(newRec.area());
//Получаем периметр "Прямоугольник"
console.log(newRec.perimeter());


//Задаём размеры "Квадрат"
newSquare.setDimension('5 5');
//Получаем размеры "Квадрат"
console.log(newSquare.getDimension());
//Получаем площадь "Квадрат"
console.log(newSquare.area());
//Получаем периметр "Квадрат"
console.log(newSquare.perimeter());


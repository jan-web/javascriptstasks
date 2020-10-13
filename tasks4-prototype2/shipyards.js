// Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей

// Для моторных кораблей доступны следующие специфичные характеристики:
// Мощность двигателя
// Материал корпуса

// Для парусных кораблей доступны следующие специфичные характеристики:
// Количество мачт
// Общая площадь парусов

// Что можно делать в верфи:
// Строить корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Перекрашивать корабли - Можно красить любые корабли
// Обменивать старый корабль на новый - Можно обменивать только корабли того же типа

// Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы. Задание потребует воспользоваться гуглом для решения.

// Верфи и корабли должны создаваться с помощью функций-конструкторов.


function ShipYard () {
	this.dateOfBuild = new Date();
	this.buildShip = function () {
		if(this.type === 'sailboat') {
			this.allSailsArea = this.mast * this.sailArea;
			console.log('This is the process of building a new saleboat.');
		}
		if(this.type === 'motorboat') {
			console.log('This is the process of building a new motorboat.');
		}
	};
	this.repareShip = function () {
		if(this.type === 'sailboat') {
			this.wear = 100;
		}
		if(this.type === 'motorboat') {
			this.wear = 110;
		}

	};
	this.repaintShip = function () {
		return '#' + (Math.floor(Math.random()* (999999 - 100000 + 1)) + 100000);

	};
	this.color = this.repaintShip();
	this.exchangeShip = function () {
		this.repareShip();
		this.color = this.repaintShip ();
	};


}

function SailBoatsYard (mast, sailArea) {
	this.dateOfBuild = new Date();
	this.type = 'sailboat';
	this.mast = mast;
	this.sailArea = sailArea;
	this.color = this.repaintShip();
	this.wear = 80;
}
SailBoatsYard.prototype = new ShipYard();

function MotorBoatsYard (power, material) {
	this.dateOfBuild = new Date();
	this.type = 'motorboat';
	this.power = power;
	this.material = material;
	this.color = this.repaintShip();
	this.wear = 70;
}
MotorBoatsYard.prototype = new ShipYard();


const seaStar = new SailBoatsYard(3, 180);
seaStar.buildShip();
const speedOcean = new MotorBoatsYard(1000, 'stell');
speedOcean.buildShip();

console.log(seaStar);
seaStar.exchangeShip();
console.log(seaStar);
console.log(speedOcean);
speedOcean.exchangeShip();
console.log(speedOcean);
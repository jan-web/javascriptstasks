// Модифицировать прототип Array, добавив в него метод shuffle, чтобы получить возможность выполнять случайную сортировку для любого массива

const arr = [1, 2, "3", 4, 5, [6], 7, {n: 8}];

Array.prototype.shuffle = function () {
	return this.sort((prev, next) => Math.random() - Math.random());
};

console.log(arr.shuffle());

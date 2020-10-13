// Копилка
// Реализуйте функцию MoneyBox, который будет создавать объект с двумя методами:
//     addCoin - Добавляет 1 монету в копилку
//     getAmount - Возвращает количество монет в копилке
// Не должно быть возможности задать количество монет напрямую, минуя метод addCoin. При создании в копилке нет монет.

// Пример:
// const box = new MoneyBox();

// box.getAmount(); // 0
// box.addCoin();
// box.addCoin();
// box.getAmount(); // 2

function MoneyBox(mbox) {
	
	this.getAmount = ()=>{
		console.log(mbox);
	};
	this.addCoin = ()=> {
		mbox++;
	}
}

const box = new MoneyBox(0);

box.getAmount(); // 0
box.addCoin();
box.addCoin();
box.getAmount(); // 2

// Надеюсь я правильно понял идею задачи и решил её правильным способом
// Пополнить переменную mbox можно только через addCoin
// Просто box.mbox = 3 не сработает
// Задание выполнено!
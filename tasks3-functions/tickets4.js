// Система продажи билетов

// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их
// ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
// случайный шестизначный ID билета, создать ID можно любым способом */

// ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */




// Добавлен один билет с id 555555 чтобы потом его удалить
function boxOffice ()  {
	const base = {
		events: [],
		tickets: [ ['Concert', 500, 555555] ],
		amount: 500,
	};
	function findID (id){
		return base.tickets.some(element =>{
			return element[2] === id;
		});
	}
// Генерим ID
	function generateID () {
		let id = Math.floor(Math.random()* (999999 - 100000 + 1)) + 100000;
		if(findID(id)){
			generateID();
		} else {
			return id;
		}
	}
// Создаем одно событие с ценой за билет
	this.createEvent = (events, price) => {
		base.events.push([events, price]);
	};
// Проверяем есть ли событие в базе и добавляем в кассу денег за купленный билет, генерим ID билета и заносим в базу
	this.buyTicket = (oneevent) => {
		let actual = base.events.find(element =>{
			return element[0] === oneevent;
		});
		base.amount += actual[1];
		base.tickets.push([oneevent, actual[1], generateID()]);
	};
	this.returnTicket = (str) =>{
		let id = Number(str);
		if(findID(id)) {
			for(let i=0; i<base.tickets.length; i++){
				if(base.tickets[i][2] === id) {
					base.amount -= base.tickets[i][1];
					base.tickets[i][1] = 0;
				}
				break;
			}
			console.log(`Билет с ID ${id} удален из базы. Деньги возвращены`);
		} else {
			console.log(`Билета с ID ${id}не существует`);
		}
	};
// Печатаем всю амбарную книгу
	this.showBoxOffice = () => {
		console.log(base);
	};
}
const ticketWindow = new boxOffice();
ticketWindow.createEvent('Concert', 500);
ticketWindow.buyTicket('Concert');
ticketWindow.buyTicket('Concert');
ticketWindow.buyTicket('Concert');
ticketWindow.buyTicket('Concert');
ticketWindow.returnTicket('555555');
ticketWindow.showBoxOffice();
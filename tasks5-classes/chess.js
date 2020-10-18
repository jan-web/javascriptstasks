class Piece {
	constructor(color){this.color = color;}
}
// пустой объект для хранения ключей существующих фигур
const pieces = {
};
class Pawn extends Piece{
	constructor (name, color, space) {
		super(color);
		this.name = name;
		this.space = space;
		this.motions = [1, 0];
		this.space = space;
		pieces[name] = space;
		this.getMotion = function () {
			return this.motions;
		};
		this.convertible = true;
	}
}


class Game{
	constructor() {

		this.takedPieces = {};
		this.whoIsNext = 'white';
		this.countOfmoves = 0;
		this.movesHistory = {};
		this.canIgoToSquare = function (to){
			// есди нет такого ключа в объекте фигур
			if(!(to in pieces)) {
				let flag = false;
				let cell = to.split('');
				if(cell[0] > 'h' || cell[1] > 8) {
					console.log('клетка вне поля');
					return false;
					} else if (true){

				for (let key in pieces) {

					if(pieces[key] === to) {
						console.log('Клетка уже занята, сюда ходить нельзя');
						return false;
					}

				}

				return true;
			}
			} else {
				return false;
			}

		};
		this.moveTo = function (piece, to) {
			//если можно сходить на клетку to и ход фигур текущего цвета
			if(this.canIgoToSquare(to) && this.whoIsNext === piece.color){
				//меняем текущий цвет для следующего хода
				this.whoIsNext = (this.whoIsNext === 'white')?'black':'white';
				piece.space = to; // двигаем фигуру на клетку to
				console.log('Yes ser!', piece.space);
				pieces[piece.name] = to; //меняем координаты фигуры в списке фигур
			} else {
				// если цвет фигуры не соответствует цвету игрока, который ходит
				// или выбранная для хода клетка занята или вне поля
				console.log('You have no move');
			}
		}

	}


}


const pw1 = new Pawn('pw1', 'white', 'a2'); // создаем 1ю пешку

const game = new Game();
const pw2 = new Pawn('pw2', 'white', 'a3');// создаем еще одну пешку в клетке а3
game.moveTo(pw1, 'a3'); // пробуем двигать первую пешку из а2 в а3 - Клетка уже занята, сюда ходить нельзя

console.log(pieces);



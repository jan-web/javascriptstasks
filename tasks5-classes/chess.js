class Piece {
	constructor(){
		this.isConvertible = function(type) {
		return (type == 'pawn') ? true : false;
		};
	}

}

class Pawn extends Piece{
	constructor (name, color) {
		super();
		this.type = 'pawn';
		this.name = name;
		this.color = color;
		this.motions = [1, 0];
		this.getMotion = function () {
			return this.motions;
		};
		this.convertible = this.isConvertible (this.type);

	}
}
// bishop, knight, castle, queen, king
class Field {
	constructor() {
		this.state = [['bb1', 'kb1', 'cb1', 'qb',  'kgb', 'cb2', 'kb2', 'bb2'],
					  ['pb1', 'pb2', 'pb3', 'pb4', 'pb5', 'pb6', 'pb7', 'pb8'],
					  [0    , 0    , 0    , 0    , 0    , 0    , 0    , 0    ],
					  [0    , 0    , 0    , 0    , 0    , 0    , 0    , 0    ],
					  [0    , 0    , 0    , 0    , 0    , 0    , 0    , 0    ],
					  [0    , 0    , 0    , 0    , 0    , 0    , 0    , 0    ],
					  ['pw1', 'pw2', 'pw3', 'pw4', 'pw5', 'pw6', 'pw7', 'pw8'],
					  ['bw1', 'kw1', 'cw1', 'qw',  'kwg', 'cw2', 'kw2', 'bw2']];
	}

}

class Game extends Field{
	constructor() {
		super();
		this.takedPieces = {};
		this.whoIsNext = 'white';
		this.countOfmoves = 0;
		this.movesHistory = {};
		this.canIgoToSquare = function (x, y, xto, yto){
			if(this.state[xto-1][yto-1] !== 0){
				console.log('Выбранная ячейка занята');
			} else {
				console.log('Выбранная ячейка не занята');
				return true;
			}
			return false;

		};
		this.moveTo = function (color, piece, x, y, xto, yto) {
			if(this.canIgoToSquare(x, y, xto, yto) || this.whoIsNext === color){
				this.whoIsNext = (this.whoIsNext === 'white')?'black':'white';

				console.log('Yes ser!', color, piece, x, y, xto, yto);
			} else {
				//Позволяет выбрать фигуру только в том случае, если цвет фигуры соответствует цвету игрока, который ходит
				console.log('You have no move');
			}
		}

	}


}

const pawn1 = new Pawn('pb1','white');

const game = new Game();
game.moveTo('white', 'pb1', 4, 5, 3, 9);



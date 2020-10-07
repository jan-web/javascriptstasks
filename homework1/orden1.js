// Определить порядок выполнения операторов с помощью таблицы приоритетов операций.
// Напишите в ответе на задание этот порядок для каждого выражения и результат всех переменных присвоений.

//1.
var x = 6, y = 15, z = 4;
y /= x + 5 % z; // result 2.142857142857143

// 5 % 					Приоритет 14
// (y /= x) + (5 % z) 	Приоритет 13
// y /= x   			Приоритет 3

//2.
var x = 6, y = 15, z = 4;
z = x++ + y * 5; // result 81
//x++  				Приоритет 17
//y * 5				Приоритет 14
//(x++) + (y * 5)	 Приоритет 13
//z = (x++ + y * 5)  Приоритет 3


//3.
var x = 6, y = 15, z = 4;
x += y - x++ * z; // result -3

//x++ 			Приоритет 17
//x += y         Приоритет 16
//(x++) * z 		Приоритет 14
// y - (x++)       Приоритет 13


//4.
var x = 6, y = 15, z = 4;
z = -- x - y * 5;  //result -70


//-- x  Приоритет 16
//y * 5 Приоритет 14
// (-- x) - (y * 5) Приоритет 13
// z = (-- x - y * 5)  Приоритет 3

 //5.
var a = 3;
var b = ++a + 1 + a++; // result b=9, a=5

// a++  	  Приоритет 17
// ++a  	  Приоритет 16
// (++a) + 1  Приоритет 13
// 1 + (a++)  Приоритет 13
// b = (++a + 1 + a++) Приоритет 3
// Реализовать цикл перебирающий числа от одного до 20 и выводящий каждое четное значение на экран, реализация должна использовать все 3 вида циклов (отдельная реализация на каждый цикл)


//1. for
for (let i=1; i<=20; i++){
	if(!(i%2)){
		console.log(i);
	}
}

//2. while
let i=1;
while (i<=20) {
	if(!(i%2)){
		console.log(i);
	}
	i++;
}


//3. do...while
let i=1;
do {
	if(!(i%2)){
		console.log(i);
	}
	i++
} while (i<=20);
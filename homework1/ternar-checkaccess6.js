// Переписать if с помощью тернарного оператора ( Да, это будет выглядеть страшно )

const user =
	{
	 age: 18,
	 paid: true,
	 blocked: false,
	 badUsername: false,
	 isAdmin: false
	}
let access = ( user.isAdmin || user.age>=18 && user.age<=35 && user.paid && !user.blocked && !user.badUsername);


access ? console.log('Access granted') : console.log('Access denied');
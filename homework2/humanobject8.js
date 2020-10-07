// Create a human object with the following capabilities:
// 1. When writing a value to the fullName property, the first and last name must be written to separate properties firstName and lastName
// 2. When reading the fullName value, it must be obtained from the union of firstName and lastName
// 3. When setting the value of the dateOfBirth property, it must also the age property is set depending on the difference between the year of birth and the current year

const human = Object.create( {}, {
	fullName: {
		set: function(fullname) {
			[this.firstName, this.lastName] = fullname.split(' ');
		},
		get() {
			return `${this.firstName} ${this.lastName}`;
		}
	},
	dateOfBirth: {
		set: function (year) {
			this.year = year;
			this.age = new Date().getFullYear() - this.year;
		}
	}

});
human.fullName = 'Alex Smith';
console.log('Full name - ', human.fullName);
human.dateOfBirth = 1972;
console.log('age = ', human.age);
// There is an array of company employees
// You need to perform the following transformations with it:
// 1. Find out the average salary of employees
// 2. Sort employees by salary
// 3. Get a list of employees with salaries > 4500 and age > 25

const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
];
// 1. Find out the average salary of employees
const averageSalary =  employees.reduce((accumulator, employee) => {
		return accumulator + employee.salary;
	}, 0);
console.log('Average salary of employees = ', averageSalary);

// 2. Sort employees by salary
const minMaxSalaryList = employees.sort((prevemployee, nexteployee) => prevemployee.salary - nexteployee.salary).map((employee) => console.log(employee.firstName, employee.lastName, employee.salary));

// 3. Get a list of employees with salaries > 4500 and age > 25
const specialList = employees.filter(employee => {
	return employee.salary > 4500 && employee.age > 25
}).map(employee => console.log('Employee with salaries > 4500 and age > 25 ', employee.firstName, employee.lastName, employee.salary, employee.age));

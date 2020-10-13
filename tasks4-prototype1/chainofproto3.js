// Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:

// Есть следующее расширение объектов:
// Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник

// Есть следующий объект, в котором свойства лежат кучей:

// const john = {
//   name: "John",
//   lastName: "Smith",
//   position: "Senior engineer",
//   startDate: "10.10.1990",
//   endDate: "10.10.2000",
//   baseSalary: "10000",
//   salaryCurrency: "$",
//   location: "Russia",
//   department: "IT",
//   phoneNumber: "+1234567890",
//   eat: function() {},
//   sleep: function() {},
//   callFriend: function() {},
//   writeReport: function() {},
//   organizeMeeting: function () {},
//   retire: function () {},
//   startVacation: function () {}
// };

function Human (name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.eat = function() {return 'eat';};
  this.sleep = function() {};
  this.callFriend = function() {};
}
const johnSmith = new Human('John', 'Smith');

function Employee () {
	this.position = "Senior engineer";
	this.baseSalary = "10000";
	this.salaryCurrency = "$";
	this.location =  "Russia";
	this.department =  "IT";
	this.phoneNumber = "+1234567890";
	this.writeReport = function() { return 'writeReport';};
	this.organizeMeeting = function () {};
  }
  Employee.prototype = new Human();
  const employee = new Employee();
console.dir(employee.writeReport());


  function EmployeeStatus (startDate, endDate) {
	this.startDate = startDate;
	this.endDate = endDate;
	this.retire = function () {};
	this.startVacation = function () {}
  };
  EmployeeStatus.prototype = new Employee();
  const employeeStatus = new EmployeeStatus('10.10.1990', '10.10.2000');

  console.log(employeeStatus.eat());
  console.log(employeeStatus.writeReport());
  console.log(employeeStatus.startDate);
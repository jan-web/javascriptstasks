// Create an empty object and fill it with data:
// 1. Add the name property and write the ‘Alex’ value to it
// 2. Add the lastName property and write the ‘Smith’ value to it
// 3. Assign the ‘Bob’ value to the name property
// 4. Remove both properties

const emptyObject = new Object();

emptyObject.name = 'Alex';
emptyObject.lastName = 'Smith';
emptyObject.name = 'Bob';
delete emptyObject.name;
delete emptyObject.lastName;

console.log(emptyObject);

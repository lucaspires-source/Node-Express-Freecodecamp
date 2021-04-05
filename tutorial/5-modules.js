//Modules

//Every file in node is a module by default
//Modules - Encapsulated Code (only share minimum)
const names = require('./3-name.js');
const sayHi = require('./4-utils');
console.log(names)

sayHi(names.john)

sayHi(names.peter)

sayHi('Susan')

// function declaration

// const func = document.querySelector(".parent");

// alertBtn();
// function alertBtn(value) {
//   func.style.background = "blue";
// }

// function expression

// const myfunction = function() {
//     console.log('object')
// }

// arguments & parameters

// const myfunction = function(person,time) {
//     console.log(person,time)
// }

// myfunction('khalil',1)

// myfunction('qambar',4)

// returning values

// const myfunction = function (salary, tax) {
//   const result = salary - tax;
//   return result;
// };

// const myfunction = function (salary = 10000, tax = 938) {
//   return salary - tax;
// };

// console.log(myfunction(90000, 837));

// myfunction(30000, 945);

// myfunction(60000, 893);

// // regular function

// function buttonToggle() {
//   console.log("value");
// }

// buttonToggle();

// // arrow function

// const menuToggle = (score) => console.log(score);

// menuToggle(99);

// practice arrow functions

// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };


// console.log(bill([10, 15, 30], 0.2))

// console.log(bill([10, 15, 30], 0.2));


// functions

// const nums = [5, 34 , 24 ,545 ,  34, 43]

// const myfunc = () => console.log(nums)

// myfunc()

// methods

// const person = 'Ali'

// console.log(person.toUpperCase())


// callbacks & forEach 

// const myfunc = (callbackFunc) => {
//   // do something
//   let value = 50;
//   callbackFunc(value)
// }

// myfunc(value => console.log(value))

// const test = (callbacktest) => {
//   let value2 = "jan";
//   callbacktest(value2)
// }
// test(value2 => console.log(value2))


// const loop = (test) => {
//   let teacher = ['khalil', 'jan ali', 'rezaie'];
//   for(let i = 0; i < teacher.length; i++) {
//     let result = teacher[i]
//     test(result)
//   }
// }
// loop (test  => console.log(test))



// array Methods with callBacks

// const customers = ["khalil", "qadir", "jawad", "zia", "sajjad"]

// customers.forEach(person => console.log(person))

// customers.map(person => console.log(person))

// const filterEle = "jawad";

// const filteredArr = customers.filter(person => person !== filterEle)

// console.log(filteredArr)

// const filterFind = customers.find(person => person === "zia")

// console.log(filterFind)
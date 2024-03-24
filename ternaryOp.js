const object = document.querySelector(".input");

const themeToggle = function (value) {
  object.style.background = value === "on" ? "red" : "blue";
};

// let myfunction = function (value) {
//   for (let i = 1; i <= value; i++) {
//     let result = "";
//     for (let j = 1; j <= i; j++) {
//       result += `${j} `;
//     }
//     console.log(result);
//   }
// };

// myfunction(8);

const object2 = [
  {
    name: "khalil",
    f_name: "jan ali",
    last_name: "khadim ali",
    f_name: "khadimi",
    age: 18,
    country: "Pakistan",
    City: "Quetta",
  },
  {},
  {},
  {},
];

// let date = new Date(2017,1,24,3,40,10,19)

let date = new Date()

// date.toString()

// date.getFullYear()

let math = Math

// console.log(math.ceil(3.4))


const users = {
  name: "sajjad",
  age: 20,
  male: true,
  female: false,
  phoneNumbers: ["423424234","34324234"],
  logIn(){
    console.log(this)
    this.phoneNumbers.forEach(num => console.log(num))
  }
}

users.logIn();


console.log(this)
// for LOOP

// for(let i = 0; i <= 5; i++) {
//     console.log("loop working", i)
// }

// const users = ["ali","khalil","qasim","ejaz","mustafa"];

// for(let i = 0; i < users.length; i++) {

//     console.log(users[i])

// }

const number = [1, 2, 3, 4, 5];

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

// while LOOP

// let i = 0;

// while(i < users.length) {
//     console.log(users[i])
//     i++
// }

// do while LOOP

// let i = 0;

// do{
//     console.log(users[i])
//     i++
// } while(i > users.length);

// conditional Statement

const password = document.querySelector(".input").innerHTML;

console.log(password);

let email = "mustafa@gmail.com";

if (password.length >= 8) {
  console.log("password is correct");
} else if (password.includes("123")) {
  console.log("password must be 8 characters");
} else {
}

// if(email.includes("@")) {
//     console.log("email working")
// }

// Logical OR || and &&
let pass = "bhalil";

if (pass.length >= 8 && pass.includes("@")) {
  console.log("object");
} else if (
  pass.length == 8 ||
  pass.includes("@") ||
  pass.includes("k") ||
  pass.includes("b")
) {
  console.log("2nd statement");
} else {
  console.log("not working");
}

// Logical Knot

let age = 19;

if (age !== 18) {
  console.log("working");
  console.log(!false);
}

// break and continue
const findStd = "jafar";

const students = ["ali", "jafar", "haider", "khadim"];

// for(let i = 0; i < students.length; i++) {
//   if(findStd === students[i]) {
//     console.log(students[i])
//     break;
//   }
//   console.log(students[i])
// }

//switch statement

const result = "g";

switch (result) {
  case "A":
    console.log("excellent");
    break;
  case "B":
    console.log("brilliant");
    break;
  case "C":
    console.log("good");
    break;
  case "D":
    console.log("poor");
    break;
  default:
    console.log("not a valid grade");
}

// if(result === 100) {
//   console.log('excellent')
// } else if(result <= 80) {
//   console.log('brilliant')
// }else if(result <= 80) {
//   console.log('brilliant')
// }else if(result <= 80) {
//   console.log('brilliant')
// }else if(result <= 80) {
//   console.log('brilliant')
// }

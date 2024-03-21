const element = document.querySelector("#title");

const array = ["sir", "khadim", "jafar", "khan", "qambar", "ahmad"];

// element.innerHTML = array.filter(array => array === "khadim");

// element.innerHTML = array[1];

const object = {
  name: "sajjad",
  f_name: "qadir ali",
  surname: "hussaini",
  age: 20,
  school: "danish",
  height: "6.1ft",
  address: "bashir town",
  phone_number: "0352235424",
  length: "hlhe",
};

element.innerHTML = object.length;

const arrayOfObjects = [
  {
    name: "sajjad",
    f_name: "qadir ali",
    surname: "hussaini",
    age: 20,
    school: "danish",
    height: "6.1ft",
    address: "bashir town",
    phone_number: ["991312342","234423424"],
    length: "hlhe",
  },
  {
    name: "irfan",
    f_name: "iqbal ali",
    surname: "hussaini",
    age: 20,
    school: "danish",
    height: "6.1ft",
    address: "bashir town",
    phone_number: "0352235424",
    length: "hlhe",
  },
];

element.innerHTML = arrayOfObjects[0].phone_number[0].number2;
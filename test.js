let element = document.getElementById("title2");

let employees = [
  {
    id: 1,
    name: "Mustafa",
    f_name: "Arif Ali",
    age: 19,
    work: "frontend",
    salary: 5000,
    phoneNumber: [3777973773, 2769472974],
    address: "Mari Kaloni",
  },
  {
    id: 2,
    name: "Khalil",
    f_name: "Jan Ali",
    age: 18,
    work: "backend",
    salary: 8000,
    phoneNumber: [6628462429, 9382923947],
    address: "Ali Abad",
  },
  {
    id: 3,
    name: "Irfan",
    f_name: "Iqbal Ali",
    age: 17,
    work: "Full Stack",
    salary: 10000,
    phoneNumber: [62372349472, 9837593759837],
    address: "Barish Town",
  },
];

element.innerHTML = employees.map(
  (employee) =>
    `I'm ${employee.name}, son of ${employee.f_name}, I'm ${employee.age} years old,
    I work as a ${employee.work} with a salary of ${employee.salary},
    my contacts are ${employee.phoneNumber[0]}, I live in ${employee.address}. <br> <br> <br>`
);

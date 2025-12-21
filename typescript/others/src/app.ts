// Code goes here!

let age = 21;
console.log(age);

function add2(a: number, b: number) {
  console.log(a + b);
}

const x = add2(15, 15);

const y = (a: number, b: number) => a * b;
console.log(y(3, 2));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hikking"];

activeHobbies.push(hobbies[0]);

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = { ...person };

copiedPerson.name = "Diogo";

console.log(person, copiedPerson);
console.log(person);

const [hobbie1, h2] = hobbies;

console.log(h2);

const allHobbies = [...activeHobbies, ...hobbies];
console.log(allHobbies);

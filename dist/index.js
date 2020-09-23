"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const nut = new Human("black", 25, "male");
// const me = {
//   name: "kwon",
//   age: 22,
//   gender: "male",
// };
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(nut));
//# sourceMappingURL=index.js.map
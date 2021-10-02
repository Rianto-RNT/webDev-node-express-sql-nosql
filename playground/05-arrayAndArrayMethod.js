const person = {
  name: "rian",
  age: 28,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

console.log(hobbies.map(hobby => 'hobby: ' + hobby));
console.log(hobbies);
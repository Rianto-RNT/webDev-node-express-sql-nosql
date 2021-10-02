const person = {
  name: "rian",
  age: 28,
  greet() {
    console.log("Hi, I am " + this.name);
  }
};

person.greet();

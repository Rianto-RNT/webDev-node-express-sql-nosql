const name = "rian";
let age = 28;
const hasHobbies = true;

age = 30;

// Function
const summariezUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
     userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

const add = (a, b) => {
    return a + b;
};

console.log(add(1, 2))

console.log(summariezUser(name, age, hasHobbies));

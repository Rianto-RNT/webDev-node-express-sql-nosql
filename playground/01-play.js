let name = "rian";
let age = 28;
let hasHobbies = true;

// Function
function summariezUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
     userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

console.log(summariezUser(name, age, hasHobbies));

var name = "rian";
var age = 28;
var hasHobbies = true;

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

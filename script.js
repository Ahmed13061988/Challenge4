"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const formula = function () {
  dogs.forEach((dog) => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
};
formula();
console.log(dogs);

const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));

console.log(
  sarahDog.recommendedFood > sarahDog.curFood
    ? "Sarah's dog eating less than recommended"
    : "Sarah's dog eating more than recommended"
);

const OwnersEatTooMuch = dogs
  .filter((dog) => dog.recommendedFood < dog.curFood)
  .map((dog) => dog.owners)
  .flat();

const OwnersEatTooLittle = dogs
  .filter((dog) => dog.recommendedFood > dog.curFood)
  .map((dog) => dog.owners)
  .flat();

console.log(OwnersEatTooLittle, OwnersEatTooMuch);

console.log(`${OwnersEatTooMuch.join(" and ")}'s dogs eating too much!`);

console.log(`${OwnersEatTooLittle.join(" and ")}'s dogs eating too little!`);

console.log(dogs.some((dog) => dog.recommendedFood === dog.curFood));

console.log(
  dogs.some(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

const eatingOkay = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

console.log(eatingOkay);

const assorted = dogs.sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(assorted);

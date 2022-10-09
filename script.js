"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const formula = function () {
  dogs.map((dog) => {
    dog.recommendedFood = dog.weight ** 0.75 * 28;
  });
};
formula();

const h = dogs.map((owner) => owner.owners);

console.log(h);

// console.log(
//   sarahDog.recommendedFood > sarahDog.curFood
//     ? "Sarah's dog eating less than recommended"
//     : "Sarah's dog eating more than recommended"
// );

const OwnersEatTooMuch = dogs
  .filter((dog) => dog.recommendedFood < dog.curFood)
  .map((dog) => dog.owners)
  .flat();

const OwnersEatTooLittle = dogs
  .filter((dog) => dog.recommendedFood > dog.curFood)
  .map((dog) => dog.owners)
  .flat();

console.log(OwnersEatTooLittle, OwnersEatTooMuch);

console.log(
  `${OwnersEatTooMuch[0]} and ${OwnersEatTooMuch[1]} and ${OwnersEatTooMuch[2]}'s dogs eat too much!`
);

console.log(
  `${OwnersEatTooLittle[0]} and ${OwnersEatTooLittle[1]} and ${OwnersEatTooLittle[2]}'s dogs eat too little!`
);

console.log(dogs.some((dog) => dog.recommendedFood === dog.curFood));

console.log(dogs.some((dog) => dog.curFood >= dog.recommendedFood));

const eatingOkay = dogs.filter((dog) => dog.curFood >= dog.recommendedFood);

console.log(eatingOkay);

const assorted = dogs.sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(assorted);

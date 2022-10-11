## Destructuring

1.1 Assign orange to an extra variable using destructuring.
1.2 Now assign orange to an extra variable without using destructuring.
```
const fruitArray = ["watermelon", "strawberry", "orange"]
```
---
2.1 Create variables for the following values from the object using destructuring.

- an extra variable named `name` (name should hold firstName as a value)
- an extra variable named `city` (city should hold city as a value)
- an extra variable named `hobbies` (hobbies should hold hobbies as a value)

2.2 Now save the city additionally in an extra variable named `cityWithoutDestructuring`. Do not use destructuring this time.


```
const person = {
    firstName: "John",
    lastName: "Smith",
    age: 36,
    hobbies: ["programming", "travelling", "cycling"],
    address: {
        street: "Prenzlauer Allee 6",
        city:"Berlin"
    }
}
```
---
3. What does the following code return/print?

```
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?

```
---
4. What does the following code return/print?

```
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ?

```
---
5. What does the following code return/print?

```
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?
```
---
6. Use destructuring to create extra variables for the two tutors of the class.

```
const breakingBugs = ["Mofak", "Mateusz", "Max", "Said", "Belal", "Galina"]

```
---
7. Use destructuring to create two variables named `teacher` and `class`. Save the respective values in it.

```
const breakingBugs = ["Mofak", "Mateusz", "Max", "Said", "Belal", "Galina"]

```

8.1. We have 2 different objects, which hold information about a user. Combine all information in the two objects into a third object, named `userInfoAfterUpdate`. Use destructuring.

8.2. `console.log(userInfoAfterUpdate)`

```
const userInfo = {
    name: "John",
    age: "35",
    address: {
        city: "Berlin",
        street: "Prenzlauer Allee 6"
    },
    hobbies: [ "programming", "travelling"]
}

const userInfoUpdate = {
    age: 30,
    securityQuestion: "What was your first car?"
}
```
---

**mehr Lesematerial**

:point_right:[object destructuring](https://dmitripavlutin.com/javascript-object-destructuring/)

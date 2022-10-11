// 1
const fruitArray = ["watermelon", "strawberry", "orange"]
const [, , fruit3] = fruitArray;
console.log(fruit3)

// 2

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 56,
    hobbies: ["programming", "travelling", "cycling"],
    address: {
        street: "Prenzlauer Allee 6",
        city:"Berlin"
    }
};

const { firstName : first, address: {city} , hobbies: hob } = person;
console.log(first)
console.log(hob)
console.log(city)
console.log("city", person.address.city)
console.log(person.age)

// 3

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"})) // ?
  console.log(getUserData({firstName: "Melissa"})) // ?
  console.log(getUserData({})) // ?

// 4

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ?


  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  const { enemies = ['Joker'] } = hero;

  console.log(hero);

//   
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

const userInfoAfterUpdate = {...userInfo, ...userInfoUpdate}

console.log(userInfoAfterUpdate);
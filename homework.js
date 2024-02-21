//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    taco:"Anything not from Taco bell",
    burger:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shake:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayInfo(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) { // looked up how to check if a value is an array to write it out different //
            console.log(`Favorite ${key}s:`);
            for (let item of person[key]) {
                console.log(` - ${item}`);
            }
        } else if (typeof person[key] === 'string') { // looked up how to check if a value is a string to write it out different //
            console.log(`Favorite ${key}s: ${person[key]}`);
        } // struggled to get into the object inside the array //
    }
}

displayInfo(person3);

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class

class Person {

    constructor(name, age){
      this.name = name;
      this.age = age;
    }

// Use an arrow to create the printInfo method

    printInfo = () => {
      return `${this.name} is ${this.age} years old`;
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

    addAge = (age) => {
      this.age += 1;
      return `${this.name} is now ${this.age} years old`;
    }
}

const person1 = new Person('John', 30);
const person2 = new Person('Sally', 25);

console.log(person1.printInfo());
console.log(person2.printInfo());
console.log(person1.addAge());
console.log(person1.addAge());
console.log(person1.addAge());

// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const ergastData = async () => {
    try{
      const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`there was an error: ${error}`);
    }
  }
  
  ergastData();

//CodeWars Problems//

/* Problem 1: Pillars
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. 
Your function accepts three arguments:
number of pillars (≥ 1)
distance between pillars (10 - 30 meters)
width of the pillar (10 - 50 centimeters)
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
Solution: */

function pillars(numPill, dist, width) {
    if (numPill === 1) {
        return 0;
    }
    return (numPill - 1) * dist * 100 + (numPill - 2) * width; // definitely looked up the math for this part "(numPill - 2) * width" //
}

console.log(pillars(1, 10, 10));
console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30));

/* Problem 2: String repeat
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Solution: */

function repeatStr(n, s) {
    return s.repeat(n);
}

console.log(repeatStr(6, 'I'))
console.log(repeatStr(5, 'Hello'))
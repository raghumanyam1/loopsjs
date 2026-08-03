const person = {
  firstName: "Raghu",
  lastName: "manyam",
  age: 25,
  eyeColor: "blue"
};

console.log(`${person.firstName} is ${person.age} years old.`);



const person1 = new Object ({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});

console.log(`${person1.firstName} is ${person1.age} years old.`);

//using create method

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const man = Object.create(person2);
man.firstName = "Raghu";
console.log(`${man.firstName} and ${person2.firstName}`);

//object fromentries

const fruits = [
  ['apple', 10],
  ['banana', 5],
  ['orange', 8]
];

const myObj = Object.fromEntries(fruits);
console.log(myObj);


const fruits1 = {
  apple: 10,
  banana: 5,
  orange: 8,
};

let myObje = Object.entries(fruits1);
console.log(myObje);


//object assign

const person3 = {
    firstName: "Raghu",
    lastName: "Manyam",
    age: 25,
    eyeColor: "blue"
};

const person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "green"
};
Object.assign(person3, person4);
console.log(person3);


const person5 = {
    firstName: "Raghu",
    lastName: "Manyam",
    age: 25,
    eyeColor: "blue"
};

const person6 = {
    firstName: "raju",
    lastName: "ram",
    age: 43,
    eyeColor: "green"
};
Object.assign(person5, { firstName: person6.firstName }, { lastName: person6.lastName });

console.log(person5);

//Objects are Mutable
//Changes to a copy of an object will also change the original object:


const people = {
    firstName: "Raghu",
    lastName: "Manyam",
    age: 25,
    language: "English"
};

const x = people;
x.age = 30; 

console.log(people.firstName, people.age); 

const cars ={
    name: "BMW",
    model: "X5",
    year: 2020,
    myCar: function() {
        return this.name + " " + this.model + " " + this.year;
    }
};

console.log(cars.myCar());

//call()

const car1 = {
    mycar: function(){
    return this.name + " " + this.model + " " + this.year;
    }
};

const car2 = {
    name: 'Audi',
    model: 'A4',
    year: 2021,
};

let carDetails = car1.mycar.call(car2);
console.log(carDetails); 

//bind()

const car3 = {
    name: 'BMW',
    model: 'X5',
    mycar: function() {
        return this.name + " " + this.model;
    }
};

const car4 = {
    name: 'Audi',
    model: 'A4',
};

let mycar = car3.mycar.bind(car4);
console.log(mycar());

//values

const fruits2 = {
  apple: 10,
  banana: 5,
  orange: 8
};

let myobje = Object.values(fruits2);
console.log(myobje);


const person7 = {
    firstName: "Raghu",
    lastName: "Manyam",
    age: 25,
    language: "English",
    get lang() {
        return this.language;
    }
};
console.log(person7.lang);



const person8 = {
    firstName: "Raghu",
    lastName: "Manyam",
    age: 25,
    language: "",
    set lang(value) {
        this.language = value;
    }
};

person8.lang = "English";
console.log(person8.language);

//adding a property to an oblect

const person9 = {
    firstName: "Raghu",
    lastName: "Manyam",
    age: 25,
};

Object.defineProperty(person9, "language", {value: "telugu"},"lastName", {value: "none"});
Object.getOwnPropertyNames(person9);
console.log( person9.language , person9.lastName);
console.log(person9);
/*function myFunction(x, y) {
  return x * y;
}


const myFunction = function name(x, y) {
  return x * y;
};

const myFunction = function (x, y) {
  return x * y;
};


const myFunction = (x, y) => x * y;

const myFunction = new Function("x", "y", "return x * y");


const obj = {
  myFunction(x, y) {
    return x * y;
  },
};

*/
/*
function myFunction(a, b) {return a * b}

let x = myFunction(4, 3);
console.log(x);

//You can call a function before or after it is declared in the code.


let result = multiply(5, 3);

console.log(result);

function multiply(a, b) {
  return a * b;
}

const sum = add(2,3);

function add(a, b) {return a + b;}
console.log(sum);


function multiply(a, b) {
  return arguments.length;
}

console.log(multiply);


setTimeout(myFunction, 3000);

function myFunction() {
console.log("hello");
}



setTimeout(myFunction, 5000);

function myFunction() {
console.log("hi all");
}
*/

//The forEach() method calls a function (a callback function) once for each array element.


const numbers = [45, 4, 9, 16, 25];

let txt = "";

numbers.forEach(myFunction);

console.log(txt);

function myFunction(value) {
    txt += value + "\n";
}

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

console.log(numbers2);

function myFunction(value) {
  return value * 2;
}

function myDisplayer(some) {
console.log(some);
}


function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 15);

//this

function show() {
    console.log(this);
}

show();

// this inside object method

const person = {
    name: "Raghu",
    greet: function () {
        console.log(this.name);
    }
};

person.greet();


//call


function greet() {
    console.log("Hello " + this.name);
}

const him = {
    name: "Raghu"
};

greet.call(him);


const person1 = {
    firstName: "Raghu",
    lastName: "Manyam"
};

function fullName() {
    return this.firstName + " " + this.lastName;
}

console.log(fullName.call(person1));


//arguments are passed one by one

const person3 = {
    firstName: "Raghu",
    lastName: "Manyam"
};

function introduce(city, country) {
    console.log(
        `I am ${this.firstName} ${this.lastName} from ${city}, ${country}`
    );
}

introduce.call(person3, "Hyderabad", "India");
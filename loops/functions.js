
function sayHello() {
  return "Hello World";
}

let greeting = sayHello();
console.log(greeting);


//Parameters are the names listed in the function definition.

//Arguments are the real values passed to, and received by the function.

function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 3);
console.log(result); 



function add(a,b) {
    return a + b;
}
let sum1 = add(5,5);
let sum2 = add(50,50);
console.log(sum1, sum2);

function findmax(...numbers){
    let max = - Infinity;

    for (let num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

console.log(findmax(4,5,6,7,8));

function greet() {
    return "hey"
}


//let str = greet();
//console.log(str);
/*
function greet() {
  return "hello raghu"  
}
let user = "raghu" ;
let str = greet(user);
console.log(str);
*/

function greet(user) {
  return `hello ${user}`;
}
let user = "raghu" ;
let str = greet(user);
console.log(str);


//expression


const numbers = [1, 2, 3, 4, 5, 6];
const square = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(square);


const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
})
console.log(cubes); 

 
const evennumbers  = numbers.map(function(element){
    return element % 2 === 0;
});
console.log(evennumbers);


const oddnumbers  = numbers.map(function(element){
    return element % 2 === 1;
});
console.log(oddnumbers);

/*

function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 3);
console.log(result); 
*/

let ad = (num1,num2) => num1 + num2;
let reslt = ad(5,6)

console.log(reslt);











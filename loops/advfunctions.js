const person1 = { name: "John" };
const person2 = { name: "Paul" };
const person3 = { name: "Ringo" };

function greet() {
  return "Hello " + this.name;
}

const greetJohn = greet.bind(person1);

console.log(greetJohn()); 



const person4 = {
    firstname: "Raghu",
    lastname: "Manyam",
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
}

const member = {
    firstname: "John",
    lastname: "Doe"
};

let fullName = person4.fullname.bind(member);

console.log(fullName());


const counter = (function () {
  let value = 10;
  return {
    increment() { value++; },
    get() { return value; }
  };
})();

counter.increment();
let x = counter.get();
console.log(x); 




let counter1 = 0;

function add() {
  counter1 += 1;
}

add();
add();
add();
console.log(counter1);


function add() {
  let counter = 0;
  function plus() {counter += 3;}
  plus();  
  return counter; 
}
console.log(add());
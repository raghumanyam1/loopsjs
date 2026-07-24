let fruits = ["apple","mango","orange"];

/*fruits.push("cocnut")
fruits.pop()
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);

fruits.pop()
fruits.shift()
fruits.unshift("kiwi")
*/

let numberoffruits = fruits.lenght;
let index = fruits.indexOf("mango");

console.log(index);


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));

console.log(pets.includes("at"));

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);

const array = ["one", "two", "three"];
console.log("array:", array);

const reversed = array.reverse();
console.log("reversed:", reversed);
/*try{
    console.log("hello");

}
catch(error){
    console.log(error);
}
finally{

    console.log("this always executes");
}
console.log("you have reached the end");
*/

try{
const dividend = window.prompt("enter a dividend");

const divisor = window.prompt("enter a divisor");

  if (divisor === 0) {
        throw new Error("Cannot divide by zero.");
  }

const result = dividend / divisor;
console.log(result);
}
catch(error){
    console.error(error);
}
console.log("you have reached the end");
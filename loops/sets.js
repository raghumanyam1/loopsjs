let nums = new Set ();

nums.add(3);
nums.add(4);
nums.add(5);
nums.add(3);
nums.add(Math.PI);
nums.add(Math.pow(5,2));
nums.add(Math.sqrt(225));
nums.add(Date());
nums.add("raju");
nums.add("rajesh");

console.log(nums.has(3));
console.log(nums.has(5));

console.log(nums.has(Math.sqrt(16)));




console.log(nums); 

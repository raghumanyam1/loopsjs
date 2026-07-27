const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
map.set("d", "raju");

console.log(map.get("a"));

map.set("a", 97);

console.log(map.get("a"));

console.log(map.size);

map.delete("b");

console.log(map.size);

console.log(map);
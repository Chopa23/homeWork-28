let user = "iVan";

console.log(user.replace("iVan", "Ivan"));
//.replace()
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.

let cost = "$120";

console.log(cost.substring(1));
//substring()
//The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

let fruits = ["Apple", "Apricot", "Orange"];

console.log(fruits);

fruits.pop();
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

console.log(fruits, 'You have deleted the "orange"');

fruits.shift();
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

console.log(fruits);

let deletedFruits = ["Orange", "Apple"];
console.log(deletedFruits);

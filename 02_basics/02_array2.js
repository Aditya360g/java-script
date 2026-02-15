const marvalheroes =   ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];

const dsHeroes = ["Superman", "Wonder Woman", "Flash", "Aquaman", "Green Lantern"];

const merge_mh_ds = marvalheroes.concat(dsHeroes);  // mrge 2 array use .concat method//

//console.log(merge_mh_ds);

const merge_mh_ds1 = [...marvalheroes,...dsHeroes]; // merge 2 array use spread operator ... //

//console.log(merge_mh_ds1);

const anotherarray = [1,2,3,[4,5,6],8,[7,8,9,[4,5,6]]];
const realarray = anotherarray.flat(2); // flat method use to convert multi dimensional array into single dimensional array //
//console.log(realarray);

// kisi bhi name ko array mai kese change kre //

console.log(Array.isArray("Aditya")); //  isArray method use to check whether the given value is array or not //
console.log(Array.from("Aditya"));   // from method use to convert string into array //

// use form function to create array //


// Array.of functiion

let score = 100
let score1 = 200
let score3 = 300

console.log(Array.of(score,score1,score3)); // of method use to create array from given values //



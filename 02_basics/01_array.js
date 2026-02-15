const myarr = [0,1,2,3,4,5]
//console.log(Array[0],Array[1],Array[2],Array[3],Array[4]);

const myarr2 = new Array(1,2,3,4,)
//console.log(myarr[1]);

// arreay methods

myarr.push(6)
//console.log(myarr)

myarr.pop()
//console.log(myarr);

myarr.unshift(9)
//console.log(myarr);

myarr.shift()
//console.log(myarr);

console.log("A",myarr);

myn1 = myarr.slice(1,3)
console.log(myn1)

console.log("B",myarr);

myn2 = myarr.splice(1,3)
console.log(myn1);

console.log(myn2);
console.log("c",myarr);
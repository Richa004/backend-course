// let n=10;

// for (let i=0; i<n; i++){
//     console.log("hello world!",i);

// }
// console.log("bye");

// // we can run this code on repl 
// // read evaluate print loop

// // mean ternimal in simple write node app.js



// process in node js it well include multiple object like release version and many more 
console.log(process.argv)

let arg =process.argv 
for(let i=2;i<arg.length; i++){
  console.log("hello to  ",arg[i])
}


const somevalue=require("./math")

somevalue.a;
somevalue.b;
let sum =somevalue.sum(2,4);

console.log(sum);



// import all directories from the fruites 

const fruits = require("./Fruits");
console.log(fruits);

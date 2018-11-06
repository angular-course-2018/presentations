// var, const, let

if (true) {
    var imEverywhere = [];
}

for (var i = 0; i < 10; i++) {
    imEverywhere.push(i);
}

console.log(`var: ${imEverywhere}`);
console.log(`i: ${i}`);

imEverywhere = [];

console.log(`new array: ${JSON.stringify(imEverywhere)}`);

// array spread
const arr = [1, 2];

const anotherArr = [...arr, 5, 6];

function sum(a, b, c, d) {
    return a + b + c + d;
}

console.log(`sum: ${sum(...anotherArr)}`);

//destructuring

let first;
let second;
let rest;

[first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7];

console.log(`first: ${first}`);
console.log(`second: ${second}`);
console.log(`rest: ${rest}`);

//symbols

const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(`type of: ${typeof symbol1}`);

console.log(`tostring: ${symbol3.toString()}`);

console.log(`equality: ${Symbol('foo') === Symbol('foo')}`);

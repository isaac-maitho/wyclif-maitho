//symbols are all unique
const symbolOne = Symbol();
const symbolTwo = Symbol();
console.log(symbolOne === symbolTwo);

const ninja = {};

ninja.age =23;
ninja.symbolOne = 'maitho';
ninja.symbolTwo = 'isaac';
console.log(ninja);
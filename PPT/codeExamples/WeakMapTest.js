global.gc();
console.log(process.memoryUsage());

let map = new Map();
let key = new Array(1000 * 1000);
map.set(key, 123);
global.gc();
console.log(process.memoryUsage()); 

key = null;
global.gc();
console.log(process.memoryUsage()); 

// node --expose-gc WeakMapTest.js
global.gc();
console.log(process.memoryUsage().heapUsed);

let map = new WeakMap();
let key = new Array(1000 * 1000);
map.set(key, 123);
global.gc();
console.log(process.memoryUsage().heapUsed); 

key = null;
global.gc();
console.log(process.memoryUsage().heapUsed); 

// node --expose-gc WeakMapTest.js
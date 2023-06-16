let obj1 = { a: true };
let obj2 = obj1;
obj1.a = 'yeah';
delete obj1

console.log('1', obj1)
console.log('2', obj2);

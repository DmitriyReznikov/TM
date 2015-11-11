var x = 1, y = "foo", z;

console.log("x:", x, typeof x);
console.log("y:", y, typeof y);
console.log()

z = x;
x = y;
y = z;

console.log("x:", x, typeof x);
console.log("y:", y, typeof y);

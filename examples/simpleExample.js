const interpolate = require(`../lib/interpolation`);

const input = [
    {x : 1, y : 1},
    {x : 2, y : 4},
    {x : 3, y : 9},
];

console.log(`given input:`);
input.forEach((point, i) => {console.log(`  point number ${i + 1}: [${point.x}, ${point.y}]`)});
console.log(`X of the point for whose we wanted to calculate the Y: 4`);

(async() => console.log(`result: `, await interpolate(input, 4)))(); //16


const interpolate = require(`../lib/interpolation`);

const input = [
    // {x : 1, y : 1},
    // {x : 2, y : 8},
    // {x : 3, y : 27},
    {y:14, x:15259535},
    {y:13, x:15259643},
    {y:23, x:15259751},
    {y:20, x:15259895},
    {y:21, x:15260075},
    {y:18, x:15263135},
    {y:19, x:15263459},
    {y:12, x:15263531},
    {y:11, x:15263603},
    {y:19, x:15263711},

];

console.log(`given input:`);
input.forEach((point, i) => {console.log(`  point number ${i + 1}: [${point.x}, ${point.y}]`)});
console.log(`X of the point for whose we wanted to calculate the Y: 4`);

(async() => console.log(`result: `, await interpolate(input, 15263653)))();//58 -> Runge's phenomenon


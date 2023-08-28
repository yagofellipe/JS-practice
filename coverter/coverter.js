let num;
let fahr;
let kel; 

num = prompt("digite");
num = parseFloat(num);
fahr = (num * 9/5) + 32;
kel = num + 273,15;

console.log("Em fahr: %d", fahr);
console.log("Em kel: %d", kel);
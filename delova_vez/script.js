let x = prompt("Zadej x");
let y = prompt("Zadej y");
let range = Math.sqrt(x * x + y * y);

if (range <= 5) 
document.write("Bod ["  + x + "," + y + "] je v dostrelu " );
else 
document.write("Bod ["  + x + "," + y + "] neni v dostrelu");
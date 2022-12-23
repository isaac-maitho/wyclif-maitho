let seatNumber=Math.floor(Math.random()*101);
console.log(seatNumber);
let age=19;
let timePaid=true;
if (age>18 && timePaid){seatNumber/=2};
if (age>18 && timePaid){console.log(`Your seat is ${seatNumber}`);}
else if (age>18 && !timePaid){console.log(`Your seat is ${seatNumber}`);}
else console.log('welcome');
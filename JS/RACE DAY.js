let raceNumber = Math.floor(Math.random() * 1000);
const early= true;
let age=20;
if (early && age>18) {raceNumber+=1000};
if (early && age>18) {console.log(`your race will start at 9.30am and your number is ${raceNumber}`);}
else if(!early && age>18) {console.log(`Your race will start at 11.00am and your number is ${raceNumber}`);}
else if(age<18){console.log(`Race will start at 12.30 and your number is ${raceNumber}`);}
else {console.log('visit registration desk kindly');}

let userName='Isaac'
userName ?console.log(`Hello ${userName}`):console.log('Hello!');
let userQuestion='When will I buy an Iphone?';
console.log(`${userName} asked ${userQuestion}`);
let randomNumber=Math.floor(Math.random()*5);
console.log(randomNumber);
let eightBall='';
switch (randomNumber){case 0: eightBall='Very soon';break;
case 1: eightBall='Probably next month';break;
case 2: eightBall='When you receive your first big salary';break;
case 3: eightBall='Next year';break;
case 4: eightBall='in the year 2023';break;
case 5: eightBall='I do not know';break;

}
console.log(`I predict ${eightBall}`);
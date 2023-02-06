//new timestamp
const before = new Date('February 6 2013 7:30:59')
const now = new Date();
//console.log(now.getTime(), before.getTime());
const diff = now.getTime() - before.getTime();

const minutes = Math.round(diff/1000/60);
const days = Math.round(minutes/60/24);
console.log(diff, minutes, days);
console.log(`The blog was created ${days} days ago`);
//converting timestamps into date objects

const timestamp = 1360125059000;
console.log(new Date(timestamp));
const today = new Date();
console.log(dateFns.isToday(today));

//formatting 
console.log(dateFns.format(today,'YYYY'));
console.log(dateFns.format(today,'MMMM'));
console.log(dateFns.format(today,'dddd'));
console.log(dateFns.format(today,'Do dddd MMMM YYYY'));

//comparing dates
const before = new Date('January 1 2023 12:00:00');
console.log(dateFns.distanceInWords(today,before,{addSuffix:true}));

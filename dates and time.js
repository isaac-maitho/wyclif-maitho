const now = new Date();
console.log(now);
console.log(typeof now);

//year, month, date
console.log('Year', now.getFullYear());
console.log('month', now.getMonth());
console.log('date', now.getDate());
console.log('Hours', now.getHours());
console.log('Minutes', now.getMinutes());
console.log('seconds', now.getSeconds());

//timestamp
console.log('Timestamp:',now.getTime());

//Date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


//storing data in local storage
localStorage.setItem('name','Maitho');
localStorage.setItem('age', 23)

//getting data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

//update data

localStorage.name='Njora';
localStorage.age= 18;
localStorage.setItem('id', 36913424);
let cardNo = localStorage.getItem('id');

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age, cardNo);
// deleting items from local storage
//localStorage.removeItem('name');
localStorage.clear();
name =localStorage.getItem('name');
age =localStorage.getItem('age')
cardNo=localStorage.getItem('cardNo');
console.log(name, cardNo, age);

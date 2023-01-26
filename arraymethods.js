//forEach()
const cars = ['benzo', 'BMW', 'subaru', 'Honda'];
const bestcars = cars.forEach(car=>{
    console.log(`I want to drive a ${car} one day`);
});
//filter() not destructive
const users =[
    {name: 'Isaac', premium: true},
    {name: 'Dennis', premium: false},
    {name: 'Joe', premium: true},
    {name: 'Estar', premium: false}
];
const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers,);
//map()
const products = [
    {name:'sugar', price:100},
    {name:'cooking oil', price:200},
    {name:'shoe', price:400},
    {name:'bread', price:60}
];
const discountedProducts = products.map((product =>{
    if (product.price>199)
    return {name:product.name, price:product.price /2};
    else{
        return(product.name);
    }
}))
console.log(discountedProducts);
//reduce()
const scores= [
    {player: 'rashford', score:100},
    {player: 'martinez', score:600},
    {player: 'rashford', score:75},
    {player: 'sancho', score:60}
];
const rashfordTotal = scores.reduce((acc, curr)=>{
    if(curr.player === 'rashford'){
        acc += curr.score;
    }
    return acc;
}, 0);
console.log(rashfordTotal);
//find()
const numbers = [10,50,70,120,100,45];
const newNumbers = numbers.find(number=> number>75
);
console.log(newNumbers);
//sort()
const players= [
    {player: 'rashford', score:100},
    {player: 'martinez', score:600},
    {player: 'rashford', score:75},
    {player: 'sancho', score:60}
];
const highplayers = players.sort((a,b)=>{
    return(a.score-b.score);
})
console.log(highplayers);
//chaining methods
const goods = [
    {name:'sugar', price:100},
    {name:'cooking oil', price:200},
    {name:'shoe', price:400},
    {name:'bread', price:60}
];
const promos = goods
  .filter((good)=>good.price>199)
  .map((good)=> `the ${good.name} is ${good.price/2} shillings`);
  console.log(promos);

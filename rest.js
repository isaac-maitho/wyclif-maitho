//rest parameter
const double = (...nums)=>{
    return nums.map( nums => nums*2)
}
const result = double(4,5,7,8,5,6,4,5,3)
console.log(result);

//spread syntax(arrays)
const people = ['isaac', 'wyclif', 'njora']
const members =['maitho',...people]
console.log(members);

//spread syntax (objects)

const ninja = {name: 'casemiro', age: 29, work: 'player'}
const cloneNinja = {...ninja, location: 'Manchester'};
console.log(cloneNinja);
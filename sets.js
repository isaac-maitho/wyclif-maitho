//sets
//only allow unique values
const players =['casemiro', 'rashford', 'fred', 'casemiro']
const playersSet = new Set(players);
console.log(playersSet);

//const firstTeam = [...playersSet];
//console.log(firstTeam);

const firstTeam =[... new Set(players)];
console.log(firstTeam);


//adding elements to a set
const scores = new Set();
scores.add(20);
scores.add(25).add(55);
//delete elements
scores.delete(20);
console.log(scores, scores.size);
console.log(scores.has(30));

//forEach
const lineup = new Set([
    {name:'antony', age:22},
    {name:'casemiro', age:29},
    {name:'bruno', age: 25}
]);
lineup.forEach(lineup =>{
    console.log(lineup.name, lineup.age);
});
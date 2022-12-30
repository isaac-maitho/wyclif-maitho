//.forEach()
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`)
})
//.map()
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal =>{
  return animal[0]
})
console.log(secretMessage.join(''));
//.filter()
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomnumber =>{
  return randomnumber < 250;
});
console.log(smallNumbers);
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  return favoriteWord.length > 7;
})
console.log(longFavoriteWords);
//.findIndex()
const wildAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = wildAnimals.findIndex(animal => {
  return animal === 'elephant';
})
console.log(foundAnimal);
const startsWithS = wildAnimals.findIndex(animal => {
  return animal[0] === 's';
})
console.log(startsWithS);
//.reduce()
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) =>{
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator  + currentValue;
})
console.log(newSum);
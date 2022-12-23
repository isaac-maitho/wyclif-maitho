const kelvin = 293; //variable name is kelvin and I have assigned it value 293.
const celsius = kelvin - 273; //converted kelvin to celsius
let fahrenheit = celsius * (9/5) + 32; //coverted to fahrenheit
fahrenheit = Math.floor(fahrenheit); //converted it to a whole no
console.log(`The temperature is ${fahrenheit}.`);
const rappers = [
    {Tupac: 'West-side'},
    {BIG: 'East-side'},
    {Fifty: 'If i was your best friend'}
];
//console.log(JSON.stringify(rappers));

localStorage.setItem('rappers',JSON.stringify(rappers));
const stored = localStorage.getItem('rappers');
console .log(JSON.parse(stored));



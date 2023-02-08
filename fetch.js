//fetch api
/*fetch('todo2.json').then(response =>{
    console.log('resolved', response)
    return response.json();
}) .then(data =>{
    console.log(data);
}).catch(err =>{
    console.log('rejected', err);
});*/

//async & await
const getTodos = async() =>{

    const response = await fetch('todo3.json');
    //console.log(response.status);
    if (response.status !==200){
      throw new Error('could not find the data')};
    const data = await response.json();
    return data;
};

console.log(1);
console.log(2);
getTodos().then(data => console.log(data))
.catch(err => console.log('rejected:', err.message));
console.log(3);
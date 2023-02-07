// promise example
const getTodos = (resource) =>{

    return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest()
    request.addEventListener('readystatechange',() => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText)
        resolve(data);}
        else if(request.readyState === 4){
            reject('server error');
        };
});

request.open('GET', resource);
request.send();
    });
    
};
//promise chaning
getTodos('todo.json').then(data =>{
    console.log('promise 1:', data);
    return getTodos('todo2.json')
    .then(data =>{
        console.log('promise 2:', data)
    
    return getTodos('todo3.json')
    .then(data =>{
        console.log('promise 3:', data)
    });
});
}).catch(err =>{
    console.log(err);
});
/*const getSomething = () =>{

    return new Promise((resolve, reject) =>{
        //resolve('some data');
        reject('error')
    });
};
//getSomething().then(data =>{
  //  console.log(data);
//}, (err)=>{
 //   console.log(err);
//});

//shorter way
getSomething().then(data =>{
    console.log('some data');
}) .catch(err =>{
    console.log('some error')
})*/
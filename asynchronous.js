/*console.log(1);
console.log(2);

setTimeout(() =>{
    console.log('I will caall you back')
},3000)
console.log(3);
console.log(4);
*/

//http request
const request = new XMLHttpRequest()
request.addEventListener('readystatechange',() => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        console.log(request, request.responseText)}
        else if(request.readyState === 4){
            console.log('server not found')
        };
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
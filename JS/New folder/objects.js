//object literals
//let user={
 //   name:'Isaac',
   // age:23,
    //email:'isaacmaitho@gmail.com',
    //location:'Newyork'
//};
//console.log(user);
//console.log(user.age);
//Adding methods
let user={
    name:'Isaac',
    age:23,
    email:'isaacmaitho@gmail.com',
    location:'Newyork',
    login:function(){
        console.log('The user logged in')
    }
};
user.login();
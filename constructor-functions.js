function User(username, email){
    this.username = username;
    this.email = email;
    
}
function Admin(username, email, title){
    User.call(this, username,email)
    this.title = title;

}
User.prototype.logIn = function(){
    console.log(`${this.username} logged in`)
}
User.prototype.logOut = function(){
    console.log(`${this.username} logged out`)
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(){
    //delete user
}
let userOne = new User('isaac', 'isaac@gmail.com')
let userTwo = new User('njora', 'njora@gmail.com')
let userThree = new Admin('maitho', 'maitho@gmail.com', 'Capitan')
console.log(userOne, userTwo, userThree);
userOne.logIn();
userThree.logOut();
class User{
    constructor(username, email){
        //properties
        this.username= username;
        this.email= email;
        this.result =0;
    }
    logIn(){
        console.log(`${this.username} just logged in`)
        return this;
    }
    logOut(){
        console.log(`${this.username} just logged out`)
        return this;
    }
    results(){
        this.result +=1;
        console.log(`${this.username} scored ${this.result}`)
        return this;
    }
    
};
//class inheritance
class Admin extends User{
    constructor(username, email, title){
    super(username, email)// super key helps to inherit the user class propeties
    this.title = title;
}
    deleteUser(user){
        users = users.filter(u => u.username !==user.username);
    }
}
//the new keyword
//1. creates a new empty object{}
//2. it binds the value of this to the new object
//3. it call the constructor function to build the object

const userOne = new User('maitho', 'isaacmaitho14@gmail.com');
const userTwo = new User('wyclif', 'wyclif@gmail.com');
const userThree = new Admin('Isaac','isaanjora@gmail.com', 'engineer');
let users =[userOne, userTwo, userThree];
//console.log(userOne);
//console.log(userTwo);
//method chaining using return this
userOne.logIn().results().results().logOut();
userTwo.logOut();
userThree.deleteUser(userTwo);
console.log(users);
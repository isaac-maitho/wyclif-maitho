//default exports
const users = [
    {name: 'isaac', premium: false},
    {name: 'maitho', premium: true},
    {name: 'casemiro', premium: false},
    {name: 'antony', premium: true}
] ;

const getPremUsers = (users) =>{
    return users.filter(user => user = user.premium);
    };

//export default users;

//alternative way of exporting

export { getPremUsers, users as default};
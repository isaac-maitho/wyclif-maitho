/* short circuit evaluation
let username="Isaac";
let defaultName=username || 'you do not have an account';
console.log(`Hi, ${defaultName}`);
let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil=tool || 'pen'
console.log(`The ${writingUtensil} is mightier than the sword.`);

let username='';
let defaultName;
if (username){defaultName=username;}else{defaultName='you do not have an account';}
console.log(defaultName);
*/
let login ='Mbappe';
let username=login||'sign up';
console.log(`${username} is your password`);

import { addTitle, styleBody, contact} from './dom'
import users, {getPremUsers} from './data';

console.log('index file');
console.log(contact);
const premUsers = getPremUsers(users);

styleBody();
addTitle('test');
console.log(users, premUsers);
console.log('rashford');
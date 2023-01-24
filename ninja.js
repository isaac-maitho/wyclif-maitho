const form = document.querySelector('.sign-up');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z]{6,12}$/
const username =document.querySelector('#username')
//const username = document.querySelector('#username');
form.addEventListener('submit', e => {
e.preventDefault(); 
//console.log(form.username.value);

const username= form.username.value;

//let result = pattern.test(username);
//console.log(result);
//result ? console.log('regEx accepted'): console.log('regEx denied')
if (pattern.test(username)){
    feedback.textContent = 'valid username';
}
else {
    feedback.textContent = 'invalid username'
}
;
// live feedback
form.username.addEventListener('keyup', e=>{
    if (pattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    }else{
        form.username.setAttribute('class', 'error');
}
    console.log(e.target.value)
});
});
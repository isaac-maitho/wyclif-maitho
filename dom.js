console.log('from dom');

const body = document.querySelector('body');

const styleBody = () =>{
    body.style.background = 'blue';
}

const addTitle = (text) =>{
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

//styleBody()
//addTitle('Hello World');
const contact = 'isaacmaitho14@gmail.com';

export {styleBody, addTitle, contact };
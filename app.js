const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm =document.querySelector('.new-name');
const updateMssg =document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

newChatForm.addEventListener('submit', e =>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    firstChat.addChat(message)
    .then(()=>newChatForm.reset())
    .catch(err => console.log(err))
})

//update username
newNameForm.addEventListener('submit', e =>{
    e.preventDefault();
    //updating the name via the chatroom
    const newName = newNameForm.name.value.trim();
    firstChat.updateName(newName);
    //reset the form
    newNameForm.reset();
    //show then hide the update message
    updateMssg.innerText = `Your name was updated to ${newName}`
    setTimeout(() => updateMssg.innerText = '', 3000);

});
//update rooms
rooms.addEventListener('click', e =>{
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        firstChat.updateRoom(e.target.getAttribute('id'))
        firstChat.getChats(chat => chatUI.render(chat))
    }
})
//check local storage for a name
const username = localStorage.username ? localStorage.username : 'no-username'
//class instances
const chatUI = new ChatUI(chatList);
const firstChat = new Chatroom(username,'general');

//get chats and render
firstChat.getChats(data =>chatUI.render(data));
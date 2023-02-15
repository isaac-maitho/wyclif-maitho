//add new chat documents
//setting a real-time listener
//updating the name
//updating the room


class Chatroom{
    constructor(username, room){
        this.username = username;
        this.room = room;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message){
        //format a chat object
        const now = new Date();
        const chat = {
            message,
            username:this.username,
            room:this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        const response = await this.chats.add(chat);
        return response;
    }
    getChats(callback){
        //where method takes three parameters
        //helps us to get doc in a certain collection where a certain condition is true
        this.unsub = this.chats
        .where('room', '==', this.room)
        //ordering them by a certain order
        .orderBy('created_at')
        .onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type === 'added'){
                    //update ui
                    callback(change.doc.data());
                }
            })
        })
    }
    updateName(username){
        this.username = username;
    }
    updateRoom(room){
        this.room = room;
        console.log('room updated')
        if(this.unsub){
        this.unsub();
        }
    }
}


/*setTimeout(()=>{
    firstChat.updateRoom('music')
    firstChat.getChats(data =>{
    console.log(data);
})
    firstChat.updateName('wyclif')
    firstChat.addChat('if you dont know now you know')
},3000)*/

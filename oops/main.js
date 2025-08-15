// Factory Function
let chatWindow = document.querySelector('.chatWindow');
function UserDetails(name, email, color, type) {
    this.name = name;
    this.email = email;
    this.color = color;
    this.type = type; 
}

UserDetails.prototype.showInfo = function() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
}

UserDetails.prototype.write = function(message) {
    const chat = document.createElement('p');
    if(this.type == 'sender') {
        chat.className = `text-start bg-gray-200 w-[max-content] px-2 text-black rounded`;
    }
    else chat.className = `text-end bg-green-200 w-[max-content] px-2 text-black rounded`;
    chat.textContent = message;
    chatWindow.append(chat);
}

const user1 = new UserDetails('Akshay G', 'test@mail.com', 'gray', 'receiver');
const user2 = new UserDetails('Test User 02', 'test2@mail.com', 'green', 'sender');


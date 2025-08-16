const chatWindow = document.querySelector('.chatWindow');
class UserDetails {
    constructor(name, email, color, type) {
        this.name = name;
        this.email = email;
        this.color = color;
        this.type = type;
        this.role = 'user';
    }

    showInfo() {
        console.log(`Name: ${this.name} || Email: ${this.email} || Role: ${this.role}`);
    }

    write(message) {
        const chat = document.createElement('p');
        if(this.type == 'sender') {
            chat.className = `text-start bg-gray-200 w-[max-content] px-2 text-black rounded`;
        }
        else {
            chat.className = `text-end bg-green-200 w-[max-content] px-2 text-black rounded`;
        }
        chat.textContent = message;
        chatWindow.append(chat);
    }
}

class AdminDetails extends UserDetails {
    constructor(name, email, color, type) {
        super(name, email, color, type)
        this.role = 'admin'
    }

    removeChats() {
        chatWindow.innerHTML = '';
    }
}
let user1 = new UserDetails('Test User 01', 'test@mail.com', 'gray', 'sender');
let user2 = new UserDetails('Test User 02', 'test2@mail.com', 'green', 'receiver');
let admin1 = new AdminDetails('Akshay Giri', 'admin@mail.com', 'blue', 'sender');


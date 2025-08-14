const userForm = document.querySelector('#userForm');
const userList = document.querySelector('#userList');

const userManager = {
    users: [],
    init: function() {
        console.log(this)
        userForm.addEventListener('submit', this.submitForm.bind(this))        
    },
    submitForm: function(e) {
        e.preventDefault()
        const userData = new FormData(userForm);
        const user = {
            name: userData.get('name'),
            age: userData.get('age'),
            email: userData.get('email'),
        }
        this.addUser(user);
        userForm.reset()
    },
    addUser: function(user) {
        this.users.push(user);
        this.showUser();
    },
    removeUser: function(id) {
        this.users.splice(id, 1);
        console.log(`User Removed`, id);
        this.showUser()
    },
    showUser: function() {
        userList.innerHTML = '';
        this.users.map((user, index) => {
            const userCard = document.createElement('div');
            userCard.id=`${index}`
            userCard.className = 'bg-gray-800 p-4 rounded-lg shadow border border-gray-700 space-y-2';
            userCard.innerHTML = `
                <h3 class="text-lg font-bold">${user.name}</h3>
                <p class="text-gray-400">Age: ${user.age}</p>
                <p class="text-gray-500">${user.email}</p>
                <button onclick="userManager.removeUser(${index})" class="bg-red-500 text-white rounded p-2">Remove</button>
            `
            userList.appendChild(userCard);
        });
    }
}

userManager.init()

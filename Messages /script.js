// components/messages/messages.js
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const messagesList = document.getElementById('messagesList');
    const messageForm = document.getElementById('messageForm');
    
    document.getElementById('usernameDisplay').textContent = `Olá, ${username}`;
    
    // Carregar mensagens
    loadMessages();
    
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value;
        if (message.trim() !== '') {
            sendMessage(username, message);
            messageInput.value = '';
            loadMessages();
        }
    });
});

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messagesList.innerHTML = '';
    messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${msg.sender}: ${msg.content}`;
        messagesList.appendChild(messageElement);
    });
}

function sendMessage(sender, content) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const newMessage = { sender, content };
    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));
}

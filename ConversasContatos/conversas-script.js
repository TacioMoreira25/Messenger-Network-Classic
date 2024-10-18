let currentContact = null;

// Abre o chat para o contato selecionado
function openChat(contactName) {
    currentContact = contactName;
    document.getElementById('chat-header').innerText = contactName;
    document.getElementById('status').innerText = "Online";
    document.getElementById('chat-window').innerHTML = `<p>Conversa com ${contactName} iniciada.</p>`;
}

// Envia mensagem para o contato atual
function sendMessage() {
    const input = document.getElementById('message-input');
    const messageText = input.value.trim();
    
    if (messageText && currentContact) {
        const chatWindow = document.getElementById('chat-window');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.innerHTML = `<p><strong>Você:</strong> ${messageText}</p>`;
        
        chatWindow.appendChild(newMessage);
        input.value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll automático para última mensagem
    }
}

// Função para abrir chamada de áudio
function audioCall() {
    if (currentContact) {
        alert(`Iniciando chamada de áudio com ${currentContact}...`);
    }
}

// Função para abrir chamada de vídeo
function videoCall() {
    if (currentContact) {
        alert(`Iniciando chamada de vídeo com ${currentContact}...`);
    }
}

// Exibir painel de emojis (Simulação simples)
document.getElementById('emoji-btn').addEventListener('click', () => {
    const emoji = prompt("Selecione um emoji: 😊, 😁, 😎, 😢");
    if (emoji && currentContact) {
        const chatWindow = document.getElementById('chat-window');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.innerHTML = `<p><strong>Você:</strong> ${emoji}</p>`;
        
        chatWindow.appendChild(newMessage);
        document.getElementById('chat-window').scrollTop = chatWindow.scrollHeight;
    }
});

// Botão para adicionar novo grupo (simulação)
document.getElementById('new-group-btn').addEventListener('click', () => {
    const groupName = prompt("Nome do Grupo:");
    if (groupName) {
        const groupList = document.createElement('li');
        groupList.innerHTML = `${groupName}`;
        document.getElementById('favorite-list').appendChild(groupList);
    }
});

// Adicionar novo contato
document.getElementById('add-contact-btn').addEventListener('click', () => {
    const newContact = prompt("Nome do contato:");
    if (newContact) {
        const contactList = document.createElement('li');
        contactList.setAttribute('onclick', `openChat('${newContact}')`);
        contactList.innerText = newContact;
        document.getElementById('contacts-list').appendChild(contactList);
    }
});

// Armazena as mensagens do chat
let chatMessages = [];
let contacts = [
    { name: "Erika Berg", img: "assets/erika.jpg" },
    { name: "Anna Davies", img: "assets/anna.jpg" }
];

// Função para enviar a mensagem e exibi-la no chat
function sendMessage() {
    let message = document.getElementById("message-input").value;

    if (message) {
        // Adiciona a mensagem ao array de mensagens
        chatMessages.push({
            type: 'sent',  // Definimos o tipo de mensagem enviada
            content: message,
            timestamp: new Date().toLocaleTimeString()
        });

        // Exibe a mensagem no chat
        updateChatWindow();
        document.getElementById("message-input").value = '';  // Limpa o campo de entrada
    }
}

// Atualiza a janela de chat para exibir as mensagens
function updateChatWindow() {
    const chatWindow = document.getElementById("chat-window");
    chatWindow.innerHTML = '';  // Limpa o chat antes de adicionar as mensagens

    chatMessages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${msg.type === 'sent' ? 'sent-message' : 'received-message'}`;
        messageElement.innerHTML = `
            <span>${msg.content}</span>
            <span class="timestamp">${msg.timestamp}</span>
        `;
        chatWindow.appendChild(messageElement);
    });

    // Rola para baixo na janela de chat
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Função para abrir o chat com um contato ou grupo
function openChat(contactName) {
    document.getElementById("chat-header").textContent = contactName;
    document.getElementById("status").textContent = 'Online';

    // Define a imagem de perfil do contato
    const contactProfilePic = document.getElementById("contact-profile-pic");
    const contact = contacts.find(c => c.name === contactName);

    // Define a imagem de perfil com base no contato
    if (contact) {
        contactProfilePic.src = contact.img;  // Usamos a imagem do contato
    } else {
        contactProfilePic.src = "assets/default-contact.jpg"; // Imagem padrão
    }

    chatMessages = [];  // Reseta as mensagens ao abrir um novo chat
    updateChatWindow();
}

// Funções de chamadas
function audioCall() {
    alert("Iniciando chamada de áudio...");
}

function startVideoCall() {
    alert("Iniciando chamada de vídeo...");
}

// Função para criar um novo grupo
function createGroup() {
    const groupName = prompt("Digite o nome do novo grupo:");
    if (groupName) {
        const groupList = document.getElementById("group-list");
        const newGroupItem = document.createElement("li");
        newGroupItem.textContent = groupName;
        groupList.appendChild(newGroupItem);
        alert(`Grupo '${groupName}' criado!`);
    }
}

// Função para adicionar um novo contato
function addContact() {
    const contactName = prompt("Digite o nome do novo contato:");
    const contactImg = prompt("Digite o caminho da imagem do contato:");
    if (contactName && contactImg) {
        contacts.push({ name: contactName, img: contactImg });
        const contactsList = document.getElementById("contacts-list");
        const newContactItem = document.createElement("li");
        newContactItem.textContent = contactName;
        newContactItem.onclick = () => openChat(contactName);
        
        // Adiciona a imagem do contato
        const imgElement = document.createElement("img");
        imgElement.src = contactImg;
        imgElement.className = "profile-pic-mini";
        newContactItem.prepend(imgElement);
        
        contactsList.appendChild(newContactItem);
        alert(`Contato '${contactName}' adicionado!`);
    }
}

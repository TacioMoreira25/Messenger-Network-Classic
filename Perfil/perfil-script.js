// Função para alternar a exibição da janela de opções de perfil
function toggleProfileOptions() {
    const profileOptions = document.getElementById('profileOptions');
    profileOptions.classList.toggle('hidden');
}

// Função para alterar a foto de perfil
function changeProfilePicture(imagePath) {
    const profilePic = document.getElementById('profilePic');
    profilePic.src = imagePath;
    localStorage.setItem('profilePic', imagePath);
    document.getElementById('profileOptions').classList.add('hidden');
}

// Função para salvar o status no LocalStorage
function saveProfileStatus() {
    const profileStatus = document.getElementById('status').value;
    localStorage.setItem('profileStatus', profileStatus);
}

// Carregar as informações do perfil (nome, status, foto)
window.onload = () => {
    const savedPic = localStorage.getItem('profilePic');
    if (savedPic) {
        document.getElementById('profilePic').src = savedPic;
    }

    const savedStatus = localStorage.getItem('profileStatus');
    if (savedStatus) {
        document.getElementById('status').value = savedStatus;
    }
};

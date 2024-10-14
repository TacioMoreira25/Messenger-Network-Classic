function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    const autoLogin = document.getElementById('auto-login').checked;

    // lugar q pode adicionar a logica de autenticação
    alert(`Email: ${email}\nSenha: ${password}\nLembrar: ${remember}\nEntrar automaticamente: ${autoLogin}`);
}

function cancel() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('remember').checked = false;
    document.getElementById('auto-login').checked = false;
}

class LoginSystem {
    constructor() {
        this.users = [];
        console.log("Sistema de login iniciado");
    }
    
    login(username, password) {
        console.log(`Intentando login para: ${username}`);
        // TODO: implementar validación real
        return true;
    }
    
    logout() {
        console.log("Usuario desconectado");
    }
}

module.exports = LoginSystem;

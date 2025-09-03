class LoginSystem {
    constructor() {
        this.users = [];
        console.log("Sistema de login iniciado");
    }
    
    login(username, password) {
        // HOTFIX: validar parámetros para evitar crash
        if (!username || !password) {
            console.log("Error: username y password son requeridos");
            return false;
        }
        console.log(`Intentando login para: ${username}`);
        // TODO: implementar validación real
        return true;
    }
    
    logout() {
        console.log("Usuario desconectado");
    }
}

module.exports = LoginSystem;

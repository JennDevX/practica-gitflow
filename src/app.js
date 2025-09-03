const LoginSystem = require("./login");
const Dashboard = require("./dashboard");

console.log("Aplicación iniciada - versión 1.1.0");
console.log("Sistema funcionando correctamente");

// Inicializar sistema de login
const auth = new LoginSystem();
console.log("Funcionalidad de login cargada");

// Inicializar dashboard
const userDashboard = new Dashboard("admin");
userDashboard.addWidget("Stats Widget");
userDashboard.addWidget("User Info Widget");
userDashboard.showStats();

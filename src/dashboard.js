class Dashboard {
    constructor(user) {
        this.user = user;
        this.widgets = [];
        console.log(`Dashboard cargado para: ${user}`);
    }
    
    addWidget(widget) {
        this.widgets.push(widget);
        console.log(`Widget agregado: ${widget}`);
    }
    
    showStats() {
        console.log("=== Dashboard Stats ===");
        console.log(`Usuario: ${this.user}`);
        console.log(`Widgets activos: ${this.widgets.length}`);
    }
}

module.exports = Dashboard;

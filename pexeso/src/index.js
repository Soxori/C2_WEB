// Executes this arrow function after everything loaded up
window.onload = () => {
    import("./presentation/pexeso-gui.js")
        .then((module) => {
            const PexesoGUI = module.PexesoGUI;
            const component = document.getElementById("game");

            const game = new PexesoGUI(component, 10, 10, 5);
            game.draw();
        });
};

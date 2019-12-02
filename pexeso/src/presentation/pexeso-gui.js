import {Pexeso} from "../domain/Pexeso.js";
import {Field} from "../domain/models/Field.js";

export class PexesoGUI {

    /**
     * @param {HTMLElement} container
     * @param {number} rows
     * @param {number} columns
     */
    constructor(container, rows, columns) {
        this.container = container;
        this.game = new Pexeso(rows, columns);
    }

    /**
     * Generates the UI grid
     */
    draw() {
        this._clear();

        const container = document.createElement('div');
        const header = document.createElement('h2');
        const smallHeader  = document.createElement('h3');
        
        if(this.game.didWin())
            header.innerHTML = `Pexeso (<span class="green">Won</span>)`;
        else if(this.game.didLoose())
            header.innerHTML = `Pexeso (<span class="red">Lost</span>)`;
        else
            header.innerHTML = `Pexeso (<span class="orange">In Progress</span>)`;
        
        const table = document.createElement('table');

        for (let i = 0; i < this.game.rows; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < this.game.columns; j++) {
                const cell = document.createElement('td');
                cell.innerHTML = this._getIcon(i, j);
                cell.addEventListener('click', () => {
                    this.game.reveal(j, i);
                    this.draw();
                });
                cell.addEventListener('contextmenu', (e) => {
                    this.game.toggleFieldState(j, i);
                    this.draw();
                    e.preventDefault()
                });

                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        this.container.appendChild(header);
        this.container.appendChild(smallHeader);
        this.container.appendChild(table);
    }

    /**
     * Clears the game "canvas"
     * @private
     */
    _clear() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }

    /**
     * Selects the correct icon/number and returns it
     * @param {number} x
     * @param {number} y
     * @return {string}
     * @private
     */
    _getIcon(x, y) {
        switch (this.game.getField(y, x).state) {
            case 0:
                return '<div class="hidden">&nbsp;</div>';  
            case 1:
                return `.  

        }
    }
}



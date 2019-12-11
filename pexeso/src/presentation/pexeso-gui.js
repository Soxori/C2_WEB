import {Pexeso} from "../domain/Pexeso.js";
import {field} from "../domain/models/field.js";

export class PexesoGUI {

    /**
     * @param {HTMLElement} container
     * @param {number} rows
     * @param {number} columns
     * @param {number | null} bombs
     */
    constructor(container, rows, columns, bombs = null) {
        this.container = container;
        this.game = new Pexeso
    (rows, columns, bombs);
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
            header.innerHTML = `Pexeso
         (<span class="green">Won</span>)`;
        else
            header.innerHTML = `Pexeso
         (<span class="orange">In Progress</span>)`;

        const table = document.createElement('table');

        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 6; j++) {
                const cell = document.createElement('td');
                cell.innerHTML = this._getIcon(i, j);
                cell.addEventListener('click', () => {
                    this.game.reveal(j, i);
                    this.draw();
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
        if (this.game.isGameOver && this.game.isBombOnPosition(y, x))
            return "";
        else
            switch (this.game.getField(x, y)) {
                case field.hidden:
                    return '<div class="hidden">&nbsp;</div>';
                case field.visible:
                    const amount = this.game.getAmountOfSurroundingBombs(x, y); //Return number
                    return `
                        <div class="empty">
                            ${amount === 0 ? ' ' : amount}
                        </div>
                    `;
            }
    }
}





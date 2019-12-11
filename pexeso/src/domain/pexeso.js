import {field} from "./models/field.js";

export class Pexeso {

    /**
     * @param {number} rows
     * @param {number} columns
     * @param {number | null} bombs
     */
    constructor(rows, columns, bombs) {

        this.rows = rows;
        this.columns = columns;

        this.isGameOver = false;


        this.array = [];

        for(let i = 0; i < 6; i++) {
            let k = [];
            for(let j = 0; j < 6; j++) {
                k.push(field.hidden)
            }
            this.array.push(k);
        }

        this.number = [];

        for(let l = 0; l < 500; l++) {
            let x  = Math.floor(Math.random() * this.columns);
            
            let y = Math.floor(Math.random() * this.rows);

            let coordinate = new Coordinate(x,y);

            this.number.push(coordinate);
        }
        console.log(this.number)
    }

    /**
     * TODO: IMPLEMENT THIS
     * Calculate how many bombs should be on the field and return it.
     * The calculation should Depend on the size of the field.
     * @private
     * @return {number} amount of bombs
     */
    _calculateDefaultBombs() {
        return 0;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns the current state of the field.
     * Fields can be: hidden, visible, flagged or question marked.
     * @param {number} x
     * @param {number} y
     * @return {field}
     */
    getField(x, y) {
        return this.array[x][y];
    }
    

    /**
     * TODO: IMPLEMENT THIS
     * Returns how many bombs are around the field
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    getAmountOfSurroundingBombs(x, y) {
        return 0;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns true there is a bomb on the position
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isBombOnPosition(x, y) {
        for(let i = 0; i < this.number.length; i++) {
            if(this.number[i].x === x && this.number[i].y === y) 
                return true;
        }     
        return false;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Reveals the field and all empty connected fields around it.
     * Or stops the game if clicked on a position, where a bomb is located.
     * @param {number} x
     * @param {number} y
     */
    reveal(x, y) {

        if(this.isBombOnPosition(x, y) === false)
            this.array[y][x] = field.visible;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns if the user already won
     * @returns {boolean}
     */
    didWin() {
        if(this.isGameOver === true)
            return false;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns if the user clicked a bomb and therefore lost.
     * @returns {boolean}
     */
    didLoose() {
        if(this.isGameOver === true)
            return true;
    }

}

    class Coordinate {
        constructor(x,y) {
            this.x = x;
            this.y = y;
        }
    }

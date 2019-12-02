import {Field} from "./models/field.js";
import {Pair} from "./Pair.js";

export class Pexeso {

    /**
     * @param {number} rows
     * @param {number} columns
     * @param {number | null} bombs
     */
    constructor(rows, columns) {

        this.rows = rows;
        this.columns = columns;

        this.pair = new Pair(null,null);
        this.isGameOver = false;

        let maxId = (this.rows * this.columns) / 2;
        let idsArray = [];
        for (let i = 0; i < maxId; i++) {
            idsArray.push(i);
            idsArray.push(i);
        }

        this.fields = [];

        for(let i = 0; i < rows; i++) {
            let tempArray = [];
            for(let j = 0; j < columns; j++) {
                let tmp = Math.floor(Math.random() * idsArray.length);
                tempArray.push(new Field(0,idsArray[tmp]));
                idsArray.splice(tmp, 1);
            }
            rhis.fields.push(tempArray);
        }
        /*
        this.bombLocation = [];
        
        for(let l = 0; l < bombs; l++) {
            let x  = Math.floor(Math.random() * this.columns);
            let y = Math.floor(Math.random() * this.rows);

            let coordinate = new Coordinate(x,y);

            this.bombLocation.push(coordinate);
        }
        console.log(this.bombLocation)
        */
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
    

    /*
     * TODO: IMPLEMENT THIS
     * Returns how many bombs are around the field
     * @param {number} x
     * @param {number} y
     * @return {number}
     
    getAmountOfSurroundingBombs(x, y) {
        let surroundingBombs = 0;

        if(this.isBombOnPosition(y+1, x) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y, x+1) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y+1, x+1) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y-1, x) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y, x-1) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y-1, x-1) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y+1, x-1) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y-1, x+1) === true)
            surroundingBombs++;

        return surroundingBombs++;
    }
    */

    /**
     * TODO: IMPLEMENT THIS
     * Returns true there is a bomb on the position
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isBombOnPosition(x, y) {
        for(let i = 0; i < this.bombLocation.length; i++) {
            if(this.bombLocation[i].x === x && this.bombLocation[i].y === y) 
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
        if(this.pair.cell1 === null && this.pair.cell2 === null) {
           this.pair.cell1 = this.fields[x][y].id;
           this.revealCell(x,y);
        }
        else if(this.pair.cell2 === null) {
            this.pair.cell2 = this.fields[x][y].id;
            this.revealCell(x,y);

            if (this.pair.isPairEqual ()) {
                for (let i = 0; i < rows; i++) {
                    for(let j = 0; j < columns; j++) {
                        if(this.fields[i][j] === this.pair.cell1) {
                            this.fields[i][j].state = 2;
                        }
                    }
                }
            }
            else {
                for (let i = 0; i < rows; i++) {
                    for(let j = 0; j < columns; j++) {
                        if(this.fields[i][j] === this.pair.cell1) {
                            this.fields[i][j].state = 0;
                        }
                    }
                }
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

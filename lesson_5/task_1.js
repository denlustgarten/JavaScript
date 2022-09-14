'use strict';
const settings = {
    rowCount: 9,
    colCount: 9,
    blackCell: '#000000',
    whiteCell: '#eee',
}


const game = {
    containerElement: document.getElementById('game'),
    cellElements: null,
    rows: [0, 8, 7, 6, 5, 4, 3, 2, 1],
    cols: [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],

    renderCells() {
        this.containerElement.i = '';
        this.cellElements = [];

        for (let row = 0; row < settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < settings.colCount; col++) {
                const tdElem = document.createElement('td');
                if ((row + col) % 2 != 0 && row != 0 && col != 0) {
                    tdElem.style.backgroundColor = settings.blackCell;
                }
                else {
                    tdElem.style.backgroundColor = settings.whiteCell;
                }

                if (this.rows[row] === 0 && this.cols[col] !== 0) {
                    tdElem.innerHTML = this.cols[col];
                } else if (this.cols[col] === 0 && this.rows[row] !== 0) {
                    tdElem.innerHTML = this.rows[row].toString();
                }
                trElem.appendChild(tdElem);

                this.cellElements.push(tdElem);
            }
        }
    },

    run() {
        this.renderCells();
    },
}

game.run();

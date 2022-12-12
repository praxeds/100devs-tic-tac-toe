// baddie

class Board {
    constructor() {
        this.rows = 3;
        this.cols = 3;
        this.spaces = this.createSpaces();
    }

    createSpaces() {
        const spaces = [];
        for (let x = 0; x < this.cols; x++) {
            const col = [];
            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x,y);
                col.push(space);
            }
            spaces.push(col);
        }
        return spaces;
    }

    renderHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
                space.renderHTMLSpace();
            }
        }
    }

    findSpace(spaceId) {
        let targetSpace;
        for (let column of this.spaces) {
            for (let space of column) {
                if (space.id == spaceId) {
                    targetSpace = space;
                }
            }
        }
        return targetSpace;
    }
}
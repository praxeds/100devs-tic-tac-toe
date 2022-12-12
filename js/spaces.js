// taeho

class Space {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
    }

    get htmlSpace() {
        return document.getElementById(this.id);
    }

    get owner() {
        if (this.token === null) {
            return null
        } else {
            return this.token.owner.name;
        }
    }

    renderHTMLSpace() {
        const space = document.createElement('li');
        space.setAttribute("class", "box");
        space.setAttribute("id", this.id);
        document.querySelector("ul.boxes").appendChild(space);
    }

    mark(token) {
        this.token = token;
    }
}
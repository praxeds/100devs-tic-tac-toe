

class Token {
    constructor (owner, index) {
        this.owner = owner;
        this.id = `token'${index}-${owner.id}`; // need to match it to our html
        this.played = false;
    }

    get tokenPath() {
        let tokenPath = "";
        if (this.owner.id === "player1") {
            tokenPath = 'img/o.svg'; // this is where we need to place our icons or assets
        } else {
            tokenPath = 'img' // this is where we need to place our icons or assets
        }
        return tokenPath;
    }

    renderHTMLToken() {
        let tokenPath = "";
        if (this.owner.id === "player1") {
            tokenPath = '../img/o.svg';
        } else {
            tokenPath = '../img/x.svg';
        }
        const tokenId = this.id;
        return [tokenPath, tokenId];
    }

    get htmlToken(){
        return document.getElementById(this.id);
    }
}


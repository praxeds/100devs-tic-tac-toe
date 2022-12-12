// baddie

class Player {
    constructor(name, id, color, active = fales) {
        this.name = name;
        this.id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(5);
    }

    get activeToekn() {
        return this.unusedTokens[0];
    }

    createTokens(numOfTokens) {
        const tokens = [];
        for (let i = 0; i < numOfTokens; i++) {
            const token = new Token(this, i);
            tokens.push(token);
        }
        return tokens;
    }
}
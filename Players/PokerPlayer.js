class PokerPlayer {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    addCard(card) {
        this.hand.push(card);
    }

    getHand() {
        return this.hand;
    }

    getHandValue() {
        let handValue = 0;
        for (let i = 0; i < this.hand.length; i++) {
            handValue += this.hand[i].getValue();
        }
        return handValue;
    }

    getHandString() {
        let handString = "";
        for (let i = 0; i < this.hand.length; i++) {
            handString += this.hand[i].getCardString() + " ";
        }
        return handString;
    }
}
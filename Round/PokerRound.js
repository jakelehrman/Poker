class PokerTurn {
    constructor(players, dealer, deck) {
        this.players = players;
        this.dealer = dealer;
        this.deck = deck;
        this.pot = 0;
        this.communityCards = [];
    }

    // Need to update player class to have an isActive field. set to false when player folds
    playRound() {
        // Deal the first round of cards
        this.drawStartingCards();

        his.communityCards.push(this.deck.drawCard());
        this.communityCards.push(this.deck.drawCard());
        this.communityCards.push(this.deck.drawCard());

        this.bettingRound()

        // Deal the fourth and fifth community cards
        this.communityCards.push(this.deck.drawCard());
        this.communityCards.push(this.deck.drawCard());

        this.bettingRound()

        winner = this.determineWinner();
        winner.chips += this.pot;

        this.eliminatePlayers();
    }

    drawStartingCards() {
        for (let i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            player.drawCard(this.deck);
            player.drawCard(this.deck);
        }
    }

    bettingRound() {
        // Iterate through each player
        for (let i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            if (player.isActive && player.chips > 0) {
                // Allow the player to make a move
                const move = player.makeMove();
  
                // Update the pot based on the player's move
                this.pot += move.amount;
  
                if (move.type == 'fold') {
                    // Remove the player from the game
                    player.isActive = false;
                }
            }
        }
    }

    determineWinner() {
        let winner = this.players[0];
        let winningHand = this.players[0].getHandValue();
        for (let i = 1; i < this.players.length; i++) {
            const player = this.players[i];
            const handValue = player.getHandValue();
            if (handValue > winningHand) {
                winner = player;
                winningHand = handValue;
            }
        }
        return winner;
    }

    eliminatePlayers() {
        // iterate through each player in this.players and eliminate players with 0 chips
        for (let i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            if (player.chips == 0) {
                this.players.splice(i, 1);
            }
        }
    }
}
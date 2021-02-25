const SUITS = ["♠", "♥", "♦", "♣"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }
  get numberOfCards() {
    return this.cards.length;
  }
  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
  getCards(quantity) {
    return this.cards.splice(0, quantity);
  }
}

class Card {
  constructor(value, suit) {
    this.suit = suit;
    this.value = value;
  }
}
class Player {
  constructor(hand, name) {
    this.name = name;
    this.hand = new Deck(hand);
  }
}

function freshDeck() {
  const deck = [];
  SUITS.flatMap((suit) => {
    VALUES.map((value) => {
      deck.push(new Card(value, suit));
    });
  });
  for (let i = 0; i < 2; i++) {
    deck.push(new Card("JOKER", "JOKER"));
  }
  return deck;
}

const deck = new Deck();
deck.shuffle();
console.log(deck.cards);
const player1 = new Player(deck.getCards(5), "Maor");
console.log(player1);
console.log(deck.cards);

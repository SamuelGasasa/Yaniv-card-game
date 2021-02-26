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
  get color() {
    if (this.suit === "♠" || this.suit === "♣") {
      return "black";
    } else return "red";
  }
  getHtml() {
    const cardDiv = document.createElement("div");
    cardDiv.innerText = this.suit;
    cardDiv.classList.add("card", this.color);
    cardDiv.dataset.value = `${this.value} ${this.suit}`;
    return cardDiv;
  }
}
class Player {
  constructor(hand, name) {
    this.name = name;
    this.hand = new Deck(hand);
  }
  getStarted(cards) {
    this.hand = new Deck(cards);
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

function elementCreator(tag, className = null) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}
function startPlaying() {
  if (confirm("Are you sure you want to play?")) {
  }
}

startPlaying();
const deck = new Deck();
deck.shuffle();
console.log(deck);
const player1 = new Player(null, "Maor");
console.log(player1.hand);
player1.getStarted(deck.getCards(5));
console.log(player1.hand);
// console.log(player1.hand.cards[0].getHtml());

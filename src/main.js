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
  printCards(player) {
    const playerHud = document.querySelector(`.player-${player}-hud`);
    for (let i = 0; i < this.hand.cards.length; i++) {
      playerHud.appendChild(this.hand.cards[i].getHtml());
    }
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
    deck.push(new Card("🃟", "🃟"));
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
    let player1 = prompt("Player 1 name: ");
    let player2 = prompt("Player 2 name: ");
    let player3 = prompt("Player 3 name: ");
    let player4 = prompt("Player 4 name: ");
    const deck = new Deck();
    deck.shuffle();
    player1 = new Player(deck.getCards(5), player1);
    player2 = new Player(deck.getCards(5), player2);
    player3 = new Player(deck.getCards(5), player3);
    player4 = new Player(deck.getCards(5), player4);
    createBoard();
    player1.printCards(1);
    player2.printCards(2);
    player3.printCards(3);
    player4.printCards(4);
  }
}

function createBoard() {
  const board = elementCreator("div", "board");
  const mainHud = elementCreator("div", "main-hud");
  const player1Hud = elementCreator("div", "player-1-hud");
  const player2Hud = elementCreator("div", "player-2-hud");
  const player3Hud = elementCreator("div", "player-3-hud");
  const player4Hud = elementCreator("div", "player-4-hud");
  player1Hud.classList.add("hud");
  player2Hud.classList.add("hud");
  player3Hud.classList.add("hud");
  player4Hud.classList.add("hud");
  document.body.appendChild(board);
  board.appendChild(mainHud);
  board.appendChild(player1Hud);
  board.appendChild(player2Hud);
  board.appendChild(player3Hud);
  board.appendChild(player4Hud);
}
// const deck = new Deck();
// deck.shuffle();
// console.log(deck);
// const player1 = new Player(null, "Maor");
// console.log(player1.hand);
// player1.getStarted(deck.getCards(5));
// console.log(player1.hand);
// console.log(player1.hand.cards[0].getHtml());
startPlaying();

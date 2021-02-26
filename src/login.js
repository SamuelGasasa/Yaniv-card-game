const playersNames = [];
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const player3 = document.querySelector(".player3");
const player4 = document.querySelector(".player4");
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
  playersNames.push(player1.value);
  playersNames.push(player2.value);
  playersNames.push(player3.value);
  playersNames.push(player4.value);
});

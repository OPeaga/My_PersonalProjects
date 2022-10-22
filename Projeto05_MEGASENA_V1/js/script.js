var state = {
  board: [],
  currentGame: [],
  savedGames: [],
};
/* Esse aqui entre {} é um objeto no JavaScript*/
function start() {
  createBoard();
  newGame();
  console.log(state.board);
}
function createBoard() {
  state.board = [];

  for (let i = 1; i <= 60; i++) {
    state.board.push(i);
  }
}
function newGame() {
  resetGame();
  render();
}
function render() {
  renderBoard();
  renderButtons();
  renderSavedGames();
}
function renderButtons() {
  var divButtons = document.querySelector("#megasena-buttons");
  divButtons.innerHTML = "";

  var ButtonNewGame = createNewGameButton();

  divButtons.appendChild(ButtonNewGame);
}
function createNewGameButton() {
  var button = document.createElement("button");

  button.textContent = "Novo Jogo";
  button.addEventListener("click", handleNumberClick);

  return button;
}
function renderSavedGames() {}
function renderBoard() {
  var divGame = document.querySelector("#megasena-numbers");

  divGame.innerHTML = "";

  var ulGames = document.createElement("ul");

  ulGames.classList.add("numbers");

  for (var i = 0; i < state.board.length; i++) {
    var currentNumber = state.board[i];

    var liGame = document.createElement("li");

    liGame.addEventListener("click", handleNumberClick);

    liGame.textContent = currentNumber;

    ulGames.appendChild(liGame);
  }

  divGame.appendChild(ulGames);
}
function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error('Número Inválido", numberToAdd');
    return;
  }
  if (state.currentGame.length >= 6) {
    console.error("O jogo já está completo.");
    return;
  }
  if (isNumberInGame(numberToAdd)) {
    console.error("Este número já está no jogo");
    /* Entrada True é Truthy para a condição, acionando error*/

    return;
  }
  state.currentGame.push(numberToAdd);
  /* .push é uma função de adicionar algo a uma lista no final*/
}
function isNumberInGame(numberToCheck) {
  if (state.currentGame.includes(numberToCheck)) {
    /* includes vai verificar se algo está contido na lista */
    return true;
  }
  return false;
  /* Uma alternativa seria return state.currentGame.includes(numberToCheck) */
}
function removeNumberFromGame(numberToRemove) {
  var newGame = [];
  for (let i = 0; i < state.currentGame.length; i++) {
    var element = state.currentGame[i];
    if (element === numberToRemove) {
      continue;
    }
    newGame.push(element);
    /* Aqui estou dando um nome mais simples para state.currentGame */
  }
  state.currentGame = newGame;
}
function savegame() {
  if (!IsGameComplete()) {
    console.error("O jogo não está completo");
    return;
  }
  state.savedGames.push(state.currentGame);
}
function IsGameComplete() {
  return state.currentGame.length === 6;
}
function resetGame() {
  state.currentGame = [];
}
function handleNumberClick(event) {
  var value = Number(event.currentTarget.textContent);
  if (isNumberInGame(value)) {
    removeNumberFromGame(value);
  } else {
    addNumberToGame(value);
  }
  console.log(state.currentGame);
}
start();
/* Sempre utilizar nomes de funções e variáveis que auto-explicam o que fazem */

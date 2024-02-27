const score = {
  PLAYER: 0,
  COMPUTER: 0,
};
const divResult = document.getElementById('result');
const paragraph = document.getElementById('choice');

function game(choice) {
  if (typeof choice !== 'number' || !Number.isInteger(choice)) {
    alert('Only numbers allowed');
  }

  if (choice < 0 || choice >= optionKeys.length) {
    alert('Numbers can be only 0, 1 and 2');
  }
  const result = rockPaperScissor(choice);

  if (result === GAME_RESULT.WIN_PLAYER) score.PLAYER++;
  else if (result === GAME_RESULT.WIN_COMPUTER) score.COMPUTER++;
  // else return;

  let message;

  if (result === GAME_RESULT.DRAW) message = "It's a draw";
  else if (result === GAME_RESULT.WIN_PLAYER) message = 'Player wins!';
  else if (result === GAME_RESULT.WIN_COMPUTER) message = 'Computer wins!';

  divResult.innerText =
    message2 +
    '\n' +
    message +
    '\n\nPlayer score: \t' +
    score.PLAYER +
    '\nComputer score: ' +
    score.COMPUTER;
}

function resetScore() {
  if (score.PLAYER === 0 && score.COMPUTER === 0) return;
  score.PLAYER = 0;
  score.COMPUTER = 0;
  divResult.innerText = `Player score: ${score.PLAYER}\n Computer score: ${score.COMPUTER}`;
}

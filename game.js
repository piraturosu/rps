const score = {
  PLAYER: 0,
  COMPUTER: 0,
};
const divResult = document.getElementById('result');
const paragraph = document.getElementById('choice');

function game(choice) {
  const result = rockPaperScissor(choice);

  if (result === GAME_RESULT.WIN_PLAYER) score.PLAYER += 1;
  else if (result === GAME_RESULT.WIN_COMPUTER) score.COMPUTER += 1;
  // else return;

  let message;

  if (result === GAME_RESULT.DRAW) message = "It's a draw";
  else if (result === GAME_RESULT.WIN_PLAYER) message = 'Player wins!';
  else if (result === GAME_RESULT.WIN_COMPUTER) message = 'Computer wins!';

  divResult.innerText =
    message +
    '\n\nPlayer score: \t' +
    score.PLAYER +
    '\nComputer score: ' +
    score.COMPUTER;
}

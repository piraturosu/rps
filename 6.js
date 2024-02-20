const GAME_RESULT = {
  DRAW: 0,
  WIN_PLAYER: 1,
  WIN_COMPUTER: 2,
};
const resultKeys = Object.keys(GAME_RESULT);

const OPTIONS = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};
const optionKeys = Object.keys(OPTIONS);

function rockPaperScissor(playerChoice) {
  if (typeof playerChoice !== 'number' || !Number.isInteger(playerChoice)) {
    console.error('Only numbers allowed');
    return false;
  }

  if (playerChoice < 0 || playerChoice >= optionKeys.length) {
    console.error('Numbers can be only 0, 1 and 2');
    return false;
  }

  const computerChoice = Math.floor(Math.random() * optionKeys.length);
  const playerChoiceName = optionKeys[playerChoice];
  const computerChoiceName = optionKeys[computerChoice];
  console.log(
    `Computer chose\t${computerChoiceName}\nYou chose\t\t${playerChoiceName}`
  );

  if (playerChoice === computerChoice) {
    return GAME_RESULT.DRAW;
  } else if (playerChoice === OPTIONS.ROCK) {
    if (computerChoice === OPTIONS.PAPER) return GAME_RESULT.WIN_COMPUTER;
    return GAME_RESULT.WIN_PLAYER;
  } else if (playerChoice === OPTIONS.PAPER) {
    if (computerChoice === OPTIONS.ROCK) return GAME_RESULT.WIN_PLAYER;
    return GAME_RESULT.WIN_COMPUTER;
  } else if (playerChoice === OPTIONS.SCISSORS) {
    if (computerChoice === OPTIONS.ROCK) return GAME_RESULT.WIN_COMPUTER;
    return GAME_RESULT.WIN_PLAYER;
  }
  return true;
}

// function test(param) {
//   const cond = rockPaperScissor(param);
//   if (!cond) alert('Function failed');
// }

// test();
// test(null);
// test(undefined);

// test(false);
// test(true);

// test(-1);
// test(optionKeys.length);

// test(1.33);

// test('1.33');
// test('1');

// test([]);
// test({});

// test(() => 1);
// test(() => {});

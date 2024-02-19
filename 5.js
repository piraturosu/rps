const OPTIONS = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};
const optionKeys = Object.keys(OPTIONS);
let computerChoice;
let playerChoiceName;
let computerChoiceName;
let battleConclusion = document.createElement('p');
let computerScoreText = document.createElement('p');
let playerScoreText = document.createElement('p');
let computerScore = 0;
let playerScore = 0;

playerScoreText.innerText = `Player: ${playerScore}`;

function rockPaperScissor(playerChoice) {
  if (typeof playerChoice !== 'number' || !Number.isInteger(playerChoice)) {
    console.error('Only numbers allowed');
    return false;
  }

  if (playerChoice < 0 || playerChoice >= optionKeys.length) {
    console.error('Numbers can be only 0, 1 and 2');
    return false;
  }

  computerChoice = Math.floor(Math.random() * optionKeys.length);
  playerChoiceName = optionKeys[playerChoice];
  computerChoiceName = optionKeys[computerChoice];
  console.log(
    `Computer chose\t${computerChoiceName}\nYou chose\t\t${playerChoiceName}`
  );

  if (playerChoice === computerChoice) {
    battleConclusion.innerText = "It's a draw";
  } else if (playerChoice === OPTIONS.ROCK) {
    if (computerChoice === OPTIONS.PAPER) {
      battleConclusion.innerText = 'Computer wins!';
      computerScore++;
    } else {
      battleConclusion.innerText = 'you win!';
      playerScore++;
    }
  } else if (playerChoice === OPTIONS.PAPER) {
    if (computerChoice === OPTIONS.ROCK) {
      battleConclusion.innerText = 'you win!';
      playerScore++;
    } else {
      battleConclusion.innerText = 'computer wins!';
      computerScore++;
      computerScoreText.innerText = `Computer: ${computerScore}`;
    }
  } else if (playerChoice === OPTIONS.SCISSORS) {
    if (computerChoice === OPTIONS.ROCK) {
      battleConclusion.innerText = 'computer wins!';
      computerScore++;
    } else {
      battleConclusion.innerText = 'you win!';
      playerScore++;
    }
  }

  return true;
}

function test(param) {
  const cond = rockPaperScissor(param);
  if (!cond) alert('Function failed');
}

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

// test(()=>1);
// test(()=>{});

const OPTIONS = {
  'ROCK': 0,
  'PAPER': 1,
  'SCISSORS': 2
};
const optionKeys = Object.keys(OPTIONS);

function rockPaperScissor(playerChoice) {
  if (playerChoice == undefined) {
    console.error('Missing input choice');
    return;
  }

  if (typeof playerChoice === "boolean") {
    console.error('Only numbers allowed');
    return;
  }

  if (playerChoice < 0 || playerChoice >= optionKeys.length) {
    console.error('Numbers can be only 0, 1 and 2');
    return;
  }

  const computerChoice = Math.floor(Math.random() * optionKeys.length);
  const playerChoiceName = optionKeys[playerChoice];
  const computerChoiceName = optionKeys[computerChoice];
  console.log(`Computer chose\t${computerChoiceName}\nYou chose\t\t${playerChoiceName}`);

  if (playerChoice === computerChoice) {
    console.log("draw");
  } else if (playerChoice === OPTIONS.ROCK && computerChoice === OPTIONS.PAPER) {
    console.log("computer wins!");
  } else if (playerChoice === OPTIONS.ROCK && computerChoice === OPTIONS.SCISSORS) {
    console.log("you win!");
  } else if (playerChoice === OPTIONS.PAPER && computerChoice === OPTIONS.ROCK) {
    console.log("you win!");
  } else if (playerChoice === OPTIONS.PAPER && computerChoice === OPTIONS.SCISSORS) {
    console.log("computer wins!");
  } else if (playerChoice === OPTIONS.SCISSORS && computerChoice === OPTIONS.ROCK) {
    console.log("computer wins!");
  } else if (playerChoice === OPTIONS.SCISSORS && computerChoice === OPTIONS.PAPER) {
    console.log("you win!");
  }
}

rockPaperScissor();
rockPaperScissor(null);
rockPaperScissor(undefined);

rockPaperScissor(false);
rockPaperScissor(true);

rockPaperScissor(-1);
rockPaperScissor(optionKeys.length);
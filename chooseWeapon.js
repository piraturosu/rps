const battleResult = document.createElement('p');
battleResult.setAttribute('id', 'battle-result');
const battleDiv = document.getElementById('result');

function battle(buton) {
  let playerWeapon = optionKeys[computerChoice];
  let butonValue = Number(buton.value);
  rockPaperScissor(butonValue);
  battleResult.innerText = `You chose:\t\t${playerChoiceName}\nComputer chose:\t${computerChoiceName}`;
  battleDiv.appendChild(battleResult);
  battleDiv.appendChild(battleConclusion);
  battleDiv.appendChild(playerScoreText);
  battleDiv.appendChild(computerScoreText);
}

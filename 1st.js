function rockPaperScissor(p1) {
  let optionsArr = [ 'rock', 'paper', 'scissor'];
  let random = Math.random();
  for (let i = 0; i<optionsArr.length; i++){
    let randomOption = Math.floor(random * 3);
    if (p1 === optionsArr[randomOption]){
      console.log("draw");
      return;
    } else if (p1 === "rock" && optionsArr[randomOption] === "paper") {
      console.log("p2 wins!");
      return;
    } else if (p1 === "rock" && optionsArr[randomOption] === "scissor") {
      console.log("you win!");
      return;
    } else if (p1 === "paper" && optionsArr[randomOption] === "rock") {
      console.log("you win!");
      return;
    } else if (p1 === "paper" && optionsArr[randomOption] === "scissor") {
      console.log("p2 wins!");
    } else if (p1 === "scissor" && optionsArr[randomOption] === "rock") {
      console.log("p2 wins!");
    } else if (p1 === "scissor" && optionsArr[randomOption] === "paper") {
      console.log("you win!");
    }
    
  }
} 

rockPaperScissor()  
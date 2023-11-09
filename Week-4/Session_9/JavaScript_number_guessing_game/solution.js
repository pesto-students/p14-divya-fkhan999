
function playGuessingGame(numToguess,totalGuess){
    let guessNum;
    let remGuess=totalGuess
    while (remGuess){
        guessNum=prompt("Enter a number between 1 and 100.");
        guessNum=Number(guessNum);
        if (isNaN(guessNum)){
            console.log("Enter a Number");
            continue;
        }
        console.log({guessNum});
        remGuess--;
        if (guessNum==numToguess){
            return totalGuess-remGuess;
        }
        else if(guessNum>numToguess){
            console.log("X is too large. Guess a smaller number.")
        }
        else{
            console.log("X is too small. Guess a larger number.");
        }
    }
    return remGuess

}



let numToguess=7
let totalGuess=10

playGuessingGame(numToguess,totalGuess)

let word, guessingMoves;
function wordToGuess() {
    word = document.getElementById("inputWord").value;
    guessingMoves = word.length + 3;
    if (!/[^a-zA-Z]/.test(word)) {
        alert("Player2 you have " + guessingMoves + " moves to find the word.");
    } else {
        alert("The word must contain only LETTERS, Please enter another word.")
    }
    document.getElementById("inputWord").value = "";
}

function letterToCompare() {
    var currLetter = document.getElementById("letter").value;
    --guessingMoves;
    for (let i = 0; i < word.length; ++i) {
        if (word[i] == currLetter && guessingMoves >= 0) {
            word = word.replace(word[i], '*');
        } 
    }
    if (guessingMoves >= 0 && !(word.match(/[a-zA-Z]/))) {
         alert("Congratulations YOU HAVE WON.");
    } else if (!guessingMoves) {
        alert("I am sorry but YOU LOST.Reset the Game and start again.");
        document.location.reload();
    } else {
        alert("Player2 YOU have  " + guessingMoves + " moves left to find the word.");
    }
    document.getElementById("letter").value = "";
}

function reset() {
    document.location.reload();
}

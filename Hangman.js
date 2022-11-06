let currWord, currMoves;
function theWord() {
    currWord = document.getElementById("inputWord").value;
    currMoves = currWord.length + 3;
    if (!/[^a-zA-Z]/.test(currWord)) {
        alert("Player2 you have " + currMoves + " moves to find the word.");
    } else {
        alert("The word must contain only LETTERS, Please enter another word.")
    }
    document.getElementById("inputWord").value = "";
}

function findLetter() {
    var currLetter = document.getElementById("letter").value;
    --currMoves;
    for (let i = 0; i < currWord.length; ++i) {
        if (currWord[i] == currLetter && currMoves >= 0) {
            currWord = currWord.replace(currWord[i], '*');
        } 
    }
    if (currMoves >= 0 && !(currWord.match(/[a-zA-Z]/))) {
         alert("Congratulations YOU HAVE WON.");
    } else if (!currMoves) {
        alert("I am sorry but YOU LOST.Reset the Game and start again.");
        document.location.reload();
    } else {
        alert("Player2 YOU have  " + currMoves + " moves left to find the word.");
    }
    document.getElementById("letter").value = "";
}
function reset() {
    document.location.reload();
}

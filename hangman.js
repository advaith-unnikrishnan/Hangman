let characters=[
  "IRONMAN",
  "CAPTAIN AMERICA",
  "CAPTAIN MARVEL",
  "SPIDERMAN",
  "BLACK WIDOW",
  "BLACK PANTHER",
  "HULK",
  "THOR",
  "VISION",
  "WANDA",
  "THANOS",
  "DAREDEVIL",
  
]
let answer=''
let guessed=[]
let moves=6
let mistakes=0
let wordStatus=null
/*function to pick a random word from the list*/
function randomWord() {
  answer = characters[Math.floor(Math.random() * characters.length)];
}

/*function to generate buttons*/
function generateButtons() {
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
      `
        <button
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

/*function to handle the guess made by user*/
function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter)===-1?guessed.push(chosenLetter):null
  document.getElementById(chosenLetter).setAttribute('disabled',true)
  if (answer.indexOf(chosenLetter)>=0)
  {
    guessedWord()
    checkGameStatus()
  } 
  else if(answer.indexOf(chosenLetter)===-1)
  {
    mistakes++
    updateMistakes()
    checkGameStatus()
    updateImg()
  }  
}

/* Function to check whether game won or lost*/
function checkGameStatus() {
  if(wordStatus === answer){
    alert("Congratulations \n You Won!")
  }
  else if(mistakes===moves){
    alert("You lost!\n Better luck next time.")
  }
}

// Function to update hangman image
function updateImg() {
  document.getElementById('hangman-img').src="./images/hangman"+mistakes+".png"  
}

function guessedWord() {
  wordStatus=answer.split('').map(letter=>(guessed.indexOf(letter)>=0?letter:" _ ")).join('')
  document.getElementById('guess').innerHTML=wordStatus
  console.log(wordStatus)
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangman-img').src = './images/hangman0.png';

  randomWord()
  guessedWord()
  updateMistakes()
  generateButtons()
}

randomWord()
generateButtons()
guessedWord()
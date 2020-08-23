import swal from 'sweetalert'
let characters=[
  "IRONMAN",
  "CAPTAIN AMERICA",
  "CAPTAIN MARVEL",
  "SPIDERMAN",
  "BLACK WIDOW",
  "BLACK PANTHER",
  "HULK",
  "THOR",
  "NICK FURY",
  "VISION",
  "WANDA",
  "THANOS",
  "DAREDEVIL",
  "STAN LEE"
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
function handleGuess(chosen) {
  guessed.indexOf(chosen)===-1?guessed.push(chosen):null
  document.getElementById(chosen).setAttribute('disable',true)
  if (answer.indexOf(chosen)>=0)
  {
    guessedWord()
    checkGameStatus()
  } 
  else if(answer.indexOf(chosen)===-1)
  {
    updateMistakes()
    checkGameStatus()
    updateImg()
  }  
}

/* Function to check whether game won or lost*/
function checkGameStatus() {
  if(wordStatus === answer){
    swal("You won!!")
  }
  else if(mistakes===moves){
    swal("You lost!","The answer was "+answer)
  }
}

// Function to update hangman image
function updateImg() {
  document.getElementById('hangman-img').src="./images/hangman"+mistakes+".png"  
}
randomWord();
generateButtons();
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


const updateImg=()=>{
    ++img_name
    if(moves>0)
    {
        img.src="images/hangman"+img_name+".png"
        moves--
    }
    else if(moves==0)
        alert("Game Over!!")
}

/*function to pick a random word from the list*/
function randomWord() {
  answer = characters[Math.floor(Math.random() * characters.length)];
}


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


generateButtons();
let img=document.getElementById("hangman-img")
let hint=document.getElementById("clue")
let chances=document.getElementById("moves")
let answer=document.getElementById("answer")
let img_name=0
let moves=6
let correctWord=""
let questions={
    q1:{
        hint:"Steven Spielberg , Leanardo DiCaprio ,Kate Winslet",
        answer:"Titanic",
    },
    q2:{
        hint:"Peter Jackson and Ring",
        answer:"Lord of the Rings The return of the King",
    },
    q3:{
        hint:"Steven Spielberg , Tom Hanks, Leonardo DiCaprio",
        answer:"Catch me if you can",
    }
}

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

const setQuestion=()=>{
    hint.innerHTML="Hint: "+questions.q1.hint
    chances.innerHTML="No: of moves left - "+moves
    let l=questions.q1.answer.length
    let ans=""
    for(let i=0;i<l;i++)
        ans+="_ "
    answer.innerHTML=ans  
}

const displayWord=(e)=>{
    let ans=[...questions.q1.answer]
    if(e in ans)
        {
            correctWord+=e
            answer.innerHTML=correctWord
        }
    else{
        moves--
        chances.innerHTML="No: of moves left - "+moves
        updateImg()
    }
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }
  
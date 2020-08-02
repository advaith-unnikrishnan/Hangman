var img=document.getElementById("hangman-img")
let img_name=0

const updateImg=()=>{
    
    if(img_name<=6)
    {
        img.src="images/hangman"+img_name+".png"
        img_name++
    }
    else
        alert("Game Over")
}


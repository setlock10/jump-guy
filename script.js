var character = document.getElementById("character");
character.classList.add("background-stand")

/* Global Variables */
let pressed = false
let characterLeft= 0
let moveTimer = 0


/* Event Listeners */
document.addEventListener("keydown",keydown)
document.addEventListener("keyup",keyup)


/* Functions */
function keydown(e){
    pressed===true
    if(e.code==="ArrowRight")run(1)
    if(e.code==="ArrowLeft")run(-1)
    if(e.code==="Space")jump()
}

function keyup(e){
    if(e.code==="ArrowRight"){
        clearInterval(moveTimer)
        character.classList.remove("run")
        character.classList.remove("background-run")
         character.classList.add("background-stand")
        pressed=false
    }

    if(e.code==="ArrowLeft"){
        clearInterval(moveTimer)
        character.classList.remove("run")
        character.classList.remove("background-run")
        character.classList.add("background-stand")
        pressed=false
    }
}




function run(direction){

    if(pressed===true){return;}

    /* Getting the current location of the character */
    characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    console.log(characterLeft)
   
    /* Setting the direction of the character */
    direction<0 ? (character.classList.add("flip")) : (character.classList.remove("flip"))
  
    
    character.classList.remove("background-stand")
    character.classList.add("background-run")
    character.classList.add("run")
    pressed=true

    moveTimer=setInterval(move,10,direction)
}

function move(direction){
    direction<0 ? (characterLeft-=2) : (characterLeft+=2)

    /* Defining our movement boundaries */
    if (characterLeft>=800){characterLeft=800} 
    if (characterLeft<0){characterLeft=0} 

    character.style.left=characterLeft+'px';
}

function jump(){
    if(character.classList == "animate-jump"){return}
    character.classList.add("background-run")
    character.classList.add("animate-jump")

    setTimeout(removeJump,300) //300ms = length of animation
}

function removeJump(){
    character.classList.remove("animate-jump")
}

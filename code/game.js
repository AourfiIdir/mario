let score = 0;
let gameover=false;
let moletile;
let piranhatile;
function random_num(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}


function set_mole(){
    if(gameover){
        return;
    }
    if(moletile){
        moletile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "/mario/images/monty-mole.png"
    let num = random_num();
    if(piranhatile && piranhatile.id == num){
        return;
    }
    moletile = document.getElementById(num);
    moletile.appendChild(mole);
}
function set_piranha(){
    if(gameover){
        return;
    }
    if(piranhatile){
        piranhatile.innerHTML = "";
    }
    let piranha = document.createElement("img");
    piranha.src = "/mario/images/piranha-plant.png";
    let num = random_num();

    if(moletile && moletile.id == num){
        return;
    }
    piranhatile = document.getElementById(num);
    piranhatile.appendChild(piranha);
}
function setclick(){
    if(gameover){
        return;
    }
    if(this == moletile){
        document.getElementById("score").innerText = " ";
        score +=10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == piranhatile){
        document.getElementById("score").innerText = "gameover :" + score.toString();
        gameover = true;
    }
}

function setgame(){
    for(let i=0;i<9;i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",setclick);
        document.getElementById("board").appendChild(tile);

    }
    setInterval(set_mole,2000);
    setInterval(set_piranha,2000);
    
}


window.onload  = function(){
    setgame();
}


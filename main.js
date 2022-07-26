window.onload= function(){
    autoChange()
}

function red(){
    document.body.style.background = "red";
}
function green(){
    document.body.style.background = "green";
}
function blue(){
    document.body.style.background = "blue";
}
function yellow(){
    document.body.style.background = "yellow";
}
function pink(){
    document.body.style.background = "pink";
}

function autoChange(){
    timeInterval = setInterval(function(){
        let randNum = Math.floor(Math.random() * 5) + 1;
        if(randNum == 1){
            document.body.style.background = "red";
        } else if(randNum == 2){
            document.body.style.background = "green";
        } else if(randNum == 3){
            document.body.style.background = "blue";
        } else if(randNum == 4){
            document.body.style.background = "yellow";
        } else if(randNum == 5){
            document.body.style.background = "pink";
        }
    },200)
}
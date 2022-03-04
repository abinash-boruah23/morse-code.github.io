
let text = document.querySelector("#text");
let code = document.querySelector(".morse");
let button = document.querySelector(".play");
let stop = document.querySelector(".stop");

let textarr = []

let x;

function display(){
    code.innerHTML = textarr.join(' ');
}

function textpush(){
    x = text.value;
}

button.addEventListener("click",async function(){
    button.disabled=true;
    await play();
    button.disabled=false;
})




//prevent

function prevent(e) {
    var Keys = e.keyCode;
            if(Keys>=33&&Keys<=47 || Keys>=58&&Keys<=64 || Keys>91&&Keys<=96 || Keys>=123&&Keys<=126){
                return false;
            }
}






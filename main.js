

const lucik = document.getElementById("lucik");
const bonfire = document.getElementById("bonfire");

document.addEventListener("keydown", function(event){
    jump();
});

function jump() {
    if (lucik.classList != "jump"){
        lucik.classList.add("jump")
    }
    setTimeout(function(){
        lucik.classList.remove("jump")
    }, 800)
}

let isAlive = setInterval (function() {
    let lucikTop = parseInt(window.getComputedStyle(lucik).getPropertyValue("top"));
    let bonfireLeft = parseInt(window.getComputedStyle(bonfire).getPropertyValue("left"));

    if (bonfireLeft < 50 && bonfireLeft > 0 && lucikTop >= 165) {
        alert("Game Over!")
    }
}, 10)


// const stop = docement.getElementById("stop");

// function stop() {

// }
let button = document.getElementById("button");
button.addEventListener("click",function(){
    button.innerText = Number(button.innerText) + 1;
    if (Number(button.innerText) == 30){
        document.body.style.backgroundColor = "#40ff40";
        alert("意味ないよ")
    }
    if (Number(button.innerText) == 100){
        document.body.style.backgroundColor = "#ff00c8";
        alert("意味ないって")
    }
    if (Number(button.innerText) == 300){
        document.body.style.backgroundColor = "#252961";
        alert("もうないよ")
    }
})
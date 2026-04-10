let button = document.getElementById("button");
button.addEventListener("click",function(){
    button.innerText = Number(button.innerText) + 1;
    if (Number(button.innerText) >= 30){
        alert("意味ないよ")
    }
})
const box=document.getElementById("box");
const btn=document.getElementById("btn");

function randomNumber(number){
    let rn = Math.floor(Math.random() * (number + 1))
    return rn;
}


btn.addEventListener("click",() =>{
    const color= `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
    box.style.backgroundColor = color;
})


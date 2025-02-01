// Counter

const decrease=document.getElementById('decrease-btn');
const increase=document.getElementById('increase-btn');
const reset=document.getElementById('reset-btn');
let count=0;


decrease.onclick=function(){
    count--;
    document.getElementById('display-counter').textContent=count;
}

increase.onclick=function(){
    count++;
    document.getElementById('display-counter').textContent=count;
}

reset.onclick=function(){
    count=0;
    document.getElementById('display-counter').textContent=count;
}

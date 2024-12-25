// Counter

const decrease=document.getElementById('decreasebtn');
const increase=document.getElementById('increasebtn');
const reset=document.getElementById('resetbtn');
let count=0;


decrease.onclick=function(){
    count--;
    document.getElementById('displayCounter').textContent=count;
}

increase.onclick=function(){
    count++;
    document.getElementById('displayCounter').textContent=count;
}

reset.onclick=function(){
    count=0;
    document.getElementById('displayCounter').textContent=count;
}

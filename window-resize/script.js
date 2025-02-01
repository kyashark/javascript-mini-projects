function updateSizeInfo(){
    const sizeInfo=document.getElementById('size-info');
    sizeInfo.textContent = `${window.innerWidth} ✖️ ${window.innerHeight}`;
}


window.addEventListener("resize",updateSizeInfo);
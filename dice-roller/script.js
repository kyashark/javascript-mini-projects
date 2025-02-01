function diceRoller() {
    const number = document.getElementById("number").value;
    const diceImg = document.getElementById("diceImg");
    const diceNumbers = document.getElementById("diceNumber");
    let values = [];
    let images = [];

    if (number > 0 & number < 6) {

        for (let i = 0; i < number; i++) {
            value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            images.push(`<img src="img/${value}.png" alt="${value}">`);
        }
        diceNumbers.textContent = `Dice : ${values.join(" ")}`;
        diceImg.innerHTML = images.join(" ");
    }

    else {
        alert("Please Enter Number Between 1 - 6")
    }

}
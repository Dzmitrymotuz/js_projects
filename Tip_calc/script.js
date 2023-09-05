const userInput = document.getElementById("userInput");
const tip = document.getElementById("tip");
var total = 0;

function tips() {
    total= userInput.value * (tip.value / 100);
    document.getElementById("total").innerHTML = total + ' $';
}


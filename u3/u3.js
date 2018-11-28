var atsakymas = "";
function handleClick() {
    var zodis = document.getElementById("input").value;
    if (zodis == "pabaiga") {
        document.getElementById("output").innerHTML = atsakymas;
    } else {
        atsakymas += zodis + " ";
    }
}
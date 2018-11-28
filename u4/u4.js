var atsakymas = Number("0");

function handleClick() {
    var skaicius = Number(document.getElementById("sk").value);
    if (skaicius == "0") {
        document.getElementById("ats").innerHTML = atsakymas;
    } else {
        atsakymas += skaicius;
    }
}

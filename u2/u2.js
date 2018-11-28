function funkcija1() {
    var atsakymas = "";
    var skaicius = Number(document.getElementById("skaicius").value);
    if (skaicius % 3 == 0) {
        atsakymas += "Dalinasi is 3 ";
    }
    if (skaicius % 5 == 0) {
        atsakymas += "Dalinasi is 5 ";
    }
    if (skaicius % 7 == 0) {
        atsakymas += "Dalinasi is 7 ";
    }
    if (atsakymas == "") {
        atsakymas = "Nesidalina is nieko";
    }
    document.getElementById("atsakymas").innerHTML = atsakymas;
}
function funkcija1 () {
    var a = Number(document.getElementById('skaicius').value);
    if (a % 2 == 0) {
        document.getElementById('atsakymas').innerHTML="Lyginis";
    } else {
        document.getElementById('atsakymas').innerHTML="Nelyginis";
    }

}

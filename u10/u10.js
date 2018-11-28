function funkcija() {

    var sk = Number(document.getElementById("skaicius").value);
    var i = Number("0");
    var ats = Number("0");

    if (sk>0) {
        while (i <= sk) {
            ats = ats + i;
            i++;
        }
        document.getElementById("rikiuote1").innerHTML = ats;
    }
    else {document.getElementById("rikiuote1").innerHTML = "Ivestas blogas skaicius";}
}
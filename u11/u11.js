function funkcija1() {

    var sk = Number(document.getElementById("skaicius").value);
    var i = Number("0");
    var ats = Number("0");

    if (sk>0) {
        while (i <= sk) {
            ats = ats + i;
            i++;
        }
        document.getElementById("suma").innerHTML = ats;
    }
    else {document.getElementById("suma").innerHTML = "Ivestas blogas skaicius";}
}

function funkcija2() {

    var sk = Number(document.getElementById("skaicius").value);
    var i = Number("1");
    var ats = Number("1");

    if (sk>0) {
        while (i <= sk) {
            ats = ats * i;
            i++;
        }
        document.getElementById("sandauga").innerHTML = ats;
    }
    else {document.getElementById("sandauga").innerHTML = "Ivestas blogas skaicius";}
}
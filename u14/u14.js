function apversti() {
    var skaiciai = document.getElementById("masyvas").value;
    var masyvas = skaiciai.split(",");


    document.getElementById("turn").innerHTML = apsukti(masyvas);
}

function apsukti(masyvas) {
    return masyvas.reverse();
}


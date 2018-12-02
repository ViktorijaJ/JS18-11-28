

function minMax() {
    var skaiciai = [document.getElementById("skaiciai").value.split(",")];
    skaiciai.sort(function (a, b) {
        return a - b
    });

    document.getElementById("ats").innerHTML = skaiciai;
}
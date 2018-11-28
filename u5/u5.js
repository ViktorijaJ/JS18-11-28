var atsakymas = 0;

function handleClick() {
    var zodis = document.getElementById("input").value;
    //isNaN("5")-false, nes 5 yra skaicius, isNaN("aaa")-true, nes aaa yra ne skaicius
    if (isNaN(zodis)) {
        document.getElementById("output").innerHTML = "Ivestas ne skaicius";
    } else if (zodis == "0") {
        document.getElementById("output").innerHTML = atsakymas;
    } else {
        document.getElementById("output").innerHTML = "";
        atsakymas += Number(zodis);
    }
}
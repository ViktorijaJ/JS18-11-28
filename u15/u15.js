function rasti() {
    var zodis = document.getElementById("zodis").value;

    //isNaN("5")-false, nes 5 yra skaicius, isNaN("aaa")-true, nes aaa yra ne skaicius

    if (!isNaN(zodis)) {

        document.getElementById("visosa").innerHTML = 0;
        return;
    }
    var raides = zodis.split("");
    var aa = 0;
    raides.forEach(
        function (raide) {
            if (raide == "a") aa++;
        });


    document.getElementById("visosa").innerHTML = aa;
}
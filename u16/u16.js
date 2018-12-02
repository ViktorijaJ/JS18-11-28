function rasti() {
    var zodis = document.getElementById("zodis").value;
    //isNaN("5")-false, nes 5 yra skaicius, isNaN("aaa")-true, nes aaa yra ne skaicius
    if (!isNaN(zodis)) {

        document.getElementById("visosab").innerHTML = 0;
        return;
    }

    var ab = 0;
    for (var i = 0; i < zodis.length - 1; i++) {
        if (zodis.charAt(i) == "a" && zodis.charAt(i + 1) == "b") ab++;
    }

    document.getElementById("visosab").innerHTML = ab;
}
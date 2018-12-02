function rasti() {

    var text = document.getElementById("zodis").value; //pasiima "zodis" reiksme
    text = text.toLowerCase().split(' ').join(''); // text pavercia mazosiomis, isplecia, prideda tarpa
    var masyvas = text.split('');
    var arPalindromas = true;
    for (var i = 0; i < masyvas.length / 2; i++) {
        if (masyvas[i] != masyvas[masyvas.length - 1 - i]) {
            arPalindromas = false;
        }
    }
    if (arPalindromas) {
        document.getElementById("ats").innerHTML = 'Ivestas tekstas "' + text + '" yra palindromas';
    } else {
        document.getElementById("ats").innerHTML = 'Ivestas tekstas "' + text + '" yra ne palindromas';
    }
}
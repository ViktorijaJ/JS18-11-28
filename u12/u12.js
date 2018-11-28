
function surasti() {

    var skaiciai = document.getElementById("masyvas").value;
    var array = skaiciai.split(",");

    document.getElementById("max").innerHTML = "Didziausias yra: " + getMax(array);
}

function getMax(array) {
    var result = Number(array[0]);

    array.forEach(
        function (item) {
            item = Number(item);
            if (item > result) {
                result = item;
            }
        });

    return result;
}
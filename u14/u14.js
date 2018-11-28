
function apversti() {

    var skaiciai = document.getElementById("masyvas").value;
    var array = skaiciai.split(",");

    document.getElementById("turn").innerHTML = "Apsuktas masyvas yra: " + turnMas(array);
}

function turnMas(array) {
    var result = Number(array[0]);

    array.forEach(
        function (item) {
            item = Number(item);
            if (item < result) {
                result = item;
            }
        });

    return result;
}
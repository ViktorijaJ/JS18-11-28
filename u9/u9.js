
function handleClick() {

    var skaiciai = document.getElementById("masyvas").value;
    var masyvas = skaiciai.split(",");

    masyvas.forEach(
        function (naujas) {
            if (naujas > 100) {
                document.getElementById("rikiuote1").innerHTML += naujas + "<br>";
            }

        }
    )

}
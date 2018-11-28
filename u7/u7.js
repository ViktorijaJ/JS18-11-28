var sum = Number("0");

function handleClick() {

    document.getElementById("masyvas").value.split(",").forEach(item => document.getElementById("rikiuote").innerHTML += item + "<br>");

    document.getElementById("masyvas").value.split(",").forEach(item => document.getElementById("suma").innerHTML = sum+=Number(item));

}
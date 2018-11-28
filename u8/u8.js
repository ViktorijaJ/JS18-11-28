function handleClick() {

    document.getElementById("masyvas").value.split(",").forEach(item => {if (item>100){document.getElementById("rikiuote1").innerHTML += item + "<br>"}});
}


function handleClick() {


    document.getElementById("masyvas").value.split(",").forEach(item=>document.getElementById("output").innerHTML+=item+"<br>");
}
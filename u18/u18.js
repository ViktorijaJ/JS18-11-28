

function parodyti() {

    document.getElementById("vardai").value.split(",").forEach(item => document.getElementById("ats").innerHTML += item + "<br>");
}
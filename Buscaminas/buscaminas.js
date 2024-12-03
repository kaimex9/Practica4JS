let campo = document.getElementById("campo");
let array = new Array();
for (let i = 0; i < 64; i++) {
    array[i] = "<div class='cubo' id="+(i+1)+"></div>";
    campo.innerHTML += "<div class='cubo' id="+(i+1)+"></div>";
}

console.log(array);
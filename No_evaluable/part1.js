let nums = new Array(3);
//--[Ejercicio 1]--
let array = new Array(5);
let lista = document.getElementById("lista_nums");
for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 5) + 1;
    lista.innerHTML += "<div class='nums'>" + array[i] + "</div>";
}
//--[Ejercicio 2]--
let array2 = [[], []];
let lista2 = document.getElementById("lista_nums2");
for (let i = 0; i < array2.length; i++) {
    for (let x = 0; x < 5; x++) {
        array2[i][x] = Math.floor(Math.random() * 5) + 1;
        lista2.innerHTML += "<div class='nums'>" + array2[i][x] + "</div>";
    }
}
//--[Ejercicio 3]--
let lista3 = document.getElementById("lista_nums3");
lista3.style = "display : none";
nums[0] = array[0]; nums[1] = array[4]; nums[2] = array2[0][0]; nums[3] = array2[1][4];
for (let i = 0; i < nums.length; i++) {
    lista3.innerHTML += "<div class='nums'>" + nums[i] + "</div>";
}
let showing = false;
document.getElementById("ej3").onclick = function () {
    if (!showing) {
        lista3.style = "display : flex";
        showing = true;
    } else {
        lista3.style = "display : none";
        showing = false;
    }
}
//--[Ejercicio 4]--
document.getElementById("ej4").onclick = function () {
    array.pop();
    array2[0].pop();
    array2[1].pop();
    lista.innerHTML = null;
    lista2.innerHTML = null;
    for (let i = 0; i < array.length; i++) {
        lista.innerHTML += "<div class='nums'>" + array[i] + "</div>";
    }

    array2[0].forEach(valor => {
        lista2.innerHTML += "<div class='nums'>" + valor + "</div>";
    });
    array2[1].forEach(valor => {
        lista2.innerHTML += "<div class='nums'>" + valor + "</div>";
    });
}
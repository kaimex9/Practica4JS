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
    lista2.innerHTML += "<br>";
    for (let x = 0; x < 5; x++) {
        array2[i][x] = Math.floor(Math.random() * 5) + 1;
        lista2.innerHTML += "<div class='nums'>" + array2[i][x] + "</div>";
    }
}
//--[Ejercicio 3]--
let lista3 = document.getElementById("lista_nums3");
let array3 = new Array(5);
for (let i = 0; i < array3.length; i++) {
    array3[i] = Math.floor(Math.random() * 5) + 1;
    lista3.innerHTML += "<div class='nums'>" + array3[i] + "</div>";
}
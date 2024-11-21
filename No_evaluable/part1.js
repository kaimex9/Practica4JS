let array = new Array(5);
let lista = document.getElementById("lista_nums");
for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 5);
    lista.innerHTML += "<div class='nums'>" + array[i] + "</div>";
}

let array2 = [[],[]];
let lista2 = document.getElementById("lista_nums2");
for (let i = 0; i < array.length; i++) {
    array2[i],[i] = Math.floor(Math.random() * 5);
}
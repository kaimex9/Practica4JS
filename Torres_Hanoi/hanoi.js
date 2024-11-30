let array1 = new Array();
let array2 = new Array();
let array3 = new Array();

//Contenido de Divs
let tower1 = document.getElementById("tower1");
let tower2 = document.getElementById("tower2");
let tower3 = document.getElementById("tower3");

//Contenido de notificacion
let noti = document.getElementById("notification");

document.getElementById("start").onclick = function () {
    //reiniciamos los valores de los arrrays
    array1 = new Array();
    array2 = new Array();
    array3 = new Array();
    //Hago que todos los botones reaparezcan en el caso de que hayan desaparecido previamente
    let buttons = document.querySelectorAll(".buttons");
    buttons.forEach(function (button) {
        button.style.display = "inline-block";
    });

    let discos = document.getElementById("numDiscos");
    if (!discos.value) {
        noti.innerHTML = "Porfavor introduce algun valor";
    } else {
        if (discos.value > 5 || discos.value < 3) {
            noti.innerHTML = "El valor tiene que ser de 3 a 5";
        } else {
            //Si el usuario introduce un valor correcto empieza el codigo principal
            tower1.innerHTML = "";
            refillTower(tower2);
            refillTower(tower3);
            let filledRows = 0;
            //Con este for rellenamos la torre, ya sea con cajas de colores o vacias
            for (let x = 0; x < 5; x++) {
                /*Mientras el numero de cajas rellenadas sea menor que el valor
                que introducio el usuario ira rellenando la torre con colores*/
                if (filledRows < parseInt(discos.value)) {
                    tower1.innerHTML += "<div class='n" + (x + 1) + "'> " + (x + 1) + "</div>";
                    array1.push(x + 1);
                    filledRows++;
                } else {
                    /*En el caso de que ya este rellenado por completo se rellenara el resto
                    con espacios vacios*/
                    tower1.insertAdjacentHTML("afterbegin", "<div class='empty'></div>");
                    array1.push(0);
                }
                //rellenamos de valores vacios las otras torres
                array2[x] = 0;
                array3[x] = 0;
            }
        }
    }
}
//Mover de torre 1 a torre 2
document.getElementById("moveT1-2").onclick = function () {
    noti.innerHTML = "";
    if (firstNum(array1) > lastNum(array2) && lastNum(array2) != 0) {
        noti.innerHTML = "No puedes poner un numero mas grande que el numero de abajo";
    } else {
        addValueToArray(array1, array2);
        updateTower(1);
        updateTower(2);
    }
    winCondition()
}
//Mover de torre 1 a torre 3
document.getElementById("moveT1-3").onclick = function () {
    noti.innerHTML = "";
    if (firstNum(array1) > lastNum(array3) && lastNum(array3) != 0) {
        noti.innerHTML = "No puedes poner un numero mas grande que el numero de abajo";
    } else {
        addValueToArray(array1, array3);
        updateTower(1);
        updateTower(3);
    }
    winCondition()
}
//Mover de torre 2 a torre 1
document.getElementById("moveT2-1").onclick = function () {
    noti.innerHTML = "";
    if (firstNum(array2) > lastNum(array1) && lastNum(array1) != 0) {
        noti.innerHTML = "No puedes poner un numero mas grande que el numero de abajo";
    } else {
        addValueToArray(array2, array1);
        updateTower(2);
        updateTower(1);
    }
    winCondition()
}
//Mover de torre 2 a torre 3
document.getElementById("moveT2-3").onclick = function () {
    noti.innerHTML = "";
    if (firstNum(array2) > lastNum(array3) && lastNum(array3) != 0) {
        noti.innerHTML = "No puedes poner un numero mas grande que el numero de abajo";
    } else {
        addValueToArray(array2, array3);
        updateTower(2);
        updateTower(3);
    }
    winCondition()
}
//Mover de torre 3 a torre 1
document.getElementById("moveT3-1").onclick = function () {
    noti.innerHTML = "";
    if (firstNum(array3) > lastNum(array1) && lastNum(array1) != 0) {
        noti.innerHTML = "No puedes poner un numero mas grande que el numero de abajo";
    } else {
        addValueToArray(array3, array1);
        updateTower(3);
        updateTower(1);
    }
    winCondition()
}
//Mover de torre 3 a torre 2
document.getElementById("moveT3-2").onclick = function () {
    noti.innerHTML = "";
    if (firstNum(array3) > lastNum(array2) && lastNum(array2) != 0) {
        noti.innerHTML = "No puedes poner un numero mas grande que el numero de abajo";
    } else {
        addValueToArray(array3, array2);
        updateTower(3);
        updateTower(2);
    }
    winCondition()
}
//Rellenar torre con relleno
function refillTower(t) {
    t.innerHTML = "";
    for (let x = 0; x < 5; x++) {
        t.innerHTML += "<div class='empty'></div>";
    }
}
//Cojer el primer valor de un array y meterlo en el primer valor disponible del segundo
function addValueToArray(a1, a2) {
    let value;
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] != 0) {
            value = a1[i];
            a1[i] = 0;
            break;
        }
    }
    for (let i = 0; i < a2.length; i++) {
        if (a2[i] == 0 && i == value - 1) {
            a2[i] = value;
            break;
        }
    }
}
//Mostrar una torre en orden normal o inverso, depende del parametro action
function updateTower(towerNum) {
    let selectedT;
    let array;
    switch (towerNum) {
        case 1:
            selectedT = tower1;
            array = array1;
            break;
        case 2:
            selectedT = tower2;
            array = array2;
            break;
        case 3:
            selectedT = tower3;
            array = array3;
            break;
    }
    selectedT.innerHTML = "";
    for (let x = 0; x < 5; x++) {
        if (array[x] != 0) {
            selectedT.innerHTML += "<div class='n" + array[x] + "'> " + array[x] + "</div>";
        } else {
            selectedT.insertAdjacentHTML("afterbegin", "<div class='empty'></div>");
        }
    }
}
//Devuelve el primer valor de un array
function firstNum(array) {
    let num = 0;
    for (let i = 0; i < 5; i++) {
        if (array[i] != 0) {
            num = array[i];
            break;
        }
    }
    return num;
}
//Devuelve el ultimo valor de un array
function lastNum(array) {
    let num = 0;
    for (let i = 4; i >= 0; i--) {
        if (array[i] != 0) {
            num = array[i];
            break;
        }
    }
    return num;
}

function winCondition() {
    let win = true;
    for (let x = 0; x < 5; x++) {
        if (array1[x] != 0) {
            win = false
            break;
        }
    }
    if (win) {
        noti.innerHTML = "Has ganado! Felicidades!!!";
        let buttons = document.querySelectorAll(".buttons");
        buttons.forEach(function (button) {
            button.style.display = "none";
        });

    }
}
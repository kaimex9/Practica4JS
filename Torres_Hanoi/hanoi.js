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

//Rellenar torre con relleno
function refillTower(t) {
    t.innerHTML = "";
    for (let x = 0; x < 5; x++) {
        t.innerHTML += "<div class='empty'></div>";
    }
}

//Pulsar un boton de la torre1
document.getElementById("moveT1").onclick = function () {
    let action = document.getElementById("moveT1").value;
    if (action == "MUEVE A PILA 2") {
        //-----------------------------------------
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] != 0) {
                addValueToArray(array1, array2);
                constructTower(array1, 1);
                constructTower(array2, 2);
                break;
            }
        }
        console.log(array1);
        console.log(array2);
        //-----------------------------------------
    } else {

    }
}

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
        if (a2[i] == 0) {
            a2[i] = value;
            break;
        }
    }
}

function constructTower(array, towerNum) {
    let selectedT;
    switch (towerNum) {
        case 1:
            selectedT = tower1;
            break;
        case 2:
            selectedT = tower2;
            break;
        case 3:
            selectedT = tower3;
            break;
    }
    selectedT.innerHTML = "";
    for (let x = 0; x < 5; x++) {
        if (array[x] != 0) {
            selectedT.innerHTML += "<div class='n" + (x + 1) + "'> " + (x + 1) + "</div>";
        } else {
       
            selectedT.insertAdjacentHTML("afterbegin", "<div class='empty'></div>");
        }
    }
}
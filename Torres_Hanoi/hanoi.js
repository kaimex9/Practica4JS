let tower1 = document.getElementById("tower1");
let tower2 = document.getElementById("tower2");
let tower3 = document.getElementById("tower3");
document.getElementById("start").onclick = function () {
    let discos = document.getElementById("numDiscos");
    let noti = document.getElementById("notification");
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
                    filledRows++;
                } else {
                    /*En el caso de que ya este rellenado por completo se rellenara el resto
                    con espacios vacios*/
                    tower1.insertAdjacentHTML("afterbegin", "<div class='empty'></div>");
                }
            }
        }
    }
}

function refillTower(t) {
    t.innerHTML = "";
    
}
/* Acá va tu código */
document.getElementById("pagina2").style.display = "none";
document.getElementById("pagina3").style.display = "none";
document.getElementById("pagina4").style.display = "none";
document.getElementById("pagina5").style.display = "none";
document.getElementById("pagina6").style.display = "none";
document.getElementById("pagina7").style.display = "none";
document.getElementById("pagina8").style.display = "none";
document.getElementById("pagina9").style.display = "none";
document.getElementById("pagina10").style.display = "none";
document.getElementById("pagina11").style.display = "none";

document.getElementById("hb").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("continuar").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "block";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";

})
document.getElementById("regresar").addEventListener("click", () => {
    document.getElementById("root").style.display = "block";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("cerrar").addEventListener("click", () => {
    window.close();
})

let palabra; //texto a descifrar
let desplazamiento; //offset
let nuevaPalabra1;

document.getElementById("cifrar").addEventListener("click", () => {
    palabra = document.getElementById("texto1").value;
    desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    nuevaPalabra1 = cipher.encode(palabra, desplazamiento);
    document.getElementById("texto2").innerHTML = nuevaPalabra1;
});

let palabraDescifrar; //texto a descifrar
let nuevaPalabraDescifrar1;

document.getElementById("descifrar").addEventListener("click", () => {
    palabraDescifrar = document.getElementById("texto1").value;
    desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    nuevaPalabraDescifrar1 = cipher.decode(palabraDescifrar, desplazamiento);
    document.getElementById("texto2").innerHTML = nuevaPalabraDescifrar1;
});

document.getElementById("travels").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "block";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("continuar1").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "block";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("regresarTravels").addEventListener("click", () => {
    document.getElementById("root").style.display = "block";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("cerrarTravels").addEventListener("click", () => {
    window.close();
})

let palabraTravels; //texto a descifrar
let desplazamientoTravels; //offset
let nuevaPalabraTravels;

document.getElementById("cifrarTravels").addEventListener("click", () => {
    palabraTravels = document.getElementById("textoTravels1").value;
    desplazamientoTravels = parseInt(document.getElementById("desplazamientoTravels").value);
    nuevaPalabraTravels = cipher.encode(palabraTravels, desplazamientoTravels);
    document.getElementById("textoTravels2").innerHTML = nuevaPalabraTravels;
});

let palabraDescifrarTravels; //texto a descifrar
let nuevaPalabraDescifrarTravels1;

document.getElementById("descifrarTravels").addEventListener("click", () => {
    palabraDescifrarTravels = document.getElementById("textoTravels1").value;
    desplazamientoTravels = parseInt(document.getElementById("desplazamientoTravels").value);
    nuevaPalabraDescifrarTravels1 = cipher.decode(palabraDescifrarTravels, desplazamientoTravels);
    document.getElementById("textoTravels2").innerHTML = nuevaPalabraDescifrarTravels1;
});

document.getElementById("love").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "block";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("continuar2").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "block";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("regresarLove").addEventListener("click", () => {
    document.getElementById("root").style.display = "block";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("cerrarLove").addEventListener("click", () => {
    window.close();
})

let palabraLove; //texto a descifrar
let desplazamientoLove; //offset
let nuevaPalabraLove;

document.getElementById("cifrarLove").addEventListener("click", () => {
    palabraLove = document.getElementById("textoLove1").value;
    desplazamientoLove = parseInt(document.getElementById("desplazamientoLove").value);
    nuevaPalabraLove = cipher.encode(palabraLove, desplazamientoLove);
    document.getElementById("textoLove2").innerHTML = nuevaPalabraLove;
});

let palabraDescifrarLove; //texto a descifrar
let nuevaPalabraDescifrarLove1;

document.getElementById("descifrarLove").addEventListener("click", () => {
    palabraDescifrarLove = document.getElementById("textoLove1").value;
    desplazamientoLove = parseInt(document.getElementById("desplazamientoLove").value);
    nuevaPalabraDescifrarLove1 = cipher.decode(palabraDescifrarLove, desplazamientoLove);
    document.getElementById("textoLove2").innerHTML = nuevaPalabraDescifrarLove1;
});

document.getElementById("secrets").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "block";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("continuar3").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "block";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("regresarSecreto").addEventListener("click", () => {
    document.getElementById("root").style.display = "block";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("cerrarSecreto").addEventListener("click", () => {
    window.close();
})

let palabraSecreto; //texto a descifrar
let desplazamientoSecreto; //offset
let nuevaPalabraSecreto;

document.getElementById("cifrarSecreto").addEventListener("click", () => {
    palabraSecreto = document.getElementById("textoSecreto1").value;
    desplazamientoSecreto = parseInt(document.getElementById("desplazamientoSecreto").value);
    nuevaPalabraSecreto = cipher.encode(palabraSecreto, desplazamientoSecreto);
    document.getElementById("textoSecreto2").innerHTML = nuevaPalabraSecreto;
});

let palabraDescifrarSecreto; //texto a descifrar
let nuevaPalabraDescifrarSecreto1;

document.getElementById("descifrarSecreto").addEventListener("click", () => {
    palabraDescifrarSecreto = document.getElementById("textoSecreto1").value;
    desplazamientoSecreto = parseInt(document.getElementById("desplazamientoSecreto").value);
    nuevaPalabraDescifrarSecreto1 = cipher.decode(palabraDescifrarSecreto, desplazamientoSecreto);
    document.getElementById("textoSecreto2").innerHTML = nuevaPalabraDescifrarSecreto1;
});

document.getElementById("others").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "block";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("continuar4").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "block";
})

document.getElementById("regresarOtro").addEventListener("click", () => {
    document.getElementById("root").style.display = "block";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina8").style.display = "none";
    document.getElementById("pagina9").style.display = "none";
    document.getElementById("pagina10").style.display = "none";
    document.getElementById("pagina11").style.display = "none";
})

document.getElementById("cerrarOtro").addEventListener("click", () => {
    window.close();
})

let palabraOtro; //texto a descifrar
let desplazamientoOtro; //offset
let nuevaPalabraOtro;

document.getElementById("cifrarOtro").addEventListener("click", () => {
    palabraOtro = document.getElementById("textoOtro1").value;
    desplazamientoOtro = parseInt(document.getElementById("desplazamientoOtro").value);
    nuevaPalabraOtro = cipher.encode(palabraOtro, desplazamientoOtro);
    document.getElementById("textoOtro2").innerHTML = nuevaPalabraOtro;
});

let palabraDescifrarOtro; //texto a descifrar
let nuevaPalabraDescifrarOtro1;

document.getElementById("descifrarOtro").addEventListener("click", () => {
    palabraDescifrarOtro = document.getElementById("textoOtro1").value;
    desplazamientoOtro = parseInt(document.getElementById("desplazamientoOtro").value);
    nuevaPalabraDescifrarOtro1 = cipher.decode(palabraDescifrarOtro, desplazamientoOtro);
    document.getElementById("textoOtro2").innerHTML = nuevaPalabraDescifrarOtro1;
});
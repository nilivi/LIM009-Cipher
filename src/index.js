/* Acá va tu código */
document.getElementById("pagina2").style.display = "none";
document.getElementById("pagina3").style.display = "none";
document.getElementById("pagina4").style.display = "none";
document.getElementById("pagina5").style.display = "none";

document.getElementById("hb").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
})

document.getElementById("continuar").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "block";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
})
document.getElementById("regresar").addEventListener("click", () => {
    document.getElementById("root").style.display = "block";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
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
})

document.getElementById("continuar1").addEventListener("click", () => {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "block";
})

document.getElementById("regresarTravels").addEventListener("click", () => {
    document.getElementById("root").style.display = "block";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "none";
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
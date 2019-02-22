/* Acá va tu código */
document.getElementById("pagina2").style.display = "none";
document.getElementById("pagina3").style.display = "none";

function hb() {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
}
 function continuar() {
    document.getElementById("root").style.display = "none";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "block";
 }
 function regresar() {
    document.getElementById("root").style.display = "block";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
 }
 function cerrar() {
    window.close();
  }

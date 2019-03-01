window.cipher = {
  encode: (palabra, desplazamiento) => {
    let ascii;
    let nuevaPalabra = "";

    for (let i = 0; i < palabra.length; i++) {

      ascii = palabra.charCodeAt(i);
      if (ascii === 32) {
        let palabraCifrada = String.fromCharCode(ascii);
        nuevaPalabra += palabraCifrada
      }

      else if (ascii >= 65 && ascii <= 90) {
       let nuevoAscii = ((ascii - 65 + desplazamiento) % 26 + 65);
        let palabraCifrada = String.fromCharCode(nuevoAscii);
        nuevaPalabra += palabraCifrada
      }
      else if (ascii >= 97 && ascii <= 122) {
        let nuevoAscii = ((ascii - 97 + desplazamiento) % 26 + 97);
        let palabraCifrada = String.fromCharCode(nuevoAscii);
        nuevaPalabra += palabraCifrada

      } else if (ascii >= 48 && ascii <= 57) {
       let nuevoAscii = ((ascii - 48 + desplazamiento) % 10 + 48);
       let palabraCifrada = String.fromCharCode(nuevoAscii);
        nuevaPalabra += palabraCifrada

      } else if (ascii >= 33 && ascii <= 47) {
       let nuevoAscii = ((ascii - 33 + desplazamiento) % 15 + 33);
       let palabraCifrada = String.fromCharCode(nuevoAscii);
        nuevaPalabra += palabraCifrada
      }

    } return nuevaPalabra;
  },
  decode: (palabraDescifrar, desplazamiento) => {
    let asciiDescifrar;
    let nuevaPalabraDescifrar = "";

    for (let i = 0; i < palabraDescifrar.length; i++) {

      asciiDescifrar = palabraDescifrar.charCodeAt(i);
      if (asciiDescifrar === 32) {
        let palabraDescifrada = String.fromCharCode(asciiDescifrar);
        nuevaPalabraDescifrar += palabraDescifrada
      }

      else if (asciiDescifrar >= 65 && asciiDescifrar <= 90) {
        let nuevoAsciiDescifrar = ((asciiDescifrar + 65 - desplazamiento) % 26 + 65);
       let palabraDescifrada = String.fromCharCode(nuevoAsciiDescifrar);
        nuevaPalabraDescifrar += palabraDescifrada
      }
      //(97+x-1)%26+97=122
      else if (asciiDescifrar >= 65 && asciiDescifrar <= 122) {
        let nuevoAsciiDescifrar = ((asciiDescifrar + 111 - desplazamiento) % 26 + 97);
        let palabraDescifrada = String.fromCharCode(nuevoAsciiDescifrar);
        nuevaPalabraDescifrar += palabraDescifrada

      }
    } return nuevaPalabraDescifrar;
  } 
}; 

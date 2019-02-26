window.cipher = {
  encode: (palabra, desplazamiento) => {
    let ascii;
    let nuevaPalabra="";

    for (let i=0; i < palabra.length; i++) {
    
      ascii = palabra.charCodeAt(i);
      if(ascii === 32){
          let palabraCifrada = String.fromCharCode(ascii);
             nuevaPalabra += palabraCifrada
      }
    
        else if (ascii >= 65 && ascii<=90){
          nuevoAscii=((ascii-65+desplazamiento)%26+65);
          palabraCifrada=String.fromCharCode(nuevoAscii);
          nuevaPalabra += palabraCifrada
        }
        else if(ascii>= 97 && lascii<= 122){
          nuevoAscii = ((ascii - 97 + desplazamiento) % 26 + 97);
          palabraCifrada = String.fromCharCode(nuevoAscii);
          nuevaPalabra += palabraCifrada

        }else if(ascii >= 48 && ascii <= 57){
          nuevoAscii = ((ascii - 48 + desplazamiento) % 10 + 48);
          palabraCifrada= String.fromCharCode(nuevoAscii);
          nuevaPalabra += palabraCifrada

        }else if(ascii>= 33 && ascii <= 47){
          nuevoAscii = ((ascii - 33 + desplazamiento) % 15 + 33);
          palabraCifrada = String.fromCharCode(nuevoAscii);
          nuevaPalabra += palabraCifrada
        }
        
      } return nuevaPalabra;
  },
  decode: () => {
    /* Acá va tu código */
  }
};


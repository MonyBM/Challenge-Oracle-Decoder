function encriptarTexto(texto){

    arrayTexto = [];
    var largoDocumento = texto.length;
    
   
    for(var indiceDocumento = 0; indiceDocumento < largoDocumento; indiceDocumento++){
        arrayTexto.push(texto.charAt(indiceDocumento));
    }
    
    var largoArray = arrayTexto.length;

  
    for(var indiceArray = 0; indiceArray < largoArray; indiceArray++){
        if(arrayTexto[indiceArray] == 'e'){
            arrayTexto.splice(indiceArray, 1, 'enter');
        }else if(arrayTexto[indiceArray] == 'i'){
            arrayTexto.splice(indiceArray, 1, 'imes');
        }else if(arrayTexto[indiceArray] == 'a'){
            arrayTexto.splice(indiceArray, 1, 'ai');
        }else if(arrayTexto[indiceArray] == 'o'){
            arrayTexto.splice(indiceArray, 1, 'ober');
        }else if(arrayTexto[indiceArray] == 'u'){
            arrayTexto.splice(indiceArray, 1, 'ufat');
        }
    }

    var documentoEncriptado = "".concat(...arrayTexto);
   
    console.log(documentoEncriptado);
    var textoExit = document.querySelector("#msg");
    textoExit.value = documentoEncriptado;
}

function desencriptarDocumento(texto){
 
    var documentoDesencriptado = texto.replace(/ai/g,'a');
    documentoDesencriptado = documentoDesencriptado.replace(/enter/g,'e');
    documentoDesencriptado = documentoDesencriptado.replace(/imes/g,'i');
    documentoDesencriptado = documentoDesencriptado.replace(/ober/g,'o');
    documentoDesencriptado = documentoDesencriptado.replace(/ufat/g,'u');

    console.log(documentoDesencriptado);
    var documentoExit = document.querySelector("#msg");
    documentoExit.value = documentoDesencriptado;
}

var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto").value;
    encriptarTexto(textoEntrada);
});

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto").value;
    desencriptarTexto(textoEntrada);
});

function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
}  
document.querySelector("#btn-copy").addEventListener("click", copy);

function limpiar(input){
    input.value= "";
}

var botonLimpiarEntrada = document.querySelector("#btn-limpiarEntrada");
botonLimpiarEntrada.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto");
    limpiar(textoEntrada);
});

var botonLimpiarSalida = document.querySelector("#btn-limpiarSalida");
botonLimpiarSalida.addEventListener("click",function(event){
    event.preventDefault();
    var textoSalida = document.querySelector("#msg");
    limpiar(textoSalida);
});
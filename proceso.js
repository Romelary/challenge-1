var botonencriptar = document.querySelector(".boton-encriptar");
var botondesencriptar = document.querySelector(".boton-desencriptar");

var muneco = document.querySelector(".cajademuneco");
var aviso = document.querySelector(".avisoh3");
var parrafo = document.querySelector(".contenedor-de-texto");
var producto = document.querySelector(".texto-producto")
botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;

function encriptar(){
    
    ocultar();
    producto.textContent = encriptartexto(obtenertexto())
}

function desencriptar(){
    ocultar();
    producto.textContent = desencriptartexto(obtenertexto())

}
function obtenertexto(){
    var texto = document.querySelector(".texto");
    return texto.value;
}
function ocultar(){
    muneco.classList.add("ocultar");
    aviso.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptartexto(mensaje){
    var mensajetxt =mensaje;
    var textoprod = "";
        for(var i=0; i<mensajetxt.length;i++){
            if(mensaje[i]=="a"){
                textoprod = textoprod + "ai"
            }
            else if(mensaje[i]=="e"){
                textoprod = textoprod + "enter"
            }
            else if(mensaje[i]=="i"){
                textoprod = textoprod + "imes"
            }
            else if(mensaje[i]=="o"){
                textoprod = textoprod + "ober"
            }
            else if(mensaje[i]=="u"){
                textoprod = textoprod + "ufat"
            }
            else{
                textoprod = textoprod + mensajetxt[i];
            }

        }
        return textoprod;

}

function desencriptartexto(mensaje){
    var mensajetxt =mensaje;
    var textoprod = "";
        for(var i=0; i<mensajetxt.length;i++){
            if(mensaje[i]=="a"){
                textoprod = textoprod + "a"
                i=i+1;
            }
            else if(mensaje[i]=="e"){
                textoprod = textoprod + "e"
                i=i+4;
            }
            else if(mensaje[i]=="i"){
                textoprod = textoprod + "i"
                i=i+3;
            }
            else if(mensaje[i]=="o"){
                textoprod = textoprod + "o"
                i=i+3;
            }
            else if(mensaje[i]=="u"){
                textoprod = textoprod + "u"
                i=i+3;
            }
            else{
                textoprod = textoprod + mensajetxt[i];
            }

        }
        return textoprod;

}
const btnCopiar = document.querySelector(".boton-copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var mensajetxt = document.querySelector(".texto-producto").textContent;
    navigator.clipboard.writeText(mensajetxt);
    console.log("copied");
})
import { traduccionEspAho, traduccionAhoEsp, diccionarioDatos } from './data.js';
import { isLoggedIn } from './funciones.js';

if(!isLoggedIn()) {
    window.location.href = 'login.html';
}

// Se obtienen los elementos del DOM mediante su ID
const lang1 = document.getElementById("len1");  // Elemento que muestra el primer idioma
const lang2 = document.getElementById("len2");  // Elemento que muestra el segundo idioma
const swapLang = document.getElementById("swapLang");  // Botón para intercambiar idiomas
const textArea1 = document.getElementById("txtArea1");  // Área de texto para el primer idioma
const textArea2 = document.getElementById("txtArea2");  // Área de texto para el segundo idioma

// Se agrega un evento "click" al botón de intercambio de idiomas
swapLang.addEventListener("click", () => {
    // Se guardan los textos actuales de los idiomas mostrados en los elementos lang1 y lang2
    let textl1 = lang1.innerHTML; 
    let textl2 = lang2.innerHTML;

    // Se intercambian los textos entre los elementos lang1 y lang2
    lang1.innerHTML = textl2;
    lang2.innerHTML = textl1;

    // Se guardan los valores actuales de los campos de texto
    let cont1 = textArea1.value;
    let cont2 = textArea2.value;

    // Si ambos campos tienen texto, se intercambian los contenidos
    if (cont1 !== "" && cont2 !== ""){
        textArea1.value = cont2;
        textArea2.value = cont1;
    } else {
        // Si alguno de los campos está vacío, el campo del segundo idioma se limpia
        textArea2.value = "";
    }

    // Si el idioma del primer campo es español, se cambian los placeholders de las áreas de texto
    if (lang1.innerHTML == "Español"){
        textArea1.setAttribute("placeholder", "Texto en Español");
        textArea2.setAttribute("placeholder", "Texto traducido en Aho-coracick");
    } else {
        // Si el idioma no es español, los placeholders son cambiados en consecuencia
        textArea1.setAttribute("placeholder", "Texto en Aho-coracick");
        textArea2.setAttribute("placeholder", "Texto traducido en Español");
    }
})


// Se obtiene el botón de traducción y el contenedor de errores
const traslateBtn = document.getElementById("traBtn");

// Se obtiene el modal para mostrar errores y el contenedor del mensaje de error
const alertError = document.querySelector(".container-modal");
const contError = document.getElementById("msg-error");

// Se agrega un evento de "click" al botón de traducción
traslateBtn.addEventListener("click", () => {
    // Se toma el texto de textArea1, se recorta los espacios extra y se divide en palabras
    let textoO = textArea1.value.trim().split(" ");
    let textoT = [];  // Aquí se almacenarán las palabras traducidas
    
    // Se recorre cada palabra del texto original
    for (let wor of textoO){
        if (lang1.innerHTML == "Español"){  // Si el idioma original es Español
            
            // Se verifica si la palabra existe en el diccionario de traducción de Español a Aho-coracick
            if ((wor in traduccionEspAho)){
                textoT.push(traduccionEspAho[wor]);  // Se agrega la traducción
            } else {
                // Si no existe la traducción, se muestra un mensaje de error
                alertError.style.display = "flex";  // Se muestra el modal de error
                contError.innerHTML = `La palabra <strong>${wor}</strong> no existe. Si deseas agregarla, puedes hacerlo en la pestaña <a href="diccionario.html">diccionario</a>, donde podrás ingresar su traducción y significado.`;
                break;  // Se detiene el proceso al encontrar un error
            }
        } else {  // Si el idioma original no es Español (probablemente Aho-coracick)
            
            // Se verifica si la palabra existe en el diccionario de traducción de Aho-coracick a Español
            if ((wor in traduccionAhoEsp)){
                textoT.push(traduccionAhoEsp[wor]);  // Se agrega la traducción
            } else {
                // Si no existe la traducción, se muestra un mensaje de error
                alertError.style.display = "flex";  // Se muestra el modal de error
                contError.innerHTML = `La palabra <strong>${wor}</strong> no existe. Si deseas agregarla, puedes hacerlo en la pestaña <a href="diccionario.html">diccionario</a>, donde podrás ingresar su traducción y significado.`;
                break;  // Se detiene el proceso al encontrar un error
            }
        }
    }
    
    // Se actualiza el contenido de textArea2 con las palabras traducidas
    textArea2.value = textoT.join(" ");
})


const textArea3 = document.getElementById("significado");
const wordS = document.getElementById("wordS");
const wordA = document.getElementById("wordA");

textArea1.addEventListener("input", function() {
    let textoO = textArea1.value.trim().split(" ");
    textArea3.value = "";

    if (textoO == ""){
        console.log("pass");

        wordA.style.display = "none";
        
        textArea3.setAttribute("placeholder", "Definición de la última palabra");
        
    }else{
        let lastWord = textoO[textoO.length - 1];
        
        wordA.style.display = "inline";
        wordS.innerHTML = lastWord;

        lastWord = lastWord.toLowerCase();
        
        if (lang1.innerHTML == "Aho-coracick"){
            lastWord = traduccionAhoEsp[lastWord];
        }
        
        const ans = diccionarioDatos.find(item => item.termino == lastWord);
        
        if (ans){ textArea3.value = ans.definicion; }
        else{ textArea3.setAttribute("placeholder", "Palabra desconocida"); }
    }
});


const btnCerrarModal = document.querySelector(".btn-cerrar");
const fndCerrarModal = document.querySelector("#fnd");

btnCerrarModal.addEventListener("click", () =>{
    alertError.style.display = "none";
})
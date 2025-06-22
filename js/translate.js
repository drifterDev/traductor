import { traduccionEspAho, traduccionAhoEsp, diccionarioDatos } from './data.js';
import { isLoggedIn } from './funciones.js';

if(!isLoggedIn()) {
    window.location.href = 'login.html';
}

const lang1 = document.getElementById("len1");
const lang2 = document.getElementById("len2");
const swapLang = document.getElementById("swapLang");
const textArea1 = document.getElementById("txtArea1");
const textArea2 = document.getElementById("txtArea2");

swapLang.addEventListener("click", () => {
    let textl1 = lang1.innerHTML; 
    let textl2 = lang2.innerHTML;

    lang1.innerHTML = textl2;
    lang2.innerHTML = textl1;

    let cont1 = textArea1.value;
    let cont2 = textArea2.value;

    if (cont1 !== "" && cont2 !== ""){
        textArea1.value = cont2;
        textArea2.value = cont1;
    }else{
        textArea2.value = "";
    }

    if (lang1.innerHTML == "Español"){
        textArea1.setAttribute("placeholder", "Texto en Español");
        textArea2.setAttribute("placeholder", "Texto traducido en Aho-coracick");
    }else{
        textArea1.setAttribute("placeholder", "Texto en Aho-coracick");
        textArea2.setAttribute("placeholder", "Texto traducido en Español");
    }
})


const traslateBtn = document.getElementById("traBtn");

const alertError = document.querySelector(".container-modal");
const contError = document.getElementById("msg-error");

traslateBtn.addEventListener("click", () => {
    let textoO = textArea1.value.trim().split(" ");
    let textoT = [];
    
    for (let wor of textoO){
        if (lang1.innerHTML == "Español"){
            
            if ((wor in traduccionEspAho)){
                textoT.push(traduccionEspAho[wor]);
            }else{
                alertError.style.display = "flex";
                contError.innerHTML = `La palabra <strong>${wor}</strong> no existe. Si deseas agregarla, puedes hacerlo en la pestaña <a href="diccionario.html">diccionario</a>, donde podrás ingresar su traducción y significado.`;
                break;
            }
        }else{
            if ((wor in traduccionAhoEsp)){
                textoT.push(traduccionAhoEsp[wor]);
            }else{
                alertError.style.display = "flex";
                contError.innerHTML = `La palabra <strong>${wor}</strong> no existe. Si deseas agregarla, puedes hacerlo en la pestaña <a href="diccionario.html">diccionario</a>, donde podrás ingresar su traducción y significado.`;
                break;
            }
        }
    }
    
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
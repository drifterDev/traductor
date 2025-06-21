import { traduccionEspAho, traduccionAhoEsp } from './data.js';

const lang1 = document.getElementById("len1");
const lang2 = document.getElementById("len2");
const swapLang = document.getElementById("swapLang");

swapLang.addEventListener("click", () => {
    let textl1 = lang1.innerHTML; 
    let textl2 = lang2.innerHTML; 
    
    lang1.innerHTML = textl2;
    lang2.innerHTML = textl1;
    
    if (lang1.innerHTML == "Español"){
        textArea1.setAttribute("placeholder", "Texto en Español");
        textArea2.setAttribute("placeholder", "Texto traducido en Aho-coracick");
    }else{
        textArea1.setAttribute("placeholder", "Texto en Aho-coracick");
        textArea2.setAttribute("placeholder", "Texto traducido en Español");
    }
})


const textArea1 = document.getElementById("txtArea1");
const textArea2 = document.getElementById("txtArea2");
const traslateBtn = document.getElementById("traBtn");

traslateBtn.addEventListener("click", () => {
    let textoO = textArea1.value.trim().split(" ");
    let textoT = [];
    
    for (let wor of textoO){
        if (lang1.innerHTML == "Español"){
            
            if ((wor in traduccionEspAho)){
                textoT.push(traduccionEspAho[wor]);
            }else{
                alert(`La palabra ${wor} no existe, si desea agregar la palabra, en la pestaña diccionario podra poner su traducción y significado`);
                break;
            }
        }else{
            if ((wor in traduccionAhoEsp)){
                textoT.push(traduccionAhoEsp[wor]);
            }else{
                alert(`La palabra ${wor} no existe, si desea agregar la palabra, en la pestaña diccionario podra poner su traducción y significado`);
                break;
            }
        }
    }
    
    textArea2.value = textoT.join(" ");  
})

const textArea3 = document.getElementById("significado");
const labelSignificado = document.querySelector(".content-sig label");

textArea1.addEventListener("input", function() {
    let textoO = textArea1.value.trim().split(" ");
    
    if (textoO == ""){
        labelSignificado.innerHTML = "Definición:";
    }else{
        labelSignificado.innerHTML = "Definición:";
    }
    
});

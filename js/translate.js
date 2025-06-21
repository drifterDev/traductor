const lang1 = document.getElementById("len1");
const lang2 = document.getElementById("len2");
const swapLang = document.getElementById("swapLang");

swapLang.addEventListener("click", () => {
    let textl1 = lang1.innerHTML; 
    let textl2 = lang2.innerHTML; 

    lang1.innerHTML = textl2;
    lang2.innerHTML = textl1;

    
})

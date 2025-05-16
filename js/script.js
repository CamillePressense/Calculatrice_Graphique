const AFFICHAGE = document.querySelector("#affichage");
const RESET = document.querySelector("#reset");
const EGAL = document.querySelector("#egal");

const CHIFFRES = document.querySelectorAll("#chiffre");
const OPERATEURS = document.querySelectorAll("#operateur");

let resultat;
reset();

CHIFFRES.forEach((element) => {
 element.addEventListener("click", ()=>{
    AFFICHAGE.value += element.value;
    resultat += element.value;
    })
})

OPERATEURS.forEach((operateur) => {
    operateur.addEventListener("click", ()=>{
        resultat += operateur.value; 
        AFFICHAGE.value = "";    
    })
})

RESET.addEventListener("click", reset);

EGAL.addEventListener("click", () => {
    const calcul = eval(resultat)
    AFFICHAGE.value = calcul;
})

function reset(){
    AFFICHAGE.value = "";
    resultat = "";
}






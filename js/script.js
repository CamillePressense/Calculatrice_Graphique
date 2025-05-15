const AFFICHAGE = document.querySelector("#affichage");

const UN = document.querySelector("#un");
const DEUX = document.querySelector("#deux");
const TROIS = document.querySelector("#trois");
const QUATRE = document.querySelector("#quatre");
const CINQ = document.querySelector("#cinq");
const SIX = document.querySelector("#six");
const SEPT = document.querySelector("#sept");
const HUIT = document.querySelector("#huit");
const NEUF = document.querySelector("#neuf");

const CHIFFRES = [UN, DEUX, TROIS, QUATRE, CINQ, SIX, SEPT, HUIT, NEUF];

CHIFFRES.forEach((element) => {
 element.addEventListener("click", ()=>{
    AFFICHAGE.value = element.value;
    })
})

//Quand on clique sur + on récupère la valeur de affichage 
//Quand on clique sur = on récupère la valeur de affichage et on l'additionne à la première
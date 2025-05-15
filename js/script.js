const AFFICHAGE = document.querySelector("#affichage");
const RESET = document.querySelector("#reset");

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
    AFFICHAGE.value += element.value;
    })
})

RESET.addEventListener("click", reset);


let premierNombre;
let secondNombre;
reset();

//Quand on clique sur + on récupère la valeur de affichage 
document.querySelector("#plus").addEventListener("click", () =>{
    premierNombre = Number(AFFICHAGE.value);
    AFFICHAGE.value = "";
    })

//Quand on clique sur = on récupère la valeur de affichage et on l'additionne à la première
document.querySelector("#egal").addEventListener("click", () => {
    const secondNombre = Number(AFFICHAGE.value);
    const resultat = premierNombre + secondNombre;
    AFFICHAGE.value = resultat;
})


function reset(){
    AFFICHAGE.value = "";
    premierNombre = "";
    secondNombre = "";
}


/* function calculer(operation){
    //si c'est un +
    
} */
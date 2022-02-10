const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const anteprime = document.getElementById("anteprime");
const contenitoreAnteprime = [];

for(let i = 0; i < items.length; i++){
    const anteprima = document.createElement("figure");
    const anteprimaImg = document.createElement("img");
    
    anteprimaImg.src = items[i];
    anteprima.append(anteprimaImg);
    // console.dir(anteprimaImg);

    contenitoreAnteprime.push(anteprima);
    anteprime.append(anteprima);

}
console.log(contenitoreAnteprime)


let fotoCorrente = 0;

contenitoreAnteprime[fotoCorrente].classList.add("active");

const arrowDown = document.querySelector(".arrow-down");

const contenitorePrincipale = document.getElementById("contenitore-principale");
const descrizione = document.querySelector(".descrizione");

const fotoPrincipale = document.createElement("img");
fotoPrincipale.src = items[fotoCorrente];
contenitorePrincipale.append(fotoPrincipale);

const titoloFoto = document.createElement("h3");
const paragrafoFoto = document.createElement("p");
titoloFoto.append(title[fotoCorrente]);
paragrafoFoto.append(text[fotoCorrente]);

descrizione.append(titoloFoto);
descrizione.append(paragrafoFoto);


arrowDown.addEventListener("click", function(){
    if(fotoCorrente < items.length -1){
        contenitoreAnteprime[fotoCorrente].classList.remove("active");
        fotoCorrente++;
        contenitoreAnteprime[fotoCorrente].classList.add("active");
    }
})

const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", function(){
    if(fotoCorrente>0){
        contenitoreAnteprime[fotoCorrente].classList.remove("active");
        fotoCorrente--;
        contenitoreAnteprime[fotoCorrente].classList.add("active");
    }
})
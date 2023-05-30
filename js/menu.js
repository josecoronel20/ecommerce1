const ham = document.querySelector(".open");
const x = document.querySelector(".close");
const ul = document.querySelector(".ul");


open = () => {
    ul.classList.add("visible");
}

close = () => {
    ul.classList.remove("visible");
}

ham.addEventListener("click", open);

x.addEventListener("click", close);

const favOpen = document.querySelector(".favOpen");
const favClose = document.querySelector(".favClose");
const favContainer = document.querySelector(".favContainer");

const cartOpen = document.querySelector(".cartOpen");
const cartClose = document.querySelector(".cartClose");
const cartContainer = document.querySelector(".cartContainer");

//fav-------------------
function abrirFav() {
    favContainer.classList.add("displayFlex");
    favOpen.classList.add("displayNone");
    favClose.classList.add("displayFlex");
};

function cerrarFav() {
    favContainer.classList.remove("displayFlex");
    favOpen.classList.remove("displayNone");
    favClose.classList.remove("displayFlex");
};

favOpen.addEventListener("click", abrirFav);

favClose.addEventListener("click", cerrarFav);

//cart---------------------

function abrirCart() {
    cartContainer.classList.add("displayFlex");
    cartOpen.classList.add("displayNone");
    cartClose.classList.add("displayFlex");
}

function cerrarCart() {
    cartContainer.classList.remove("displayFlex");
    cartOpen.classList.remove("displayNone");
    cartClose.classList.remove("displayFlex");
}

cartOpen.addEventListener("click", abrirCart);

cartClose.addEventListener("click", cerrarCart);



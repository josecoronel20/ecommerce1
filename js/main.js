// alert(`¡Alerta importante! Esta página web no es oficial y ha sido creada únicamente con fines educativos.`)

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


// let nombre = prompt("Hola! Bienvenido a nuestra tienda de deportes, como es tu nombre?");

// let edad = parseInt(prompt(`Mucho gusto ${nombre}, a continuación necesitamos que ingreses tu edad`));

// if(edad < 18){
//     alert("Puedes continuar con la compra únicamente acompañado de un adulto");
// }else{
//     alert("Puedes continuar con la compra sin problemas");
// }

// for (let contador = 3; contador > 0; contador--) {
//     alert(`su compra comienza en ${contador}`)
// }

// alert(`a continuación ingrese el tipo de pelota que quiera comprar, en stock tenemos pelotas de volley, basquet, futbol y rugby`);


// let deporte = prompt(`ingrese "pelota de (deporte)" para saber el precio de la pelota o "ESC" para terminar.`);

// while(deporte != "ESC"){
//     switch (deporte) {
//                 case "pelota de volley":
//                     alert(`la pelota de volley tiene un valor de $1000`);
//                     break;

//                     case "pelota de rugby":
//                         alert(`la pelota de rugby tiene un valor de $1500`);
//                         break;

//                     case "pelota de futbol":
//                         alert(`la pelota de futbol tiene un valor de $2000`);
//                     break;

//                     case "pelota de basquet":
//                         alert(`la pelota de basquet tiene un valor de $700`);
//                     break;

//                 default:
//                     alert(`No tenemos stock de pelotas de ese tipo`);
//                     break;
//                 }
//     deporte = prompt(`ingrese "pelota de (deporte)" para saber el precio de la pelota o "ESC" para terminar.`);
// }

// let pelota = prompt("ahora que sabes los precios de las pelotas, la de qué deporte quieres comprar? ingresa solo el deporte:");

// let cantidad = parseInt(prompt(`Cúantas pelotas de ${pelota} quieres comprar?`));

// var total = 0;

// switch (pelota) {
//     case "volley":
//         total = cantidad * 1000;
//         alert(`el total de tu compra es de $${total} por la compra de ${cantidad} pelotas de ${pelota}`);
//         break;

//     case "rugby":
//         total = cantidad * 1500;
//         alert(`el total de tu compra es de $${total} por la compra de ${cantidad} pelotas de ${pelota}`);
//         break;

//     case "futbol":
//         total = cantidad * 2000;
//         alert(`el total de tu compra es de $${total} por la compra de ${cantidad} pelotas de ${pelota}`);
//         break;

//     case "basquet":
//         total = cantidad * 700;
//         alert(`el total de tu compra es de $${total} por la compra de ${cantidad} pelotas de ${pelota}`);
//         break;

//     default:
//         break;
// }

// function despedida() {
//     alert(`muchas gracias por tu compra, vuelve pronto ${nombre}`);
// }
// despedida();



//segunda pre entrega-----------------------------------------------------------------
//segunda pre entrega-----------------------------------------------------------------
//segunda pre entrega-----------------------------------------------------------------



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

//productos

let containerCard = document.querySelector(".containerCards");
let carousel = document.querySelector(".carousel");

let productos = [
    { id: 1, nombre: "pelota", precio: 1000 },
    { id: 2, nombre: "zapatillas Hombre", precio: 700 },
    { id: 3, nombre: "zapatillas Mujer", precio: 700 },
    { id: 4, nombre: "camiseta Hombre", precio: 850 },
    { id: 5, nombre: "camiseta Mujer", precio: 850 },
    { id: 6, nombre: "rodilleras", precio: 900 },
];



// let nombre = prompt("escribe el nombre de algun producto para verificar si hay stock");
// const encontrado = productos.filter(item => item.nombre.includes(nombre));

// encontrado.forEach(item => {
//     let mensaje = `
//     id: ${item.id}
//     nombre del producto ${item.nombre}
//     precio: $${item.precio}
//     `;

//     alert(mensaje);
// })





productos.forEach(item => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
                    <img src="img/${item.id}.png" alt="">
                    
                    <div class="cardInfo">
                    <svg class="fav" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="#006396"
                                d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                        </svg>
                    <div class="cardText">
                        <h4>${item.nombre}</h4>
                        <p>$${item.precio}</p>
                        <button class="button">Agregar al carrito</button>
                    </div>
                    </div>
    `;

    carousel.append(card);
});




//slider cateogrias----------------------------------------------------------


const preArrow = document.querySelector('.preArrow');
const nextArrow = document.querySelector('.nextArrow');

scrollToRight = () => {
    carousel.scrollLeft += 200;
}

scrollToLeft = () => {
    carousel.scrollLeft -= 200;
}

nextArrow.addEventListener('click', scrollToRight)
preArrow.addEventListener('click', scrollToLeft)

    //todavia no funciona el slider, tengo que trabajar en la seccion del carrito, la de favoritos, la del producto individual, las pages que faltan crear, pero agregué lo escencial que son las Cards.

let buttonCategoria = document.querySelectorAll(".buttonCategoria");
let buttonCarrito = document.querySelectorAll(".buttonCarrito");
let numeritoCart = document.querySelector(".numeritoCart");
let deleteProduct = document.querySelectorAll(".deleteProduct");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const ham = document.querySelector(".open");
const x = document.querySelector(".close");
const ul = document.querySelector(".ul");
const cartOpen = document.querySelector(".cartOpen");
const cartClose = document.querySelector(".cartClose");
const cartContainer = document.querySelector(".cartContainer");


open = () => {
    ul.classList.add("visible");
}

close = () => {
    ul.classList.remove("visible");
}

ham.addEventListener("click", open);

x.addEventListener("click", close);

cartOpen.addEventListener("click", () => {
    cartContainer.classList.toggle("displayFlex");
});

//cart
//cart
//cart
//cart

function actualizarNumeritoCart() {
    let nuevoNumeritoCart = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);

    numeritoCart.innerHTML = ` `;
    let numerito = document.createElement("p");
    numerito.classList.add("numerito");
    numerito.innerHTML = `
    <p>${nuevoNumeritoCart}</p>
    `;

    numeritoCart.append(numerito);
}
actualizarNumeritoCart();

while (carrito.lenght = 0) {
    

}

function agregarProductos() {
    cartContainer.innerHTML = "<button class=\"buttonBuy comprar\">Comprar</button>";

    let carritoVacio = document.createElement("div");
    carritoVacio.classList.add("carritoVacio");
    carritoVacio.innerHTML = `
    El carrito está vacío :c
    `;

    cartContainer.append(carritoVacio);

    
    let vaciarCarrito = document.createElement("div");
    vaciarCarrito.classList.add("displayNone");
    vaciarCarrito.innerHTML = `
    <button class=\"buttonBuy vaciarCarritoButton\">vaciar carrito</button>
    `;
    
    cartContainer.append(vaciarCarrito);

    let vaciarCarritoButton = document.querySelector(".vaciarCarritoButton");
    vaciarCarritoButton.addEventListener("click", () => {
        carrito = [];
        agregarProductos();
        Swal.fire({
            title: 'El carrito se vació',
            icon: 'warning',
            timer: 1000,
            showConfirmButton: false,
        });
    })
    
    if (carrito.length != 0){
        carritoVacio.classList.add("displayNone");
        vaciarCarrito.classList.remove("displayNone");
    }

    let comprar = document.querySelector(".comprar");
    comprar.addEventListener("click", () => {
        Swal.fire({
            icon: 'success',
            title: 'Genial!',
            text: 'Tu compra se realizó con exito',
        });
        cartContainer.classList.remove("displayFlex");

        carrito = [];

        agregarProductos();
        actualizarNumeritoCart();
    })

    carrito.forEach(item => {

        const cardCart = document.createElement("div");
        cardCart.classList.add("cardCart");
        cardCart.innerHTML = `
            <img src="../img/${item.id}.png" alt="">
        
            <div class="cardInfo">
                <div class="cardText">
                    <h4>${item.nombre}</h4>
                    <p>$${item.precio}</p>
                </div>
            </div>
            <p>Cantidad: ${item.cantidad}</p>

            <div>
            <svg class="deleteProduct" id="${item.id}" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                viewBox="0 0 256 256">
                <path fill="#006396"
                    d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" />
            </svg></div>
                `;

        cartContainer.append(cardCart);
    });



    actualizarbotonDelete();
    saveLocal();
}

agregarProductos();

function addToCart(e) {
    let idButton = e.target.id;
    const productAdd = productos.find(producto => producto.id == idButton);
    Swal.fire({
        title: 'Se agregó el producto al carrito',
        icon: 'success',
        timer: 1000,
        showConfirmButton: false,
    });

    if (carrito.some(producto => producto.id == idButton)) {
        const index = carrito.findIndex(producto => producto.id == idButton);
        carrito[index].cantidad++;
    } else {
        productAdd.cantidad = 1;
        carrito.push(productAdd);
    }



    actualizarNumeritoCart();
    agregarProductos();
}

function borrarProducto(e) {
    const idDelete = e.currentTarget.id;
    const index = carrito.findIndex(producto => producto.id == idDelete);
    carrito.splice(index, 1);
    Swal.fire({
        title: 'El producto se eliminó',
        icon: 'success',
        timer: 1000,
        showConfirmButton: false,
    });

    agregarProductos();
    actualizarNumeritoCart();
}

function actualizarbotonDelete() {
    deleteProduct = document.querySelectorAll(".deleteProduct");

    deleteProduct.forEach(boton =>
        boton.addEventListener("click", borrarProducto))
}

function saveLocal() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


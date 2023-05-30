let buttonCategoria = document.querySelectorAll(".buttonCategoria");
let buttonCarrito = document.querySelectorAll(".buttonCarrito");
let numeritoCart = document.querySelectorAll(".numeroCantidadCart");
let deleteProduct = document.querySelectorAll(".deleteProduct");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function addToCart(e) {
    let idButton = e.target.id;
    const productAdd = productos.find(producto => producto.id == idButton);

    if (carrito.some(producto => producto.id == idButton)) {
        const index = carrito.findIndex(producto => producto.id == idButton);
        carrito[index].cantidad++;
    } else {
        productAdd.cantidad = 1;
        carrito.push(productAdd);
    }

    function agregarProductos() {
        cartContainer.innerHTML = "<button class=\"buttonFav\">Comprar</button>";

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
        actualizarNumeritoCart();
        saveLocal();
    }

    
    agregarProductos();
    
    function borrarProducto(e) {
        const idDelete = e.currentTarget.id;
        const index = carrito.findIndex(producto => producto.id == idDelete);
        carrito.splice(index, 1);

        agregarProductos();
    }

    function actualizarbotonDelete() {
        deleteProduct = document.querySelectorAll(".deleteProduct");
        
        deleteProduct.forEach(boton =>
            boton.addEventListener("click", borrarProducto))
    }
}

function saveLocal(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarNumeritoCart() {
    let nuevoNumeritoCart = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);

    numeritoCart.innerText = nuevoNumeritoCart;
}




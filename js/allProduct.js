let productContainer;

fetch('../productos.json')
    .then(response => response.json())
    .then(data => {
        productos = data;
        productContainer = document.querySelector('.productContainer');
        cargarProductos(productos);
    })
    .catch(error => {
        console.error('Error al obtener el archivo JSON:', error);
    });

function cargarProductos(productosElegidos) {
    productContainer.innerHTML = " ";
    productosElegidos.forEach(item => {
        const card = createCard(item);
        productContainer.append(card);
        const buttonFav = document.querySelectorAll(`#button${item.id}`);
        buttonFav.forEach(button => {
            button.addEventListener("click", () => {
                addToFav(item.id);
            });
        });
        actualizarButtonCarrito();
    });
}

function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <img src="../img/${item.id}.png" alt="">
    <div class="cardText">
    <h4>${item.nombre}</h4>
    <p>$${item.precio}</p>
    <button class="buttonCarrito button" id="${item.id}">Agregar al carrito</button>
    </div>
    `;
    return card;
}

function actualizarButtonCarrito() {
    const buttonCarrito = document.querySelectorAll(".buttonCarrito");
    buttonCarrito.forEach(boton => {
        boton.addEventListener("click", addToCart);
    });
}

buttonCategoria.forEach(buton => {
    buton.addEventListener("click", () => {
        buttonCategoria.forEach(boton => {
            boton.classList.remove("checked");
        });
        buton.classList.add("checked");

        let productosBoton;
        if (buton.id === "todos"){
            productosBoton = productos.filter(producto => producto.categoria !== buton.id);
        } else {
            productosBoton = productos.filter(producto => producto.categoria === buton.id);
        }

        
        cargarProductos(productosBoton);
    });
});

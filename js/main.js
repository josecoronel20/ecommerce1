fetch('/productos.json')
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos();
    })
    .catch(error => {
        console.error('Error al obtener el archivo JSON:', error);
    });

function cargarProductos() {
    carousel.innerHTML = "";

    productos.forEach(item => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="img/${item.id}.png" alt="">
        <div class="cardText">
        <h4>${item.nombre}</h4>
        <p>$${item.precio}</p>
        <button class="buttonCarrito button" id="${item.id}">Agregar al carrito</button>
        </div>
    `;

        carousel.append(card);
        actualizarButtonCarrito();
    });
}

function actualizarButtonCarrito() {
    let buttonCarrito = document.querySelectorAll(".buttonCarrito");

    buttonCarrito.forEach(boton => {
        boton.addEventListener("click", addToCart);
    });
}

let scrollToRight = () => {
    carousel.scrollLeft += 300;
};

let scrollToLeft = () => {
    carousel.scrollLeft -= 300;
};

nextArrow.addEventListener('click', scrollToRight);
preArrow.addEventListener('click', scrollToLeft);

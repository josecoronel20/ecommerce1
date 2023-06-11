let productContainer = document.querySelector('.productContainer');

function cargarProductos(productosElegidos) {

    productContainer.innerHTML = " ";
    productosElegidos.forEach(item => {

        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                        <img src="../img/${item.id}.png" alt="">
                        
                        <div class="cardText">
                            <h4>${item.nombre}</h4>
                            <p>$${item.precio}</p>
                            <button class="buttonCarrito button" id="${item.id}">Agregar al carrito</button>
                        </div>
        `;
        productContainer.append(card);

        let buttonFav = document.querySelectorAll(`#button${item.id}`);

        buttonFav.forEach(button => {
            button.addEventListener("click", () => {
                addToFav(item.id);
            });
        })

        actualizarButtonCarrito();
    });
}

cargarProductos(productos);


function actualizarButtonCarrito() {
    buttonCarrito = document.querySelectorAll(".buttonCarrito");

    buttonCarrito.forEach(boton => {
        boton.addEventListener("click", addToCart);
    })
}



//filter
buttonCategoria.forEach(buton => {
    buton.addEventListener("click", () => {
        buttonCategoria.forEach(boton => {
            boton.classList.remove("checked");
        })
        buton.classList.add("checked");

        if (buton.id != "todos") {
            const productosBoton = productos.filter(producto => producto.categoria === buton.id)
            cargarProductos(productosBoton);
        } else {
            cargarProductos(productos);
        }

    })
})
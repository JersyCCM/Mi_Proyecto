/*Variables globales de app.js*/

const domBuilder = new DOMBuilder();
let carritoCompras = extraerDataLocalStorage("CarritoCompras");



function guardarDataLocalStorage(nombreParametro, valor) {
    localStorage.setItem(nombreParametro, JSON.stringify(valor));
}

function extraerDataLocalStorage(nombreParametro) {
    let listaObtenida = localStorage.getItem(nombreParametro);
    if (listaObtenida == null){
        return [];
    }
    else{
        return JSON.parse(listaObtenida);
    }

    
}

function buildProductCard(product) {
    const div = document.createElement('div');
    div.className = "col-lg-3 col-md-3 col-sm-6";
    const title = domBuilder.h2(product.name);
    const image = domBuilder.img(product.img);
    image.className = "margen rotate";
    const description = domBuilder.p(product.description);
    description.className = "descripcion";
    const price = domBuilder.h3(product.price);
    const button = domBuilder.button('Agregar al carrito', 'btnProduct', product.id);

    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);
    return div;
}

function onSelectClick(event) {
    const idProduct = event.target.dataset.id;
    console.log("entro");
    const allProducts = extraerDataLocalStorage("ComidaItaliana").concat(extraerDataLocalStorage("ComidaArabe"));
    const selectedProduct = allProducts.find(function(product) {
        if (product.id === idProduct) {
            return product;
        }
    });


    carritoCompras.push(selectedProduct);
    console.log(carritoCompras);
    guardarDataLocalStorage("CarritoCompras", carritoCompras);
    alert("Se ha agregado este producto a tu carrito de compras. Ver carrito de compras");
}

function init() {
    $(document).ready(()=> {
        $.getJSON("datos.json", (response, status) => {
            if (status === "success") {
                response.productosItalianos.forEach(function(product) {
                    if (product.available) {
                        const card = buildProductCard(product);
                        document.getElementById("productosItalianosDisplay").appendChild(card);
                    }
                });
                response.productosArabes.forEach(function(product) {
                     if (product.available) {
                        const card = buildProductCard(product);
                        document.getElementById("productosArabesDisplay").appendChild(card);
                    }
              });
              
            }if (typeof(Storage) !== "undefined") {
                guardarDataLocalStorage("Todos", response);
                guardarDataLocalStorage("ComidaItaliana", response.productosItalianos);
                guardarDataLocalStorage("ComidaArabe", response.productosArabes);
            }
            
            const btnProducts = document.querySelectorAll('.btnProduct');
            btnProducts.forEach(function(btnProduct) {
            btnProduct.addEventListener('click', onSelectClick);
    })
        })
    })   
   
}

window.addEventListener('load', function() {
    init();

})


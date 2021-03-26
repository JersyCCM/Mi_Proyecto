/*Variables globales de app.js*/

const domBuilder = new DOMBuilder();
let carritoCompras = extraerDataLocalStorage("CarritoCompras");

if (carritoCompras == null){
    carritoCompras = [];
}


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
    const button = domBuilder.button('Seleccionar', 'btnProduct', product.id);

    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);
    return div;
}

function onSelectClick(event) {
    const idProduct = event.target.dataset.id;
    const allProducts = extraerDataLocalStorage("ComidaItaliana").concat(extraerDataLocalStorage("ComidaArabe"));


    const selectedProduct = allProducts.find(function(product) {
        if (product.id === idProduct) {
            return product;
        }
    });

<<<<<<< HEAD

=======
>>>>>>> 51e8d039d4d109d33dc703e1970658bcd72b3687
    carritoCompras.push(selectedProduct);
    console.log(carritoCompras);
    guardarDataLocalStorage("CarritoCompras", carritoCompras);
    alert("Se ha agregado este producto a tu carrito de compras. Ver carrito de compras");
}


function lee_json() {
    const objetoJson = {
        "productosItalianos": [{
            "id": "00001",
            "name": "Lasagna Clásica",
            "description": "Capas de pasta casera, rellenas de salsa bolognesa, salsa bechamel jamon, queso muzzarella, queso parmesano",
            "img": "img/lasagnaclasica1.jpg",
            "price": 400,
            "available": true,
            "tags": ["lasagna", "carne", "cocina italiana"]
        }, {
            "id": "00002",
            "name": "Lasagna Mixta",
            "description": "Capas de pasta casera, rellenas de salsa bolognesa, salsa bechamel con pollo jamon, queso muzzarella, ueso parmesano",
            "img": "img/Lasagnamixta1.jpg",
            "price": 450,
            "available": true,
            "tags": ["lasagna", "Mixta", "cocina italiana"]
        }, {
            "id": "00003",
            "name": "Lasagna Veggie",
            "description": "Capas de pasta casera, rellenas de salsa bechamel con gratinado de zanahoria, brocoli, berenjena,champiñones, espinaca queso muzzarella, queso parmesano",
            "img": "img/vegetariana-2.jpg",
            "price": 400,
            "available": true,
            "tags": ["lasagna", "veggie", "vegetales"]
        }, {
            "id": "00004",
            "name": "Lasagna de Plátano",
            "description": "Capas de platano maduro, rellenas de salsa bolognesa, salsa bechamel,jamon, queso muzzarella, queso parmesano",
            "img": "img/lasagnadePlatano1.jpg",
            "price": 450,
            "available": true,
            "tags": ["lasagna", "platano", "cocina italiana"]
        }],
        "productosArabes": [{
            "id": "00005",
            "name": "Shawarma de Carne",
            "description": "Pan de pita relleno de lomo marinado en especias orientales, con vegetales y aderezos de tu preferencia",
            "img": "img/shawarmaCarne1.jpg",
            "price": 350,
            "available": true,
            "tags": ["shawarma", "Mixto", "medio oriente"]
        }, {
            "id": "00006",
            "name": "Shawarma de Pollo",
            "description": "Pan de pita relleno de pollo marinado en especias orientales, con vegetales y aderezos de tu preferencia",
            "img": "img/shawarmaPollo (2).jpg",
            "price": 350,
            "available": true,
            "tags": ["shawarma", "mixto", "medio oriente"]
        }, {
            "id": "00007",
            "name": "Shawarma Mixto",
            "description": "Pan de pita relleno de lomo y pollo marinado en especias orientales con vegetales y aderezos de tu preferencia",
            "img": "img/mixto.jpg",
            "price": 380,
            "available": true,
            "tags": ["shawarma", "mixto", "medio oriente"]
        }]
    };
    return objetoJson;
}

function init() {
    const productos = lee_json();

    productos.productosItalianos.forEach(function(product) {
        if (product.available) {
            const card = buildProductCard(product);
            document.getElementById("productosItalianosDisplay").appendChild(card);
        }
    });
    productos.productosArabes.forEach(function(product) {
        if (product.available) {
            const card = buildProductCard(product);
            document.getElementById("productosArabesDisplay").appendChild(card);
        }
    });

    if (typeof(Storage) !== "undefined") {
        guardarDataLocalStorage("Todos", productos);
        guardarDataLocalStorage("ComidaItaliana", productos.productosItalianos);
        guardarDataLocalStorage("ComidaArabe", productos.productosArabes);
<<<<<<< HEAD
=======

>>>>>>> 51e8d039d4d109d33dc703e1970658bcd72b3687
    }
}


window.addEventListener('load', function() {
    init();
    const btnProducts = document.querySelectorAll('.btnProduct');
    btnProducts.forEach(function(btnProduct) {
        btnProduct.addEventListener('click', onSelectClick);
    })

})

/*document.getElementById("cantidadProductos").appendChild(carritoCompras.lenght);*/



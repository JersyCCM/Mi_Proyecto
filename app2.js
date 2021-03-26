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




window.addEventListener('load', function() {
    initCarrito();

})



function buildCarrito(product){
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td2.className = "right";
    const title = domBuilder.h2(product.name);
    const price = domBuilder.h3(product.price);
    td1.appendChild(title);
    td2.appendChild(price);
    tr.appendChild(td1);
    tr.appendChild(td2);

    return tr;

}
    

function initCarrito (){
    let carrito = new carroDeCompras(carritoCompras);
    if (carritoCompras.length>0){
    carritoCompras.forEach(function(product) {
            const card = buildCarrito(product);
            document.getElementById("seccionCarrito").appendChild(card);
        }
    );}
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const title = domBuilder.h2("Precio Total");
    const price = domBuilder.h3(carrito.calculoTotalCarrito());
    console.log(carrito.calculoTotalCarrito())
    td1.appendChild(title);
    td2.appendChild(price);
    tr.appendChild(td1);
    tr.appendChild(td2);
    document.getElementById("seccionCarrito").appendChild(tr);

    console.log("saludos");
}





/*function calculoTotalCarrito() {
    console.log(hola);
    let carrito = new carroDeCompras(carritoCompras);
    console.log(carrito.calculoTotalCarrito());
}

*/
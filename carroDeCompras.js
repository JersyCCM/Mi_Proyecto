class carroDeCompras  {
    constructor(carritoPlatos){
        this.carrito = carritoPlatos
    }

calculoTotalCarrito() {
    let total = 0
    for (let plato of this.carrito) {
        total += parseFloat(plato.price)
    }
    return total
}
    }


  function solicitarLocalidad(){
    return prompt("Ingrese su localidad por favor");
    }

function calcularCostoEnvío(){
let localidadIngresada = solicitarLocalidad();
  switch (localidadIngresada){
      case "palermo": case "PALERMO": case "Palermo":
           alert("el monto de su envío es de 200");
           break;
      case "almagro": case "ALMAGRO": case "Almagro":
           alert("el monto de su envío es de 200");
           break;
      case "balvanera": case "BALVANERA":  case "Balvanera": 
            alert("el monto de su envío es de 200");
            break;
      case "microcentro": case "MICROCENTRO":  case "Microcentro": 
            alert("el monto de su envío es de 250");
            break;
      default:
          alert("Disculpe no llegamos a esta zona");
          break;
  }
}
calcularCostoEnvío()

function carrito(){
  alert ("Se agrego este producto al carrito de compras")
}

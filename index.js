/*tienda virtual de bebidas:
- si tiene edad igual o mayor a 18 años, usuario habilitado para la compra
- si es menor de 18 años, prohibida su venta*/
let nombre = prompt("Ingresa tu nombre");
let edad = 0;
alert(nombre +" " +"ingresaste" + " "+ edad +" " + "años");
if(edad >=18){
    console.log("BIENVENIDA A LA TIENDA VIRTUAL!");
} else{
    alert("PROHIBIDA SU VENTA A MENORES DE 18 AÑOS LEY 24788");
};
/**para acceder a atencion personalizada*/
for(let i = 1; i<100; i++){
    if(i == 5){
        break;

    }
    alert(nombre +" Puesto N° " +i+ "para realizar tu compra");
}
/* calcular precio producto*/
//  objeto CalculadoraPrecio
const CalculadoraPrecio = {
    precioInicial: 0,
    iva: 0,
    descuento: 0,
    //metodo
    establecerPrecioInicial: function (precio) {
        this.precioInicial= precio;
      },
      establecerIva: function (porcentaje) {
        this.iva = porcentaje;
      },
      establecerDescuento: function (porcentaje) {
        this.descuento = porcentaje;
      },
       // calcular el precio total
  calcularPrecioFinal: function () {
    const ivaCalculado = this.precioInicial * (this.iva / 100);
    const descuentoCalculado = this.precioInicial * (this.descuento / 100);
    const precioFinal = this.precioInicial + ivaCalculado - descuentoCalculado;
    return precioFinal;
  },
};
/*::::::::::::::::::::::::::::::::*/
CalculadoraPrecio.establecerPrecioInicial(4500); 
CalculadoraPrecio.establecerIva(21);   //  21%
CalculadoraPrecio.establecerDescuento(30);   //  descuento del 30%

const precioFinal = CalculadoraPrecio.calcularPrecioFinal();
console.log(`El precio total es: $${precioFinal}`);

/*::::::::::::::::::::::::::::::::*/
/*array*/
class Item {
    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase ();
        this.precio = parseFloat(precio);
    }
  
    iva() {
        this. precio = this.precio *1.21;
    }
}
    const items =[];
        items.push(new Item ("vino", "4500") );
        items.push(new Item ("aperol", "2500") );
        items.push(new Item ("espumante", "5000") );
  
    for (const items of items )
    item.iva();

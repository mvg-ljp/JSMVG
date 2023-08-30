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
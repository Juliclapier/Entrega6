

    var modelo = prompt("Hola! que remera queres comprar?")

    if (modelo.toLowerCase() == "alf"){
        alert("Elegiste Alf")

    }

    var numero = prompt (" Y ahora cuantas remeras queres comprar?");
Number(numero)
    var cantidadReme = numero

    if (remeAlf.stockproducto<numero){
        alert("no hay stock, por favor elegir otra")
    }

    
    class remeras {
    constructor ( modelo, precio, talle, colores, stockproducto) {

    this.modelo = modelo
    this.precio = precio
    this.talle = talle
    this.colores = colores
    this.stockproducto = stockproducto
}}

let remeAlf= new remeras("Alf", 560, "S", "gris gastado", 5)
let remeCapitan = new remeras("Capitan del espacio", 650, "L","rosa",2 )
let remeBazooka = new remeras("Bazooka", 450, "M","Blanca", 3)
let remeJorgito = new remeras("Jorgito", 600, "M", "Blanca", 4)
let remeBritney = new remeras("Britney", 450, "L", "amarilla", 10)
let remeBuzos = new remeras("Buzos", 700, "M", "Varios colores", 9)

const baseDeDatos = [remeCapitan, remeBazooka, remeJorgito, remeBritney, remeBuzos]


    

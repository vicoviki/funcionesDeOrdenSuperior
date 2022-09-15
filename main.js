
class Producto {
    constructor(producto, precio) {
        this.producto = producto;
        this.precio = precio;  
    }
    
}

const productos = [
 new Producto('Poncho cambiador', '$10500'),
 new Producto('bolso Impermeable', '$5200'),
 new Producto('Parafina Ecologica agua fria ', '$2000'),
 new Producto('Parafina Ecologica agua caliente', '$2000'),
];




let seguirComprando =true;
let carrito=[];




    do {
         let producto = Number(prompt('Engrese la opcion de compra :\n1. Poncho cambiador \n2. Bolso Impermeable \n3. Parafina ecologica agua caliente \n4. Parafina ecologica agua fria'));
         let precio =0;
         let cantidad = parseInt(prompt('Elija la cantidad de productos que desea comprar: '));

        switch (producto) {
            case 1:
                precio = 10500;
                break;

            case 2:
                precio = 5200;
                break;

            case 3:
                precio = 2000;
                break;

            case 4:
                precio = 2000;
                break;

            default:
                    alert('No se cargo correctamente su compra')
                break;
        }
    
        carrito.push({ producto, cantidad, precio });

        
        
        seguirComprando = confirm("¿Querés agregar otro producto a tu carrito ?");
    } while (seguirComprando);


    carrito.forEach((carritoFinal) => {
        alert(`Usted eligió :\n producto ${carritoFinal.producto}, cantidad: ${carritoFinal.cantidad}, total a pagar por producto: ${carritoFinal.cantidad * carritoFinal.precio}`);
    });
     
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

      alert(`el total a pagar por su compra es de: ${total}`);















//  class Producto{
//     constructor(id,nombre,precio,categoria){
//         this.id=id;
//         this.nombre=nombre;
//         this.precio=precio;
//         this.categoria=categoria;
//     }
// }
// let productos= [
//     new Producto(10,"Adidas Runnig",17000,"zapatillas"),
//     new Producto(11,"adidas boost",20000,"zapatillas"),
//     new Producto(12,"nike runnig",18000,"zapatillas"),
// ];

// let cantidad=0;
// let seguirComprando =true;
// let carrito=[];




// let nombre = prompt("Ingrese su nombre!")


// do{
//     let opcion =Number(prompt( `Bienvenido : ${nombre}  \nQue zapatillas desea comprar \n 1- Adidas runnig \n 2- Adidas boost \n 3- Nike runnig`))
//         // cantidad = parseInt(prompt("Cuantas unidades desea comprar?"))
        
//     switch(opcion){

//          case 1:
        
//             alert("Escogiste: Adidas Runnig")
//             carrito.push(productos[0]);
//             break;

//          case 2:
//             alert("Escogiste: Adidas boost")
//              carrito.push(productos[1]);
//             break;

//          case 3:
//              alert("Escogiste: Nike runnig");
//             carrito.push(productos[2])
//              break;

//         default:
//             alert("No se eljio ningun producto ,Vuelva a intentarlo")
//             break;
//     }





// seguirComprando = confirm("¿Desea seguir comprando?")



// }while(seguirComprando);

// let detalleDeCarrito = carrito.map((el) => `id : ${el.id}  ${el.nombre}  = $ ${el.precio}`);

// const filtrar = (deleteId) => {
//     const result = carrito.filter((el) => el.id != deleteId);
//     return result;
    
// }

// let total = carrito.reduce((acc, el) => acc + el.precio  ,0);

// let eliminar = prompt(`${detalleDeCarrito.join("\n")} \n Desea eliminar algun producto? si o no`);
// while(eliminar != "si" && eliminar != "no"){
    
//     alert("Por favor elija si o no")
//     eliminar = prompt("Desea eliminar algun producto? si o no")

// }
    
//         if(eliminar === "si"){
//             let productoEliminado = parseInt(prompt(`${detalleDeCarrito.join("\n")} \n Seleccione el id el producto que desea eliminar.`));
//            console.log( filtrar(productoEliminado))
//              carrito = filtrar(productoEliminado);
//              total = carrito.reduce((acc,el)=> acc +el.precio,0 )
//              alert(`El total de su compra es $ ${total} \n Muchas gracias vuelva pronto `)
             
             
//             }else if(eliminar === "no"){
                
                
//                 alert(`Gracias por su compra su total es de : $ ${total}`)
//            






let carrito=[];  //este es el array q recopila los productos q se seleccionen

 const miLocalStorage = window.localStorage; //saco el storage para la ventana actual?

//se dijo q el parametro debe ser array y mayor q 0 (vacio)
const renderProducts = (paramVitrina) => {
  
  const productsVitrina = document.querySelector(".products");

  if (!paramVitrina || paramVitrina.length === 0) {
    productsVitrina.innerHTML = "<p>No hay productos en la vitrina</p>";
    return;
  }

  productsVitrina.innerHTML = "";
  let convertidorHtml = ""; //esto se llenara (con los products)
  
  paramVitrina.forEach(element => {
    // console.log(element);
    convertidorHtml += `
      <article class="articulo text-black-50 border-primary border-bottom rounded-0 p-3 my-5 col-12 col-sm-6 col-lg-3  producto-${element.id}">
        <img
        src="${element.imagen}"
        alt="Tortas"
        class="img-fluid marketing__esquinas p-3"
        />
        <h2 class="text-primary">${element.nombre}</h2>
        <p>${element.precio} USD</p>
        <button class="btn btn-secondary text-white rounded-pill boton-comprar" value=${element.id}>comprar</button>
      </article>

      
    `;
  });

  productsVitrina.innerHTML= convertidorHtml;
}


const addCarrito = eventosisimo => {
  
  console.log("id del boton que apretaste:",eventosisimo.target.value); //en consola se ve el evento de tocar boton, y escribe el value(que es element.id)
  const idProductBuscado= (eventosisimo.target.value);


  const buscarProducts = products.find(element => element.id === idProductBuscado);
  console.log(buscarProducts); //en consola se ve caracteristicas pq se busca que q el idProductoBuscado (cuando ocurre eventosisimo) sea igual a un id dentro de base de datos llamada "products"


  carrito.push(buscarProducts); //con push se adhiere los botones q se aprieten; en carrito
  console.log(carrito); //despues de buscarProducto, osea del eventosisimo (apretar boton), se adhiere productos seleccionados



  //----------------------carrito, aparecera en el renderCarrito
  renderCarrito(carrito);
  guardarCarritoEnLocalStorage(); //guarda lo del carrito
}

const renderCarrito = paramCarro => {

    const productsEnCarro = document.querySelector(".carrito");
  
    if (!paramCarro || paramCarro.length === 0) {
      productsEnCarro.innerHTML = "<p>Vamos, intenta seleccionar un producto</p>";
      return;
    }
  
    productsEnCarro.innerHTML = "";
    let convertidorHtml = ""; //esto se llenara (con los products)
    
    paramCarro.forEach(elementtt => {
      // console.log(element);
      convertidorHtml += `
        <article class="my-5">  
          <table class="table text-dark">
                            <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>${elementtt.nombre}</strong><p>300gr</p></td>                                    
                                    <td>${elementtt.stock}</td>
                                    <td>$ ${elementtt.precio} USD</td>
                                </tr>
                                <tr>
                                    <td colspan="6">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="text-right">Total Product</td>
                                    <td>$ ${elementtt.precio}</td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="text-right">Costo Envío</td>
                                    <td>$10</td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="text-right"><strong>Total</strong></td>
                                    <td>$ ${elementtt.precio + 10}</td>
                                </tr>
                            </tbody>
                            
                            </table>
          <div class="">
            <button class="btn btn-primary" onclick="#" >Pagar</button>
            <button class="btn btn-secondary boton-borrar text-white" onclick="eraseCarrito('${elementtt.id}')" >Borrar</button>
            <button class="btn btn-secondary boton-borrar text-white" onclick="vaciarCarrito()" >Vaciar</button>
          </div>
        </article>            
      `;
    });
  
    

    productsEnCarro.innerHTML = convertidorHtml;
}


const eraseCarrito = id => {
  console.log(id);  //se borrara con ese id

  const carritoBorra = carrito.filter(p => p.id !== id);
  

  carrito = (carritoBorra);  //carrito ahora es un nuevo carrito, sin lo que se busco con el id

  renderCarrito(carrito); //ahora se actualiza en el html el nuevo carrito
  guardarCarritoEnLocalStorage(); ////actualiza storage del carrito
}

/////// Varia el carrito y vuelve a dibujarlo

      const vaciarCarrito = () => {
       // Limpiamos los productos guardados
       carrito = [];
       // Renderizamos los cambios
       renderCarrito();
       
       // Borra LocalStorage
       localStorage.clear();

       }

 const guardarCarritoEnLocalStorage = () => {
   miLocalStorage.setItem('carrito', JSON.stringify(carrito));
 }
 const cargarCarritoDeLocalStorage = () => {
   // ¿Existe un carrito previo guardado en LocalStorage?
   if (miLocalStorage.getItem('carrito') !== null) {
       // Carga la información
       carrito = JSON.parse(miLocalStorage.getItem('carrito'));
   }
 }


 // antes decia window.onload = 
$(() => {
  
  renderProducts(products);

  renderCarrito(carrito);

  const botonComprar=document.querySelectorAll(".boton-comprar");
  const botonBorrar=document.querySelectorAll(".boton-borrar");
  

  botonComprar.forEach(btn => btn.addEventListener('click', addCarrito));
  
  cargarCarritoDeLocalStorage();
  





});


/////////////////////////////////////////////





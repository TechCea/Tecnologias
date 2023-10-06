// PRODUCTOS
const productos = [
  {
      id: "llavero-01",
      titulo: "Flores",
      imagen: "./IMG/Flores de M.jpg",
      categoria: {
          nombre: "Minecraft",
          id: "minecraft"
      },
      precio: 3.00 
  },
  {
      id: "Llavero-02",
      titulo: "Articuno",
      imagen: "./IMG/articuno.webp",
      categoria: {
          nombre: "Pokemon",
          id: "pokemon"
      },
      precio: 4.00
  },
  {
      id: "Llavero-03",
      titulo: "Astra",
      imagen: "./IMG/astra.jpg",
      categoria: {
          nombre: "Valorant",
          id: "valorant"
      },
      precio: 3.50
  },
  {
      id: "Llavero-04",
      titulo: "Brimstone",
      imagen: "./IMG/brim.jpg",
      categoria: {
          nombre: "Valorant",
          id: "valorant"
      },
      precio: 3.50
  },
  {
      id: "Llavero-05",
      titulo: "Gengar",
      imagen: "./IMG/gengar.webp",
      categoria: {
          nombre: "Pokemon",
          id: "pokemon"
      },
      precio: 3.75
  },
  {
      id: "Llavero-06",
      titulo: "Donatelo",
      imagen: "./IMG/donatelo.jpg",
      categoria: {
          nombre: "Accion",
          id: "accion"
      },
      precio: 3.00
  },
  {
      id: "Llavero-07",
      titulo: "Giratina",
      imagen: "./IMG/giratina.webp",
      categoria: {
          nombre: "Pokemon",
          id: "pokemon"
      },
      precio: 3.75
  },
  {
      id: "Llavero-08",
      titulo: "Michelangelo",
      imagen: "./IMG/miguelaIMGarticuno.webp.jpg",
      categoria: {
          nombre: "Accion",
          id: "accion"
      },
      precio: 3.00
  },
  {
      id: "Llavero-09",
      titulo: "Rafael",
      imagen: "./IMG/rafael.jpg",
      categoria: {
          nombre: "Accion",
          id: "accion"
      },
      precio: 3.00
  },
  {
    id: "Llavero-10",
    titulo: "Leonardo",
    imagen: "./IMG/leonardo.jpg",
    categoria: {
        nombre: "Accion",
        id: "accion"
    },
    precio: 3.00
   },
   {
    id: "Llavero-11",
    titulo: "Asuka",
    imagen: "./IMG/asuka.jpg",
    categoria: {
        nombre: "Anime",
        id: "anime"
    },
    precio: 3.75
    },
    {
        id: "Llavero-12",
        titulo: "Finn",
        imagen: "./IMG/finn.jpg",
        categoria: {
            nombre: "Accion",
            id: "accion"
        },
        precio: 3.50
    },
    {
        id: "Llavero-13",
        titulo: "Jake",
        imagen: "./IMG/jake.jpg",
        categoria: {
            nombre: "Accion",
            id: "accion"
        },
        precio: 3.50
    },
    {
        id: "Llavero-14",
        titulo: "Kenny",
        imagen: "./IMG/kenny.webp",
        categoria: {
            nombre: "South-Park",
            id: "south-park"
        },
        precio: 4.00
    },
    {
        id: "Llavero-15",
        titulo: "Killjoy",
        imagen: "./IMG/killjoy.jpg",
        categoria: {
            nombre: "Valorant",
            id: "valorant"
        },
        precio: 3.50
    },
    {
        id: "Llavero-16",
        titulo: "Link",
        imagen: "./IMG/link.jpg",
        categoria: {
            nombre: "Accion",
            id: "accion"
        },
        precio: 3.50
    },
    {
        id: "Llavero-17",
        titulo: "Neon",
        imagen: "./IMG/neon.jpg",
        categoria: {
            nombre: "Valorant",
            id: "valorant"
        },
        precio: 3.50
    },
    {
        id: "Llavero-18",
        titulo: "Rayquaza",
        imagen: "./IMG/rayquaza.webp",
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 4.00
    },
    {
      id: "Llavero-19",
      titulo: "Sova",
      imagen: "./IMG/sova.jpg",
      categoria: {
          nombre: "Valorant",
          id: "valorant"
      },
      precio: 3.50
     },
     {
      id: "Llavero-20",
      titulo: "Wendy",
      imagen: "./IMG/wendy.webp",
      categoria: {
          nombre: "South-Park",
          id: "south-park"
      },
      precio: 4.00
   },
   {
    id: "Llavero-21",
    titulo: "Stan",
    imagen: "./IMG/stan.webp",
    categoria: {
        nombre: "South-Park",
        id: "south-park"
    },
    precio: 4.00
}
];

const contenedorProductos = document.querySelector("#contenedor_productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito =document.querySelector("#numerito");


function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";
    
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="productos">
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" width="266" height="266"></img>
        <div class="producto-detalle">
        <h1 class="producto-titulo">${producto.titulo}</h1>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
    </div>
    `;
    contenedorProductos.append(div);
        
    })
    actualizarBotonesAgregar()
        console.log(botonesAgregar);
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active");
        
        if(e.currentTarget.id != "sin"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText ="Todos los Productos"
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlcarrito);
    });
    
}
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS){
     
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    acutalizarnumerito();

} else {

    productosEnCarrito = [];
}

function agregarAlcarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);

    }

    acutalizarnumerito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function acutalizarnumerito(){
    let nuenoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuenoNumerito;
}
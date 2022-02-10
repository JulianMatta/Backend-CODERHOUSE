

const Producto = require('./Producto.js');

const Contenedor = require('./Contenedor.js');

let obj1 = new Producto.Producto('GPU 1','230000', 'https://as01.epimg.net/meristation/imagenes/2021/02/16/noticias/1613505263_779909_1613505359_sumario_normal.jpg')
let obj2 = new Producto.Producto('GPU 2','300000', 'https://tecnovortex.com/wp-content/uploads/2020/09/nvidia-3000.jpg')
let obj3 = new Producto.Producto('GPU 3','370000', 'https://i.blogs.es/b36194/32fdsfsd/450_1000.jpg')


let contenedor1 = new Contenedor.Contenedor('productos.txt')


//----- SE AGREGAN METODOS ------

// SE 

async function LanzarMetodos (obj) {
    console.log(await contenedor1.save(obj));
    console.log(await contenedor1.getById(2));
    console.log(await contenedor1.getById(200));
    console.log(await contenedor1.getAll());
    console.log(await contenedor1.deleteById(1));
    console.log(await resolveAfter2Seconds());
}


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        contenedor1.deleteAll()
        .then(resultado => console.log(resultado))
        .catch(err => console.error(err));
        resolve('Archivo borrado');
      }, 2000);
    });
  }



  LanzarMetodos(obj3);

  // contenedor1.deleteAll();

  // contenedor1.save(obj3);

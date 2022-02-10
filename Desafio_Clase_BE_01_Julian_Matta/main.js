class Usuario{
    
    constructor(nombre,apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros; 
        this.mascotas = mascotas; 
    }

    getFullName () {
        return `Nombre: ${this.nombre} y Apellido: ${this.apellido}`;
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombreNuevo, autorNuevo){
        this.libros.push({nombre: nombreNuevo, autor: autorNuevo});
    }

    getBookNames(){
        let nombresLibros = [];
        this.libros.forEach(libro => nombresLibros.push(libro.nombre));
        return nombresLibros;
    }

    getBookNames_map(){
        let arrNombresLibros = this.libros.map(function(obj){
            let rObj = {};
            rObj["nombre"] = obj.nombre;
            return rObj;
         });
         return arrNombresLibros;
    }

    getBookNames_map_return(){
            return this.libros.map(function(libro){
                return libro.nombre;
            })
    }
}


const Usuario1 = new Usuario("Julián", "Matta", [{nombre:"A Song of Ice and Fire", autor: "George R.R"}], ["Jon"]);
console.log(Usuario1);
console.log(Usuario1.getFullName());
Usuario1.addMascota("Shiva");
console.log(Usuario1.mascotas);
console.log(Usuario1.countMascotas());
Usuario1.addBook("A Song of Ice and Fire", "George R.R");
console.log(Usuario1.libros);
console.log(Usuario1.getBookNames());
console.log(Usuario1.getBookNames_map());
console.log(Usuario1.getBookNames_map_return());
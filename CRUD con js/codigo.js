const url = 'http:localhost:3000/api/articulos/'
const contenedor = document.querySelector('tbody')
let resultados = ''


const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
const formArticulo = document.querySelector('form')
const descripcion = document.getElementById("descripcion")
const precio = document.getElementById("precio")
const stock = document.getElementById("stock")
let opcion = ''
let idForm =[]
//abrir modal para crear
btnCrear.addEventListener('click', ()=> {
    descripcion.value = ''
    precio.value = ''
    stock.value = ''
    modalArticulo.show()
    opcion ='crear'
    
})
//funcion para mostrar los resultados 
const mostrar =(articulos) => {
    articulos.forEach(articulo => {
        resultados += `<tr>
                            <td>${articulo.id}</td>
                            <td>${articulo.descripcion}</td>
                            <td>${articulo.precio}</td>
                            <td>${articulo.stock}</td>
                            <td> class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-primary">Borrar</a></td>
                       </tr>
                `
        
    });
    contenedor.innerHTML = resultados
    
}
//procediendo mostrar
fetch(url)
        .then(response => response.json())
        .then(data => mostrar(data))
        .catch(error => console.log(error))

//funcion para emular el ON de jquery
const on = (element, event, selector, handler) =>{

}

//Boton para borrar
on(document, 'click', '.btnBorrar', e =>{

});

//Boton para editar
on(document, 'click', 'btnEditar', e =>{

});

//Procedimiento para crear o editar
formArticulo.addEventListener('submit', (e) =>{
    
})
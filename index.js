
// Crear el contenedor div
let imgContenedor = document.createElement("div");
//Agregamos un ID
imgContenedor.id = "contenedor";
//agregamos el DIV al body
document.body.appendChild(imgContenedor);


//Obtenemos la API
fetch("https://rickandmortyapi.com/api/character").then(respuesta => respuesta.json())
 // Iterar sobre los results que tiene la API
.then(data => data.results.forEach(resultado => {
    // Obtener la URL de las imagenes del personaje y se guarda en una variable
    let imgUrl = resultado.image;

    //Creamos la etiqeuta IMG
    let imgTag = document.createElement("img");
    //accedemos a la parte de src de la etiqueta IMG y agregamos el link
    imgTag.src = imgUrl;

    //Agregamos las imagenes al div
    imgContenedor.appendChild(imgTag)
    
})).catch(error => console.error(error,"Error de carga"));




// 1. Ejercicio 3
const primerH2= document.querySelector("h2");
console.log ("Texto del primer h2:", primerH2.textContent);
//2. Ejercicio 4
const todosLosParrafos = document.querySelectorAll("p");
todosLosParrafos.forEach(parrafo => {
    parrafo.innerHTML = "Texto actualizado dinámicamente texto en la consola";
});
//3. Ejercicio 5
const primeraImagen = document.querySelector("img");
primeraImagen.src = "imagenes/img1.jpg";
primeraImagen.alt = "Imagen";
console.log("El nuevo src de la imagen es: ", primeraImagen.src);
console.log("El nuevo alt de la imagen es: ", primeraImagen.alt);
//4. Ejercicio 6
const elementosLi = document.querySelectorAll("li");
elementosLi.forEach(li => {
    li.classList.add("resaltado"); 
    li.classList.remove("oculto"); 
});
//5. Ejercicio 7
const miLista = document.getElementById("miLista");
if(miLista){
    const elementosLi = miLista.children;
    for(const li of elementosLi){
        console.log(li.textContent);
    }
}else{
    console.log("No se encontro el elemento con el ID miLista")
}
//6. Ejercicio 8
const colores = ["red", "blue", "green", "orange", "purple", "yellow"];
const divs = document.querySelectorAll('div');
divs.forEach((div, index) => {
    div.style.backgroundColor = colores[index % colores.length];
});
//7. Ejercicio 9
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Elemento insertado con JS";
nuevoParrafo.style.color = "purple";
nuevoParrafo.style.fontWeight = "bold";
document.body.appendChild(nuevoParrafo);
console.log("Se ha insertado un nuevo elemento <p> al final del body.");
//8. Ejercicio 10
const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Nuevo Encabezado insertado (H3)";
const segundoH2 = document.querySelector("h2");
if (segundoH2) {
    document.body.insertBefore(nuevoH3, segundoH2);
    console.log("Se ha insertado un nuevo <h3> antes del primer <h2>.");
} else {
    console.log("No se encontró ningún elemento <h2> para usar como referencia.");
}
//9. Ejercicio 11
const nuevaLista = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = `Elemento ${i}`; 
    nuevaLista.appendChild(nuevoLi);
}
const contenedorDiv = document.getElementById("contenedor-lista");
if (contenedorDiv) {
    contenedorDiv.appendChild(nuevaLista); 
    console.log("Se ha creado y agregado la lista <ul> con 5 elementos al <div>.");
} else {
    console.log("No se encontró el elemento con el ID contenedor-lista");
}
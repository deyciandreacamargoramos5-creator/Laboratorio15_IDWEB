// 1. Ejercicio 3
const primerH2= document.querySelector("h2");
console.log ("Texto del primer h2:", primerH2.textContent);
//2. Ejercicio 4
const todosLosParrafos = document.querySelectorAll("p");
todosLosParrafos.forEach(parrafo => {
    parrafo.innerHTML = "Texto actualizado dinámicamente ";
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
nuevoH3.textContent = "Nuevo Encabezado insertado";
const referenciaH2 = document.querySelector("h2"); 
if (referenciaH2) {
    referenciaH2.parentNode.insertBefore(nuevoH3, referenciaH2);
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
//10. Ejercicio 12
const parrafoViejo = document.getElementById("parrafo-a-reemplazar");
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Párrafo reemplazado ";
nuevoDiv.style.backgroundColor = "yellow";
nuevoDiv.style.padding = "10px";
if (parrafoViejo) {
    const elementoPadre = parrafoViejo.parentNode; 
    elementoPadre.replaceChild(nuevoDiv, parrafoViejo);
    console.log("El párrafo ha sido reemplazado por el nuevo <div>.");
} else {
    console.log("No se encontró el párrafo a reemplazar.");
}
//11. Ejercicio 13
const listaPadre = document.getElementById("lista-ejercicio-13");
if (listaPadre) {
    const ultimoLi = listaPadre.lastElementChild; 
    if (ultimoLi) {
        listaPadre.removeChild(ultimoLi);
        console.log(`El último elemento <li> ("${ultimoLi.textContent}") ha sido eliminado.`);
    } else {
        console.log("No se encontró un último elemento <li> para eliminar");
    }
} else {
    console.log("No se encontró la lista con el ID lista-ejercicio-13");
}
//12. Ejercicio 14
const contenedor = document.getElementById("contenido");
if (contenedor) {
    contenedor.innerHTML = "";
    
    console.log("Contenedor contenido vaciado.");
    contenedor.textContent = "Contenido vaciado automaticamente"; 
    contenedor.style.backgroundColor = "lightgreen";
} else {
    console.error("No se encontró el elemento con el ID contenido");
}
//13. Ejercicio 15
const h2Original = document.querySelector("h2");
if (h2Original) {
    const h2Clonado = h2Original.cloneNode(true); 
    h2Clonado.textContent = h2Clonado.textContent + " - CLONADO";
    h2Clonado.style.color = "green";
    document.body.appendChild(h2Clonado);
    console.log("Se ha clonado el primer <h2> y se ha agregado al final del body")
} else {
    console.log("No se encontró ningún elemento <h2> para clonar.");
}
//14. Ejercicio 16
const lista2Padre = document.getElementById("lista-movimiento");

if (lista2Padre) {
    const ultimoLi = lista2Padre.lastElementChild; 
    const primerLi = lista2Padre.firstElementChild;
    
    if (ultimoLi && primerLi) {
        lista2Padre.insertBefore(ultimoLi, primerLi);
        console.log("El último <li> ha sido movido al inicio de la lista.");
    } else {
        console.log("No se encontraron suficientes elementos <li> en la lista para realizar el movimiento.");
    }
} else {
    console.log("No se encontró la lista con el ID lista-movimiento");
}
//15. Ejercicio 17
const lista3Padre = document.getElementById("lista-ordenar");
if (lista3Padre) {
    const itemsArray = Array.from(lista3Padre.children);
    itemsArray.sort((a, b) => {
        const textoA = a.textContent.toLowerCase();
        const textoB = b.textContent.toLowerCase();
        return textoA.localeCompare(textoB);
    });
    itemsArray.forEach(item => {
        lista3Padre.appendChild(item);
    });
    console.log("Los elementos de la lista han sido ordenados alfabeticamente.");
} else {
    console.log("No se encontró la lista con el ID lista-ordenar");
}
//16. Ejercicio 18
const todasLasSecciones = document.querySelectorAll("section")
todasLasSecciones.forEach((seccion, index) => {
    seccion.setAttribute("data-index", index);
    console.log(`Atributo 'data-index=${index}' agregado a la sección: ${seccion.querySelector('h2').textContent}`);
});
console.log("Proceso completado");
//17. Ejercicio 19
const contadorLi = document.querySelectorAll("li").length;
const divResultado = document.createElement("div");
divResultado.textContent = `Resultado: Hay ${contadorLi} nodos <li> en el documento.`;
divResultado.style.marginTop = "20px";
divResultado.style.padding = "10px";
divResultado.style.backgroundColor = "rgba(131, 131, 57, 1)";
document.body.appendChild(divResultado);
const numDivsHijos = 3; 
const divPrincipal = document.createElement("div");
divPrincipal.id = "contenedor-principal";
divPrincipal.textContent = "Contenedor Principal (Ej. 20)"
for (let i = 1; i <= numDivsHijos; i++) {
    const divHijo = document.createElement("div");
    divHijo.classList.add("div-hijo");
    divHijo.textContent = `Div Hijo ${i}: `; 
    const spanInterno = document.createElement("span");
    spanInterno.classList.add("span-interno");
    spanInterno.textContent = "Nivel interno";
    divHijo.appendChild(spanInterno);
    divPrincipal.appendChild(divHijo);
document.body.appendChild(divPrincipal);
console.log(`Se creó y agregó una estructura anidada de ${numDivsHijos} niveles`);
}
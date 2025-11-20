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
// 1. Ejercicio 1
console.log("Documento cargado correctamente.");
// 2. Ejercicio 2
console.log("Título del documento:", document.title);
// 3. Ejercicio 3
const primerH2 = document.querySelector("h2");
console.log("Texto del primer h2:", primerH2.textContent);
// 4. Ejercicio 4
const parrafos = document.querySelectorAll("p");
parrafos.forEach(p => p.textContent = "Texto actualizado dinámicamente"); 
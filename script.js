const parrafo = document.getElementById("pCambiar");
const boton = document.getElementById("btnCambiar");

boton.addEventListener("click", () => {
  parrafo.innerHTML = "Texto cambiado"
})
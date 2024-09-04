const btnEliminar=document.getElementById("btnEliminar");

let txtNombre=document.getElementById("txtNombre");
let mensaje=document.getElementById("mensaje");
let nombre="";

btnEliminar.addEventListener("click", function(event){
    localStorage.clear();
    mensaje.innerText="Por favor ve al index e ingresa tu nombre"
})

window.addEventListener("load",function(event){
    event.preventDefault();

    if (this.localStorage.getItem("nombre")!=null) {
        nombre=this.localStorage.getItem("nombre");
        console.log(`Hola, ${nombre} bienvenido/a de nuevo`)
        mensaje.innerText=`Hola, ${nombre} bienvenido/a de nuevo`
    }
});

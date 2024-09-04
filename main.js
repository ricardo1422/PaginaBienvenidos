/*BOTONES*/
const btnGuardar= document.getElementById("btnGuardar");


/*Variables*/
const alertValidaciones=document.getElementById("alertValidaciones");
const alertValidacionesTexto=document.getElementById("alertValidacionesTexto");



btnGuardar.addEventListener("click", function(event){
    txtNombre.style.border="";
    alertValidacionesTexto.innerHTML=``;
    alertValidaciones.style.display="none";
    if(txtNombre.value==""){
        txtNombre.style.border="solid red medium"
        alertValidacionesTexto.innerHTML=`El <strong>Nombre</strong> no es correcto.<br>`;
        alertValidaciones.setAttribute('class','alert alert-danger');
        alertValidaciones.style.display="block";
    }else
    {
        localStorage.clear();
        localStorage.setItem("nombre", txtNombre.value);
        txtNombre.style.border="solid verde medium"
        alertValidacionesTexto.innerHTML=`<strong>Nombre</strong> Guardado correctamente.<br>`;
        alertValidaciones.setAttribute('class','alert alert-success');
        alertValidaciones.style.display="block";

    }
   
})




function mensaje(){

    let usuarios = document.getElementById("usuarios").value;
    let password = document.getElementById("password").value;

    if(usuarios != "" && password != ""){
        alert("Iniciando sesión");
    }
    else{
        alert("Debe llenar los campos faltantes");
    }
}
"use stict"
const form = document.querySelector(".form");
const ticket = document.querySelector(".ticket")
const home = document.querySelector(".home");
const nameUser = document.getElementById("nameUser");
const infoHb = document.getElementById("infoHb");
const emailAddress = document.getElementById("emailAddress");
const nameTikect = document.getElementById("infoName");
const uploadAvatar = document.getElementById("uploadAvatar");
const foto = document.getElementById("foto");

function mostrarTicket(){
    ticket.style.display = "flex";
    home.style.display = "none";
  

}
function validarDatos(nombreCampo, valor){
    switch (nombreCampo) {
        case "fullName":
            return /^(?!.*(?:[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{4}|[aeiouAEIOUáéíóúÁÉÍÓÚ]{4}))(?:[A-Za-záéíóúÁÉÍÓÚüÜñÑ]{3,10}(?:[ ][A-Za-záéíóúÁÉÍÓÚüÜñÑ]{3,10})?)$/m.test(valor);
        case "Email":
            return /^[a-z0-9]+(?:[-\._]?[a-z0-9]+)*@(?:[a-z0-9]+(?:-?[a-z0-9]+)*\.)+[a-z]+$/i.test(valor);
        case "GitHubUsername":
            return /\B@[a-z0-9_-]+/g.test(valor);
        
        default:
            return true;
    }
}
function generarTicket(event){
    
    event.preventDefault();
    const userData = {};
    const formData = new FormData(form);
    for (const [key, value] of formData) {
        if (!validarDatos(key, value)){
            alert(`el campo ${key} es incorrecto. valor ingresado ${value}`);
            return;
        }
        console.log(userData)
        userData[key] = value;
    }
    
    nameUser.textContent = userData.fullName;
    nameTikect.textContent = userData.fullName;
    emailAddress.textContent = userData.Email;
    infoHb.textContent = userData.GitHubUsername;
    mostrarTicket();
}
function cargarArchivo(e){
    console.log(e.target.files )
    const reader = new FileReader();
    reader.onload = function (e){
        foto.src = e.target.result; 
        
    }
    reader.readAsDataURL(e.target.files[0])
}
     

form.addEventListener("submit", generarTicket)
uploadAvatar.addEventListener("change", cargarArchivo )
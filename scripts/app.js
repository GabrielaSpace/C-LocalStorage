// 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:

// Nombre
// Email
// Mensaje
// URL imagen

// Guardar en Local Storage los datos de contacto enviados de cada usuario
// Mostrar los datos de los contactos guardados en el DOM
// Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave


let formul = document.querySelector('#formulario');


formul.addEventListener('submit', function(event){

    event.preventDefault();

    let nombre =  event.target.fname.value;
   let email =   event.target.email.value;
   let message =   event.target.message.value;
   let urlImg =   event.target.urlImg.value;

const dataUser ={
    nombre,
    email,
    message,
    urlImg
}
console.log(dataUser);

    localStorage.setItem(nombre, nombre);
    localStorage.setItem(email, email);
    localStorage.setItem(message, message);
    localStorage.setItem(urlImg, urlImg);

})











//los muestro en consola
//los muestro en pantalla

let ul = document.querySelector('#listadatos');
for (let i in localStorage ){
   console.log(localStorage[i]);
   if(typeof localStorage[i] == 'string'){
    let li = document.createElement('li');
    li.append(localStorage[i]);
    ul.append(li);}

}












//lo borro 
let formulborrar = document.querySelector('#formulario2');


formulborrar.addEventListener('submit', function(){

    let nombre =  document.querySelector('#borrarfname').value;
    localStorage.removeItem(nombre, nombre);
    let email =  document.querySelector('#borraremail').value;
    localStorage.removeItem(email, email);
    let message =  document.querySelector('#borrarmessage').value;
    localStorage.removeItem(message, message);
    let urlImg =  document.querySelector('#borrarurlImg').value;
    localStorage.removeItem(url, url);

})

let formulborrarTodo = document.querySelector('#datos');


formulborrarTodo.addEventListener('submit', function(){

   localStorage.clear();
   /*  localStorage.clear(nombre, nombre); 
    localStorage.clear(email, email);
    localStorage.clear(message, message);
    localStorage.clear(url, url); */

})


// let nombre1= localStorage.getItem("nombre");
// document.getElementById("nombre1").innerHTML = nombre1;
// let email1= localStorage.getItem("email");
// document.getElementById("email1").innerHTML = email1;
// let message1= localStorage.getItem("message");
// document.getElementById("message1").innerHTML = message1;
// let urlImg= localStorage.getItem("urlImg");
// document.getElementById("urlImg"). innerHTML = urlImg;
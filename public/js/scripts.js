console.log('scripts success');

const qs = (element) => document.querySelector(element)
const qsa = (element) => document.querySelectorAll(element)
const $ = (element) => document.getElementById(element)

//Boton Ayuda
/* $('link-help').onclick = function() {
    alert('Ayuda!!')
} */


$('link-help').addEventListener('click' , () => {
    alert('Ayuda!!')
})

// Crea tu cuenta
/* $('link-register').onclick = function(e) {
    e.preventDefault() // prevenir lo que por defecto sucede, en este caso ir al formulario
    let response =  confirm('Queres registrarte?')
    if (response) {
        window.location.href = '/users/register'
   }
} */

$('link-register').addEventListener('click' , (e) => {
    e.preventDefault()
    let response =  confirm('Queres registrarte?')
    if (response) {
        window.location.href = '/users/register'
   }
})



//Buscador
/* $('form-search-products').onsubmit = function (e) { // onsubmit evento de formulario
    e.preventDefault()

    if($('keyword').value){ //Si keyword tiene valor entonces mando el formulario: e.target.submit
        e.target.submit()
    }
} */


$('form-search-products').addEventListener('submit' , (e) => {
    e.preventDefault()
    if($('keyword').value){ //Si keyword tiene valor entonces mando el formulario: e.target.submit
        e.target.submit()
    }
})


$('keyword').addEventListener('keydown' , (e) => console.log(e.code))
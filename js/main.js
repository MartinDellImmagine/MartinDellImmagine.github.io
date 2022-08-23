
const login = document.getElementById('login')
const visitors = document.getElementById('visitors')
let usuario = ""
let visitantes = 0


addEventListener('DOMContentLoaded', contador);

function contador(){
    visitantes = localStorage.getItem('visitantes')
    visitantes ++
    localStorage.setItem('visitantes',visitantes)
    visitors.innerHTML= `Visitas: <b>${visitantes}</b>`
    
    
    
    
}

login.addEventListener('click', identificarUsuario);

function identificarUsuario(){
    
    usuario = prompt('Ingrese su nombre de usuario: ')
    if (usuario == null){
        usuario = ""
    }
    
    localStorage.setItem('usuario', usuario)
    login.innerHTML= `Bienvenido/a ${usuario}`
    
}



let usuario_guardado = localStorage.getItem('usuario')

if(usuario_guardado ==null){
    usuario_guardado == ""
}
else(login.innerHTML= `Bienvenido/a ${usuario_guardado}`)



//console.log('localStorage.clear()')
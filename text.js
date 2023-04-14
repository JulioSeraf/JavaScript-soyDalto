let contenedor = window.document.querySelector('.contenedor')
let child = window.document.getElementsByClassName('child')
child.addEventListener('click', mouse)

function mouse(){
    
    switch(parseInt(valor)){
        case 1:
            console.log('clicou')
        break
        case 2:
            console.log('moveo')
            break
            default:1
     }
    
}
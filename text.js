let array1 = [];
let child = window.document.querySelector('.child')
let contenedor = document.getElementById('contenedor')
function add(){
 let num = window.document.getElementById('inum');
let valor = num.value;
    array1.push(valor)
    array1.toString()
    
child.textContent =  array1

}
function borrar(){
    array1.pop() = array1;
}

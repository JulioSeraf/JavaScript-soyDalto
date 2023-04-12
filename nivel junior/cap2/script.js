
let free = false;
const validarCliente = (time)=>{
let invitado = prompt('Tu nombre?');
let idade= prompt('idade ?');
if(idade < 18){
    alert('Sinto muito este festa es para mayores de idada!');
}else{
    alert(`Benvenido ${invitado}`)
    if(time >= 2 && time < 7 && free == false){
        alert('Puedes passar gratis, Despues de las 2 nos se paga la Primeira persona')
        free = true;
    }else{
        alert(`Som las ${time} Entrada cuesta 20$`);
    }
}
}
let time = prompt('Horas plese')
alert('Bemvenido a la fiesta del Amigo de cofla')
validarCliente(time)
let time2 = prompt('HORAS?')
validarCliente(time2)



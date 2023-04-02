let soma = (num1, num2) => {
    let tot = parseInt(num1) + parseInt(num2)
    return tot
}
let resta = (num1, num2) => {
    let tot = parseInt(num1) - parseInt(num2)
    return tot
}
let divis = (num1, num2) => {
    let tot = parseInt(num1) / parseInt(num2)
    return tot
}
let multi = (num1, num2) => {
    let tot = parseInt(num1) * parseInt(num2)
    return tot
}

alert ('¿Que operacion desejas realizar?')
 let res = prompt(`1: Soma , 2: Restar , 3: Multiplacao , 4 : divicion`)
 alert(' DIgite o valores:')
let valor1 = prompt('Valor 1 ?')
let valor2 = prompt('Valor 2 ?')
 if ( res == 1 || res == 'Soma'){
   window.document.write(`RESULTADO : ${soma (valor1,valor2)}`)
 }else if(res == 2){
    window.document.write(`RESULTADO : ${resta (valor1,valor2)}`)
 }else if(res == 3){
    window.document.write(`RESULTADO : ${multi (valor1,valor2)}`)
 }else if(res == 4){
    window.document.write(`RESULTADO : ${divis (valor1,valor2)}`)
 }
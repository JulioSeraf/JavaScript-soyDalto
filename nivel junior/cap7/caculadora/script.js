class calculadora{
    constructor(){
    }
    sumar(num1 ,num2){
        return parseInt(num1) + parseInt(num2);
    }
    resta(num1, num2){
         return  parseInt(num1) - parseInt(num2);
    }
    divis(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }
    multi(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }
    potencia(num,exp){
        return num**exp
    }
    raizQ(num){
        return Math.sqrt(num)
    }
    raizC(num){
        return Math.cbrt(num)
    }
  
}



let res = prompt(`¿Que operacion deseja: (1)Sumar , (2)Restar , (3)Multiplacao ,  (4)divicion, (5)Potencia, (6)RaisQ,  (7)RaizC.`)
if (res >= 1 && res <= 5){
alert(' DIgite o valores:')
let valor1 = prompt('Valor 1 ?')
let valor2 = prompt('Valor 2 ?')
const calculador = new calculadora();
 if ( res == 1 || res == 'Soma'){
    let res = calculador.sumar(valor1,valor2)
   window.document.write(`RESULTADO : ${res}`)
 }
 else if(res == 2){
    let res = calculador.resta(valor1,valor2)
   window.document.write(`RESULTADO : ${res}`)
 }
 else if(res == 3){
    let res = calculador.multi(valor1,valor2)
    window.document.write(`RESULTADO : ${res}`)
 }
 else if(res == 4){
    let res = calculador.divis(valor1,valor2)
   window.document.write(`RESULTADO : ${res}`)
 }
 else if (res == 5 ){
    let res = calculador.potencia(valor1, valor2)
    window.document.write(`Resultado : ${res}`)
 }
}
else if( res >= 6){
    let valor = prompt('Digite o Valor:')
    const calculador = new calculadora();
    if(res == 6){
        res = calculador.raizQ(valor)
        window.document.write(`Resultado : ${res}`)
    }else if (res == 7){
        res = calculador.raizC(valor);
        window.document.write(`Resultado : ${res}`);
    }
 }

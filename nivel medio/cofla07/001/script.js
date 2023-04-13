class ordemadores{
    constructor(modelo,memoria,tela, precio, ){
        this.modelo = modelo;
        this.memoria = memoria;
        this.tela = tela;
        this.precio = precio;
    }
    info(){
      return `
      <br> Marca <strong>${this.modelo}</strong><br>
      Memoria:<strong>${this.memoria}</strong><br>
      Resolucion de Tela:<strong>${this.tela}</strong><br>
      Precio: <strong style="color:green;">${this.precio}</strong>`
    }
}
function comprar(){
    let res = window.prompt('Selecione el Pc a Comprar: Mac [1], Sansumg [2], Php[3], MyPc[4]')
    res --;
    let confirme = window.confirm(`Seguro q queres comprar ${modelos[res].modelo}`)
    if (confirme == true){
        document.write(`Ordenador ${modelos[res].modelo} Comprado com Exito!`)
    }else[
        document.write('Compra cancelada')
    ]
    

}

let alto = window.screen.availHeight;
let largo = window.screen.availWidth;
const sansumg = new ordemadores('Sansumg','8ram','FULL-HD','$1800');
const php = new ordemadores('Php','16ram','hd','$2000');
const mac = new ordemadores('Mac','20ram','FULL-HD 3000XPRO','$3000');
const myPc = new ordemadores(`MyPc`,'16ram',`${alto} por ${largo}`,'$4000')
let modelos = [mac,sansumg,php,myPc];

window.alert('Benvenido a la PcMAXplus, a seguir los ordenadores em venda!')

for (i = 0; i < modelos.length; i++){
    document.write(modelos[i].info() + '<br>')
}





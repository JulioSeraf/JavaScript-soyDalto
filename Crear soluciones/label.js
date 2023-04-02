class carro{
    constructor(marca, tamanho, ano){
        this.marca = marca;
        this.tamanho = tamanho;
        this.ano = ano;
        this.inf = `El nuevo Carro de ${this.ano} de la marca ${this.marca} tiene um tamaño de ${this.tamanho}`
    }
    info(){
        document.write(this.inf + "<br>");
    }
} 

let mercedea = new carro('Mercedeas',' 2 metros', 2022);
let honda = new carro('Honda', '1,5 metros', 2021)

mercedea.info();
honda.info()
class app {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.pontos = puntuacion;
        this.tamaño = peso;
        this.iniciar = false;
        this.instalar = false;

    }
    info(){
        return `Informacio: <br>
        Numero de descargas +${this.descargas} <br>
        Puntuancion de Usuarios ${this.pontos} <br>
        Tamanho da App : ${this.tamaño}`
        }
    instala (){
         if (this.instalar == false){
             alert('App instalada correntamente!');
             this.instalar = true;
        }
    }

    desinstalar (){
        if(this.instalar == true){
            this.instalar = false;
            alert('App Desinstalda correntamente!');
        }
    }
    abrir(){
        if(this.iniciar == false && this.instalar == true){
            this.iniciar = true;
            alert('App iniciada');
        }

    }
    cerrar(){
        if ( this.iniciar == true && this.instalar == true){
            this.iniciar = false;
            alert('App Cerrada')
        }
    }
}

const gameMario = new app('16,000 descargas','5 estrellas no app','tamaño 1gb');
const gameSonic = new app('10,000 descarga', '3 estrellas', 'tamanho 20mb')
document.write(gameMario.info())

gameMario.instala()
gameMario.abrir()
gameMario.cerrar()
gameMario.desinstalar()

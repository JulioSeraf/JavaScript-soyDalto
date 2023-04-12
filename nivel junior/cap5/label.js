class mobile {
    constructor(color, peso, resolucionP, resolucionC, mRam){
        this.color = color;
        this.peso = peso;
        this.resolucionP = resolucionP;
        this. resolucionC = resolucionC;
        this.mRam = mRam;
        this.encender = false;
    }
    enceder(){
        if( this.encender == false){
            alert('Mobile encendendo');
            this.encerder == true;
        }else {
            alert('Mobile apagando');
            this.encender == false;
        }
    }
    reiniciar (){
        if(this.encender == true){
            alert('Reiniciando Mobile');
        }else{
            alert('Mobile apagado');
        }

    }
    foto(){
        alert(`Fota tomada em una resolucion de ${this.resolucionC}`);

    }
    gravar(){
        alert(`Gravando video em ${this.resolucionC}`);
    }
    info(){
        return `
        Color: <strong> ${this.color}</strong> <br>
        Peso: <strong> ${this.peso}</strong> <br>
        Resolucion de pantalla : <strong> ${this.resolucionP}</strong> <br>
        Resolucion de camera: <strong> ${this.resolucionC}</strong> <br>
        Memoria Ram: <strong> ${this.mRam}</strong> <br>`;
    }
    
}

class altagam extends mobile{
        constructor(color, peso, resolucionC,resolucionP,mRam,cameraextra){
            super(color, peso, resolucionC,resolucionP,mRam);
            this.camextra = cameraextra;
        }
        gavarlento(){
            alert('Esta gravando em camera lenta');
        
        }
        reconocimentoFacial(){
            alert('Realiazando Reconocimento facial');
        }
        infoaltagama(){
            return this.info() + `Camara Extra: <strong> ${this.camextra} </strong><br>`
        }
}

const iphone = new mobile('black','0.8gr','fullHD','15MP','4RAM');
const samsung = new mobile('white','0.3gr','fullHD','20MP','8RAM');
const xiaomi = new mobile ('yellow','0.6gr','fullHD','10PX','8RAM');
const samsungS22 = new altagam('black','0.2gr','ultrafullHD','50MP','10RAM','100MP')
const iphone15 = new altagam ('Gray','0,1gr','ultrafullHD','40PX', '16RAM','150MP')

window.document.write(iphone.info(),'<br>',  xiaomi.info(), `<br>`, xiaomi.info(), '<br>', iphone15.infoaltagama(), '<br>', samsungS22.infoaltagama())

class Persona {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

 const datos = [
    ['jlio','@serfim'],
    ['carlos','@carlinho'],
    ['maria','@mariii'],
    ['jose ','@joselin'],
    ['ojuara','@desafiador'],
 ]
 let personas = [];
for(persona in datos) {
    personas[persona] = new Persona(datos[persona][0],datos[persona][1])
}

const obterPersona = (id,cb) => {
    

}
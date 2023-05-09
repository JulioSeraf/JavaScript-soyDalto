class persona {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

let datos = new persona('julio serafim', '@serafim');

const datosPersonas = [
    ['julio','@serafim'],
    ['antonio','@antonis'],
    ['carlos','@carlinhos'],
    ['maria','@amamama'],
    ['isabele','@isasoa'],
    ['sena','@altonsena'],
    ['ajose ','@ajoseee'],
];
let personas = [];
for ( per in datosPersonas){
    personas[per] = new persona(datosPersonas[per][0],datosPersonas[per][1])

}
 const obtenerPersona = (id,cb)=>{
    if(personas[id] == undefined){
        cb('No se ha encontrado la persona');
    }else{
        cb(null,personas[id])
    }
 }
 obtenerPersona(6,(err,persona)=>{
    if(err){
        console.log(err);
    }else{
        console.log(persona.nombre);
        console.log(persona.instagram)
    }
 })


 


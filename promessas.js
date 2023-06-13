
class persona{
    constructor(nombre,instagran ){
        this.nome = nombre;
        this.instagran = instagran; 
    }
}
const datosPersona =[['carlos','@Carlinhos'],
['maria', '@mariabel'],
['antonio','@tonnorel'],
['Paula','@Paulanela'],
['maay','@maryyyybell']
]

const personas = [];

for(i in datosPersona){
   personas[i] = new persona(datosPersona[i][0],datosPersona[i][1])
}

function obtenerPersona(id,callback){
    if(persona[id]== undefined){
        callback('No se a encontrado la persona!.')
    }else(
        callback(null,persona[id])
    )
}

obtenerPersona(0, (err, persona)=>{
    if(err){
        console.log(err)
    }else{
        console.log(persona)
    }
})
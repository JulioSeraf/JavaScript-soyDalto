
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

function obtenerPersona(nombre){
    for(i in datosPersona){
        
    }
}
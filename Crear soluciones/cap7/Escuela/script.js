const obtenerinfo = (materia)=>{
    let materias = {
        fisica: ["Pr:Carlos",'julio',"carlos","maria","jose","paula"],
        matematica:["Pr:Antonio",'julio',"carlos","maria","jose","paula"],
        programacion:["Pra:Josefa",'julio',"carlos","maria","jose","paula"],
        quimica:["Pr:Golias",'julio',"carlos","maria","jose","paula"],
    }
    if( materias[materia] !== undefined){
        return materias[materia];
    }else{
        return false;
    }    
}
 
let res = prompt('Informe a materia:');
let informacion = obtenerinfo(res);
let prof = informacion[0];
let alumnos = informacion;
alumnos.shift();

if (informacion !== false){
    document.write(`<strong style = "color:blue;">${prof}</strong> de  <strong style = "color:gray;">${res}</strong> confirma Precencia de los alumnos <strong style = "color:red;">${alumnos}</strong>
    `);
}
else {
    document.write('Materia nao existe');
}


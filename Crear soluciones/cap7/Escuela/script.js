const obtenerinfo = (materia)=>{
    let materias = {
        fisica: ["Pr:Carlos",'julio',"carlos","maria","jose","paula"],
        matematica:["Pr:Antonio",'julio',"carlos","maria","jose","paula"],
        programacion:["Pra:Josefa",'julio',"carlos","maria","jose","paula"],
        quimica:["Pr:Golias","carlos","maria","jose","paula"],
    }
    if (materias[materia] == undefined){
        return materias
    }else{
        return [materias[materia],materia, materias]
    }
      
}
const mostrarinfo = (materia)=>{
 let informacion = obtenerinfo(materia)
 let prof = informacion[0][0];
 let alumnos = informacion[0];
 alumnos.shift();
 if(informacion !== false){
 document.write(`<br>Alunos presente en clase:<strong style ="color:blue;"> ${alumnos}</strong><br> Professor da materia ${informacion[1]}: <strong style ="color :red;">${prof}</strong><br>`);
 }
}

const contarinfo = (alumno)=>{
    let informacion = obtenerinfo();
    let clasesPresente = [];
    let cont = 0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cont++
            clasesPresente.push('<br>' + info);
        }
    }
    if(cont >= 1){
    return `<br>${alumno} esta em ${cont} clases.<br> Clases com Precencia : ${clasesPresente}`;
    }else{
        return `<br> Aluno nao encontrado`
    }
    
}


mostrarinfo('fisica')
mostrarinfo('programacion')
mostrarinfo('quimica')
mostrarinfo('matematica')
contarinfo('julio')
document.write(contarinfo('paula'))



let cantidade = prompt('Numero de alunos');
let totalumnos = [];
for (let i = 0; i < cantidade; i++){
  totalumnos[i] = [prompt('Nombre do aluno' + (i+1)),0];
}
const prec = (nombre, p)=>{
    let precensia = prompt(nombre);
    if( precensia == 'p' || precensia == 'P'){
        totalumnos[p][1]++;
    }
}

for (let i = 0 ; i < 5; i++){
    alert(i)
    for (alumno in totalumnos){
        prec(totalumnos[alumno][0],alumno);
    } 
}
for( alumno in totalumnos){
    window.document.body.innerHTML += (` O alumno ${totalumnos[alumno][0]} teve um total de ${totalumnos[alumno][1]} precencia marca
    ...........Total de Ausencia = ${30 - totalumnos[alumno][1]} <br>`)
    if((30 - totalumnos[alumno][1]) > 18 ){
        window.document.body.innerHTML += `alumno reprovado <br>`
}
}
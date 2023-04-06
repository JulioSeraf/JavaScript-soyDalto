const clases = (materia)=>{
    let materias = {
        fisica: ['carlos0','maria','jose','antonio','pedro','paula','ana','jessica'],
        matematica: ['carlos0','maria','jose','antonio','pedro','paula','ana','jessica'],
        programacio: ['carlos0','maria','jose','antonio','pedro','paula','ana','jessica'],
        quimica: ['carlos0','maria','jose','antonio','pedro','paula','ana','jessica','pedro'],
        lengua: ['carlos0','maria','jose','antonio','pedro','paula','ana','jessica','cofla','roberto','clara']
    }
    return materias[materia];
}
let alumno = prompt('Benvenido!!? informe o nome:')
let pergunta = prompt('Qual materia deseas se escrever ?')
let perg = clases(pergunta)
if(perg == undefined){
    document.write('materia nao existe!')
}else{
    if(perg.length <= 10){
        let res = prompt(`Clase com um total de ${perg.length}/10 alumno. Te queres escrever? sim/nao?`)
        if(res == 'sim' || res == 'SIM'){
            perg.push(alumno)
            document.write(`Alunos en clase: <br> <strong  style="color:blue;">${perg}</strong>`)
        }
    }else if(perg.length >= 11){
        document.write(`Lo sieto <strong>${alumno}</strong>a materia de <strong> ${pergunta} </strong> ja esta completa!`)
    }
}
const clases = (materia)=>{
    let materias = {
        fisica: ['carlos0','maria','jose','antonio','pedro','paula','ana','jessica'],
        matematica: ['carlos0','maria','jose','antonio','pedro','paula','ana','jessica'],
        programacion: ['carlos0','maria','jose','antonio','pedro','paula','ana','jessica'],
        quimica: ['carlos0','maria','jose','antonio','pedro','paula','ana','jessica','pedro'],
        lengua: ['carlos0','maria','jose','antonio','pedro','paula','ana','jessica','cofla','roberto','clara']
    }
    return materias[materia];
}
function escricion (perg){
    if(perg.length <=10){
        let res = prompt(`La materia de ${pergunta} tiene un total de ${perg.length}/10 alumnos. queres escrivir-se? si/no?`);
        if(res == 'si' || res == 'SI'){
            perg.push(alumno);
            document.write(`<br>Benvenido a Clase de <strong>${pergunta}</strong>!! <br> confira os alumno em clase abajo.<br><strong> ${perg}</strong><br>`)
        }else{
            alert('OK')
        }
    }
    else{
        alert('materia ja se encontra completa !!')
    }
    
}
let alumno = prompt('Benvenido!!? informe o nome:');
let resposta = 'si';
do{
    var pergunta = prompt('Qual materia deseas se escrever');
    let perg = clases(pergunta);
    if(perg !== undefined){
        escricion(perg);
    }else{
        alert('Materia nao existe!')
    }  
    resposta = prompt('Queres escreviser em outra materia?')  
}while(resposta == 'si')

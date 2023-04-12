let materias = {
    fisica: [90,6,4,'fisica'],
    matematica:[80,8,2,'matematica'],
    logicaProgramacion:[75,8,4,'logicaProgramacion'],
    calculo:[90,8,4,'calculo'],
    quimica:[60,5,4,'quimica'],
    lengua:[85,7,2,'lengua'],
    biologia:[90,5,4,'biologia'],
    historia:[50,5,3,'historia']
}

const assitencia = ()=>{
    for(materia in materias){
        let assitencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3]);
        if(assitencias >= 90){
            console.log('%c  Aprovado', 'color:green;');
        }
        else {
            console.log('%c  Reprovado','color:red; ')
        }
        if(promedio >= 7){
            console.log('%c  Promedio em Orden','color:green;')
        }else{
            console.log('%c  Promedio Reprovado','color:red; ')
        }
        if(trabajos >= 3){
            console.log('%c  Trabojos em Orden','color:green;')
        }else{
            console.log('%c  Trabajos en falta','color:red;')
        }
    }
}

assitencia();
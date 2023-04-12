let trabajo = '4:00hr de trabajo';
let estudios = '1:40hr de estudios';
let tp = '1:40hr de estudios ';
let homework = '30:00 minutos de cosas de la casa';
let descanso = '10:00 minutos de descanso';

for(i = 1; i <= 14; i++){
    if(i == 1){
        console.group('SEMANA 1');
    }else if (i == 7){
        console.groupEnd();
        console.group('SEMANA 2');
    }
console.log('TAREAS');
console.group(` DIA ${i}`);
console.log(trabajo);
console.log(descanso);
console.log(estudios);
console.log(tp);
console.log(homework);
console.groupEnd();
}
console.groupEnd();
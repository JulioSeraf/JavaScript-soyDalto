const button = document.getElementById('send-botton');
const telaInfo = document.querySelector('.res');
 
button.addEventListener('click', ()=>{
    let  msg, nota, media;
    try{
        nota = parseInt(document.getElementById('inota1').value);
        if(isNaN(nota)){
            throw `ERROR`;
        }
       msg = verificarNota(nota);
       media = mediaNota(8,7,nota);
    }catch(e){
        nota = 'Erro nas informacion';
        msg = 'verifique que informaste los datos corretamente';
    }
   infoError(nota,msg,media);
})

const mediaNota = (nota1,nota2,n)=>{
  let tot = (n + nota1 + nota2)/3;
  if (tot < 7){
    return "<strong style='color:red;'> REPROVADO</strong> <br> Media: " + tot;
  }
  return "<strong style='color:green;'> APROVADO </strong> <br> Media: " + tot;
}
const verificarNota = (n)=>{
    let resultado;
    switch(n){
        case 1: resultado = 'So pode ser zuera';
        break;
        case 2: resultado = 'serio?';
        break;
        case 3: resultado = 'Ta de sacangem';
        break;
        case 4: resultado = 'ruim de mais';
        break;
        case 5: resultado = 'triste';
        break;
        case 6: resultado = 'so pode fazer isso?';
        break;
        case 7: resultado = 'vc pode conseguir mais';
        break;
        case 8: resultado = 'aceitavel';
        break;
        case 9: resultado = 'Excelente';
        break;
        case 10: resultado = 'Increditavel, vc e inevitavel';
        break;
        default: resultado = null
    }
    return resultado;

}

const infoError = (no,mg,media)=>{
    telaInfo.innerHTML = ""
    telaInfo.innerHTML += (no) + '<br>';
    telaInfo.innerHTML += (mg) + '<br>';
    telaInfo.innerHTML += (media);


}
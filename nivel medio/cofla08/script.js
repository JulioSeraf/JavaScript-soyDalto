const nombre = document.getElementById('iname');
const email = document.querySelector('#iemail');
const materia = document.getElementById('imateria');
const enviar = document.getElementById('but-enviar');
const res = document.querySelector('.resultado');
enviar.addEventListener('click' ,(e)=>{
    e.preventDefault();
   let error = verificar(); 
   if(error[0]) {
    res.innerHTML = error[1];
    res.classList.add('red')
    res.classList.remove('green')

   }else{
    res.innerHTML = 'Solicitud Enviada Correctamente:'
    res.classList.add('green')
    res.classList.remove('red')
   }
})

const verificar = ()=>{
    let error = [];
    if (nombre.value.length < 5){
        error [0] = true;
        error [1] = 'EL nombre no Puede tener menos de 5 Caracteres!';
        return error;
    }else if (nombre.value.length > 40) {
        error[0] = true;
        error[1] = 'EL nombre no puede tener mais de 40 Caracteres!';
        return error;
    }else if (email.value.length < 5 ||
              email.value.length > 40 ||
              email.value.indexOf("@") == -1||
              email.value.indexOf(".") == -1){
              error[0] = true;
              error [1] = 'Email no Corresponde!!.'
              return error;
    }else if (materia.value.length < 4 ){
        error[0] = true;
        error[1] = 'Materia invalida!'
        return error;
    }

    error[0] = false;
    return error;

}

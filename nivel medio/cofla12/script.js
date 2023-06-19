
const materiaHtml = document.querySelector('.materias');
const nombre = document.querySelector('.nombre');
const nota = document.querySelector('.nota');

const materias = [
    {
        nombre: 'julio',
        nota: 10
    },{
        nombre: 'maria',
        nota: 7
    },{
        nombre: 'Pedro',
        nota: 8
    },{
        nombre: 'jose',
        nota: 10
    },{
        nombre: 'juana',
        nota: 3
    }
]

function obtenerMateria(id){
    return new Promise((res,rej)=>{
        let materia = materias[id];
        if(materia === undefined){
             rej('Lo sieto Materia no Existe!!');
        }else{
        setTimeout(()=>{ 
                res(materia);
        },Math.random()*400)
    }  
    })
}

const mostrarMateria = async ()=>{
    let res = await 
}
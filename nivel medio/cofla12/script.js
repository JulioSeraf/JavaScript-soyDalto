
const materiaHtml = document.querySelector('.materias');

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
        },2000)
    }  
    })
}
 
 async function mostra(){
    for(let i in materias){
       let res = await obtenerMateria(i)
       let newHtmlCode = `
       <div class="materia">
           <div class="nombre">${res.nombre}</div>
           <div class="nota">${res.nota}</div>
       </div>`;
    materiaHtml.innerHTML += newHtmlCode;
 }
    }
  
 mostra();
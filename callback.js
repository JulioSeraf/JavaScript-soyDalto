const archivos  = [{
    nome: 'julio',
    sobrenome: 'Serafim',
    apelido: 'juninho'
},
{
    nome: 'carlos',
    sobrenome: 'cesar',
    apelido: 'carlinho'

},
{
    nome: 'Maria',
    sobrenome: 'Silva',
    apelido: 'PulaCerca',
    info: " nome: Maria sobrenome: Silva apelido: PulaCerca "

}]
const retorDatos = ()=>{
    return archivos
}
// const archivos = [];


const getDatos = ()=>{
    return new Promise((resolve, reject)=>{
        if(archivos.length === 0){
            reject(new Error('archivo vacios'));
        }
         setTimeout(()=>{
        resolve(archivos);
    },2000)
})}
   
// getDatos()
//     .then((datos)=> console.log(datos))
//     .catch((err)=> console.log(err));

async function testDatos(){
    try{
        const datos = await getDatos();
        console.log(datos)
    }catch(err){
        console.log(err.message)
    }
    
}

console.log(testDatos())

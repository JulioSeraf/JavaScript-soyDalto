let contener = document.querySelector(".grid-contener");
let alumnos =[
    {
        nombre: 'Julio Serafim',
        email: 'Serafimmone23@gmail',
         materia: 'fisica'},
    {
        nombre: 'Leonidas',
         email: 'leonidas@gmail',
        materia: 'quimica'},
    {
        nombre: 'Ojuara',
        email: 'ojuaraelhomem@gmail',
        materia: 'Religiao'},
    {
        nombre: 'Luffy',
        email: 'kaizokuano@gmail',
        materia: 'Biologia'}

    ]
    const botton = document.querySelector('.confirmar');
    for(alumno in alumnos){
        let datos = alumnos[alumno];
       let nombre = datos['nombre'];
       let email  = datos['email'];
       let materia = datos['materia'];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select id="semana-elegida">
            <option value="semana 1">Semana 1</option>
            <option value="semana 2">Semana 2</option>
        </select>
    </div>`
   contener.innerHTML += htmlCode;
    }

    botton.addEventListener('click', ()=>{
      let confirmar = confirm('¿Queres confirmar las mesas ?');
      if(confirmar){
        document.body.removeChild(botton);
        let elementos = document.querySelectorAll('.semana');
        let semanaElegidas = document.querySelectorAll("#semana-elegida")
        for(elemento in elementos){
           let semana = elementos[elemento];
            semana.innerHTML = semanaElegidas[elemento].value
        }
      }
    })
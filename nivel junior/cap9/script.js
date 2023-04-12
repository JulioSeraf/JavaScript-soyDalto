const conterTodo = window.document.querySelector(".flex-container");
const crearLlave = (nombre,modelo,precio) =>{
    img = "<img src='llave.png' class='llave-img'>",
    nombre = `<h2>${nombre}<h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <strong>${precio}</strong></p>`;
    return [img,nombre,modelo,precio];
}
const changeHidden = (number)=>{
    document.querySelector('.key-data').value = number
}
let documentFragment = document.createDocumentFragment();

for(var i = 0 ; i < 20; i++){
    
    let modelorandom = Math.random()*10000;
    let preciorandom = Math.random()*10+30;
    let modelo = Math.round(modelorandom);
    let precio = Math.round(preciorandom);
    let llave = crearLlave(`llave ${i}`, `Modelo ${modelo}`,`Precio $${precio} `);
    let div = document.createElement('DIV');
    div.addEventListener("click",()=>{changeHidden(modelo)});
    div.tabIndex = i;
    div.classList.add(`ìtem-${i}`, "flex-item");
    div.innerHTML += llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);

}

conterTodo.appendChild(documentFragment);
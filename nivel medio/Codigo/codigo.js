    let request;
 if(window.XMLHttpRequest){
    request = new XMLHttpRequest();

 }else{
    request = new ActiveXObject("Microsoft.XMLHTTP");

 }

 request.addEventListener("load",()=>{
    let respuesta;
    if(request.status == 200){
        respuesta = request.response;
    }else{
    respuesta = "Lo Sieto , no se a encontrado el recurso!"
    }
    console.log(JSON.parse(respuesta));
 })
 request.open("GET","archivo.txt");
 request.send();
 

 
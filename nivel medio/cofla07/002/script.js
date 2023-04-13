
function info(){
let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocolo = window.location.protocol;
let informe = `
Protocolo: ${protocolo} <br>
Href: ${href} <br>
Hostname: ${hostname}<br>
Pathname: ${pathname}<br>`
document.write(informe)
}

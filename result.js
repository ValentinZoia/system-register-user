
// Obtener el nombre de usuario de la URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Mostrar el mensaje de bienvenida personalizado
const welcomeMessage = document.getElementById('container');
welcomeMessage.textContent = `Bienvenido, ${username}!`;



/*
function viewData(){
    let getLst = JSON.parse(localStorage.getItem('info'));
    
    elements.innerHTML ='';

    if(getLst==null){
    console.log('ok')
    }else{
        let element= getLst[getLst.length - 1];
        let div = document.createElement('div');
        div.innerHTML = `Creado Anteriormente: Nombre: ${element.name},
                                             Contraseña: ${element.password}`;
        elements.appendChild(div);

    /*
    getLst.forEach(element => {
        let div = document.createElement('div');
        div.innerHTML = `Creado Anteriormente: Nombre: ${element.name},
                                            Contraseña: ${element.password} `;
        elements.appendChild(div);
        
    });


}
}
viewData();
*/

/*
setInterval(viewData,1000)
    
*/



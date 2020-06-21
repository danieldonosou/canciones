import * as UI from './interfaz.js';
import {API} from './api.js';

UI.formularioBuscar.addEventListener('submit', (e)=>{
    e.preventDefault();

    //obtener datos del formulario
    let artista = document.querySelector('#artista').value;
    let cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '')
    {
        //error
        UI.divMensajes.innerHTML='Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');
        setTimeout(() => {
            UI.divMensajes.innerHTML='';
            UI.divMensajes.classList.remove('error');
        }, 3000);
    }
    else
    {
        //ok, realizar consulta a la api
        let api = new API(artista, cancion);
        api.consultaAPI()
        .then(data => {
            
            if (data.lyrics)
            {
                let letra = data.lyrics;
                UI.divResultado.textContent=letra;
            }
            else{
                UI.divMensajes.innerHTML='La canción no existe o no es de ese autor';
                UI.divMensajes.classList.add('error');
                setTimeout(() => {
                    UI.divMensajes.innerHTML='';
                    UI.divMensajes.classList.remove('error');
                    UI.formularioBuscar.reset();
                    UI.divResultado.textContent='';
                }, 3000);
            }
        });

    }
    console.log(artista, cancion);
});
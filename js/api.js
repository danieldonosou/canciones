export class API {
        constructor(artista, cancion)
        {
            this.artista=artista;
            this.cancion=cancion;
        }

        async consultaAPI() {
            let url = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);
            let respuesta= await url.json();
            return respuesta;
        }
}
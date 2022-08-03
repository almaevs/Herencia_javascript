window.addEventListener("load",function() {
    class Telefono{
        constructor(marca){
            this._marca=marca;
        }
        get marca(){
            return this._marca;
        }
        set marca(marca){
            this._marca=marca;
        }
        anuncio(){
            return "Ha llegado el nuevo teléfono de "+this.marca;
        }
    }
    class Modelo extends Telefono{
        constructor(marca,modelo){
            super(marca);
            this.modelo=modelo;
        }
        anuncioCompleto(){
            return this.anuncio()+": el modelo"+ this.modelo+": la marca "+this.marca;
        }
    }
    let miTelefono= new Modelo("Google","A");
    miTelefono.marca="Samsung";
    mensaje.innerHTML=miTelefono.anuncioCompleto();

console.log("hola");
},true);
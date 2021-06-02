import Anuncio from "./anuncio.js";

export default class AnuncioAuto extends Anuncio {
    constructor(id, titulo, transaccion, descripcion, precio, num_puertas, num_KMs, potencia){
        super(id, titulo, transaccion, descripcion, precio);
        this.num_puertas = num_puertas;
        this.num_KMs = num_KMs;
        this.potencia = potencia;
    }
}
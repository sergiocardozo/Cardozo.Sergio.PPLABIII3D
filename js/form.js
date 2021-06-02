import Anuncio from "./anuncio-auto.js";
import { obtenerId } from "./localstorage.js";


export const frmPrincipal = document.querySelector( '#frmPrincipal' );
/* MODIFICAR ACA */
export const labelId = document.querySelector( '#labelId' );
export const txtId = document.querySelector( '#txtId' );
export const txtTitulo = document.querySelector('#txtTitulo');
export const rdoTransaccion = frmPrincipal.transaccion;
export const txtDescripcion = document.querySelector('#txtDescripcion');
export const txtPrecio = document.querySelector('#txtPrecio');
export const txtPuertas = document.querySelector('#txtPuertas');
export const txtKms = document.querySelector('#txtKms');
export const txtPotencia = document.querySelector('#txtPotencia');


export const botonAlta = document.querySelector( '#btnAlta' );
export const botonBaja = document.querySelector( '#btnEliminar' );
export const botonModificar = document.querySelector( '#btnModificar' );
export const botonCancelar = document.querySelector( '#btnCancelar' );
export const botonLimpiarTabla = document.querySelector( '#btnClear' );

/* MODIFICAR ACA */
export const obtenerAnuncio = () => {

    const nuevoAnuncio = new Anuncio( obtenerId(),
                                            txtTitulo.value ,
                                            rdoTransaccion.value,
                                            txtDescripcion.value,
                                            txtPrecio.value,
                                            txtPuertas.value,
                                            txtKms.value,
                                            txtPotencia.value);

    return nuevoAnuncio;

}
/* MODIFICAR ACA */
export const clearForm = () => {

    txtTitulo.value = '';
    rdoTransaccion.value = 'Venta';
    txtDescripcion.value = '';
    txtPrecio.value = '';
    txtPuertas.value = '';
    txtKms.value = '';
    txtPotencia.value = '';
    
    botonAlta.classList.remove( 'desaparecer' ); 
    
    labelId.classList.add( 'desaparecer' );
    txtId.classList.add( 'desaparecer' );
    botonBaja.classList.add( 'desaparecer' );
    botonModificar.classList.add( 'desaparecer' );
    
};
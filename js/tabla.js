/* MODIFICAR ACA */
import { txtTitulo, rdoTransaccion, txtDescripcion, txtPrecio, txtPuertas, txtKms, txtPotencia, txtId } from "./form.js";
/* ESTO NO */
import { botonAlta, botonBaja, botonModificar } from "./form.js";


export const divTabla = document.querySelector( '#divTabla' );


const crearTabla = ( lista ) => {

    const tabla = document.createElement( 'table' );

    tabla.appendChild( crearCabecera( lista[0] ) );
    tabla.appendChild( crearCuerpo( lista ) );

    return tabla;
};


const crearCabecera = ( item ) => {

    const tHead = document.createElement( 'thead' );
    const tr = document.createElement( 'tr' );

    for (const key in item) {
        
        const th = document.createElement( 'th' );
        const texto = document.createTextNode( key );

        th.appendChild( texto );
        tHead.appendChild(th);
    }


    return tHead;

};

const crearCuerpo = ( lista ) => {

    const tBody = document.createElement( 'tbody' );

    lista.forEach( element => {

        const tr = document.createElement( 'tr' );

        for (const key in element) {
            
            // table data
            const td = document.createElement( 'td' );

            // Como es un array asociativo, nos da el valor del atributo key.
            const texto = document.createTextNode( element[ key ] );
            td.appendChild( texto );
            tr.appendChild( td );

        }

        // console.log(element.id);

        if( element.hasOwnProperty( 'id' ) ) { // Si el elemento tiene la propiedad 'id'

            // #2
            tr.dataset.id = element[ 'id' ];

        } else {

            console.log( 'El elemento no tiene la propiedad "id".' );
            
        }

        //Le agrego el manejador del evento.
        agregarManejadorTR( tr, lista );

        tBody.appendChild( tr );

    });

    return tBody;

};

const agregarManejadorTR = ( tr, lista ) => {
    
    let idPersonaSeleccionada;

    if( tr ) { 
        
        tr.addEventListener( 'click', ( e ) => {

            e.preventDefault();
            idPersonaSeleccionada = parseInt( e.target.parentNode.dataset.id );

            cargarDatosForm( lista, idPersonaSeleccionada );

        });


    } else {
        console.log( 'tr null' );
    }

}
/* MODIFICAR ACA */
const cargarDatosForm = ( lista, id ) => {
    
    for (const anuncio of lista) {
        
        if( anuncio.id === id ) {

            txtId.value = anuncio.id;
            txtTitulo.value = anuncio.titulo;
            rdoTransaccion.value = anuncio.transaccion;
            txtDescripcion.value = anuncio.descripcion;
            txtPrecio.value = anuncio.precio;
            txtPuertas.value = anuncio.num_puertas;
            txtKms.value = anuncio.num_KMs;
            txtPotencia.value = anuncio.potencia;

            
            labelId.classList.remove( 'desaparecer' );
            txtId.classList.remove( 'desaparecer' );

            botonAlta.classList.add( 'desaparecer' );

            botonBaja.classList.remove( 'desaparecer' );
            botonModificar.classList.remove( 'desaparecer' );


            break;
        }

    }

};


export default crearTabla;
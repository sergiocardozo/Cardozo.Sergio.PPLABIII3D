export const obtenerId = () => {

    return JSON.parse( localStorage.getItem( 'nextId' )) || 1 ; // Si existe el valor guardado como next id, devuelvo eso. Sino devuelvo 20000

}

export const obtenerAnunciosLocalstorage = () => {

    return JSON.parse( localStorage.getItem( 'anuncios' )) || [] ; // 'gente' se llama la lista.

}

export const guardarDatos = ( lista, proximoId ) => {
    
    localStorage.setItem( 'anuncios', JSON.stringify( lista ) );
    localStorage.setItem( 'nextId', proximoId );

}
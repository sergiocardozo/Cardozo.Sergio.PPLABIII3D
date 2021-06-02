import { frmPrincipal } from "./form.js";
import {
  txtTitulo,
  rdoTransaccion,
  txtDescripcion,
  txtPrecio,
  txtPuertas,
  txtKms,
  txtPotencia,
} from "./form.js";
import {
  botonBaja,
  botonModificar,
  botonCancelar,
  
} from "./form.js";
import { obtenerAnuncio, clearForm } from "./form.js";
import {
  obtenerAnunciosLocalstorage,
  obtenerId,
  guardarDatos,
} from "./localstorage.js";
import crearTabla, { divTabla } from "./tabla.js";
import { txtId } from "./form.js";


let lista;
let proximoId;

window.addEventListener("load", initHanlders);

function initHanlders() {

  lista = obtenerAnunciosLocalstorage();
  proximoId = obtenerId();
  actualizarLista(lista);

  eventListeners();

  frmPrincipal.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
      const nuevoAnuncio = obtenerAnuncio();

      if (nuevoAnuncio) {
        lista.push(nuevoAnuncio);
        proximoId++;
        guardarDatos(lista, proximoId);
        actualizarLista(lista);
        clearForm();
      }
    } catch (error) {
      alert(error);
      clearForm();
    }
  });

  botonBaja.addEventListener("click", (e) => {
    eventHandlerBaja(e, lista, proximoId);
  });

  botonModificar.addEventListener("click", (e) => {
    try {
      eventHandlerModificar(e, lista, proximoId);
    } catch (error) {
      alert(error);
    }
  });

  botonCancelar.addEventListener("click", (e) => {
    eventHandlerCancelar(e);
  });

  
}

function eventHandlerBaja(e, lista, proximoId) {
  e.preventDefault();

  let listaLength = lista.length;
  const idAnuncioSeleccionado = parseInt(txtId.value);

  if (confirm("Quiere eliminar el anuncio ?")) {
    for (let i = 0; i < listaLength; i++) {
      if (lista[i].id === idAnuncioSeleccionado) {
        lista.splice(i, 1);
        guardarDatos(lista, proximoId);
        actualizarLista(lista);
        clearForm();
        break;
      }
    }
  } else {
    clearForm();
  }
};

function eventHandlerModificar (e, lista, proximoId) {

  e.preventDefault();

  const idAnuncioSeleccionado = parseInt(txtId.value);

  const filtrado = lista.filter(x => x.id === idAnuncioSeleccionado);
  if (filtrado) {
    filtrado[0].titulo = txtTitulo.value;
    filtrado[0].transaccion = rdoTransaccion.value;
    filtrado[0].descripcion = txtDescripcion.value;
    filtrado[0].precio = txtPrecio.value;
    filtrado[0].num_puertas = txtPuertas.value;
    filtrado[0].num_KMs = txtKms.value;
    filtrado[0].potencia = txtPotencia.value;

    if (confirm("Seguro que desea modificar este anuncio?")) {
      guardarDatos(lista, proximoId);
      actualizarLista(lista);
      clearForm();
      alert("Modificado con éxito!!");
    } else {
      clearForm();
    }
  }
};

function eventHandlerCancelar(e) {
  e.preventDefault();
  clearForm();
};

function actualizarLista(lista) {
  if (localStorage.length !== 0) {
    divTabla.textContent = "";
    divTabla.appendChild(crearSpinner());

    setTimeout(() => {
      divTabla.textContent = "";
      divTabla.appendChild(crearTabla(lista));
    }, 3000);
  }
};
function crearSpinner() {
  const spinnerCar = document.createElement("img");

  spinnerCar.width = 80;
  spinnerCar.src = "./spinnercar.gif";
  spinnerCar.alt = "Progressbar";

  return spinnerCar;
}

function eventListeners() {
  const mobileMenu = document.querySelector('.menu');

  mobileMenu.addEventListener('click', navBar);
}

function navBar() {
  const navegacion = document.querySelector('.navegacion');

  navegacion.classList.toggle('mostrar')
}
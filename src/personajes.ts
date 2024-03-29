import { filtrarPersonajes, obtenerPersonajes } from './personajes.api';
import { Personaje } from './personajes.model';

// Función auxiliar para crear una tarjeta de personaje
const crearTarjetaPersonaje = (personaje: Personaje): HTMLElement => {
  const personajeCard = document.createElement('div');
  personajeCard.classList.add('personaje-card');

  personajeCard.innerHTML = `
    <div class="personaje-imagen">
      <img src="http://localhost:3000/${personaje.imagen}" alt="${
    personaje.nombre
  }" />
    </div>
    <div class="personaje-info">
      <p><strong>Nombre:</strong> ${personaje.nombre}</p>
      <p><strong>Especialidad:</strong> ${personaje.especialidad}</p>
      <p><strong>Habilidades:</strong> ${personaje.habilidades.join(', ')}</p>
    </div>
  `;

  return personajeCard;
};

// Función para renderizar personajes
const renderPersonajes = (personajes: Personaje[]) => {
  const personajesList = document.getElementById(
    'personajes-list'
  ) as HTMLElement;
  personajesList.innerHTML = '';

  personajes.forEach((personaje) => {
    const personajeCard = crearTarjetaPersonaje(personaje);

    personajesList.appendChild(personajeCard);
  });
};

// Manejador de eventos para la búsqueda de personajes
const manejarBusquedaPersonajes = async () => {
  const filtroInputLocal = document.getElementById(
    'filtro'
  ) as HTMLInputElement;
  const filtro = filtroInputLocal.value;
  try {
    const personajes =
      filtro === ''
        ? await obtenerPersonajes()
        : await filtrarPersonajes(filtro);
    renderPersonajes(personajes);
  } catch (error) {
    console.error('Error al obtener los personajes:', error);
  }
};

// Inicialización y eventos del DOM
const inicializar = () => {
  const filtroBtn = document.getElementById('filtro-btn') as HTMLButtonElement;
  const reiniciarBtn = document.getElementById(
    'reiniciar-btn'
  ) as HTMLButtonElement;
  const filtroInput = document.getElementById('filtro') as HTMLInputElement;

  if (!filtroBtn) {
    console.error('Botón de filtro no encontrado.');
    return;
  }
  if (!reiniciarBtn) {
    console.error('Botón de reiniciar no encontrado.');
    return;
  }
  if (!filtroInput) {
    console.error('Elemento de filtro no encontrado.');
    return;
  }

  filtroBtn.addEventListener('click', manejarBusquedaPersonajes);
  reiniciarBtn.addEventListener('click', () => {
    if (filtroInput) {
      filtroInput.value = '';
    }
    obtenerPersonajes()
      .then(renderPersonajes)
      .catch((error) => console.error('Error al cargar personajes:', error));
  });
  filtroInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      manejarBusquedaPersonajes();
    }
  });

  obtenerPersonajes()
    .then(renderPersonajes)
    .catch((error) => console.error('Error al cargar personajes:', error));
};

document.addEventListener('DOMContentLoaded', inicializar);

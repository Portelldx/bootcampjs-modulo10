import { filtrarPersonajes, obtenerPersonajes } from './personajes.api';
import { Personaje } from './personajes.model';

// Función para renderizar personajes
const renderPersonajes = (personajes: Personaje[]) => {
  const personajesList = document.getElementById(
    'personajes-list'
  ) as HTMLElement;
  personajesList.innerHTML = '';

  personajes.forEach((personaje) => {
    const personajeCard = document.createElement('div');
    personajeCard.classList.add('personaje-card');

    personajeCard.innerHTML = `
      <div class="personaje-imagen">
        <img src="http://localhost:3000/${personaje.imagen}" alt="${
      personaje.nombre
    }" />
      </div>
      <div class="personaje-info">
        <p>
          <strong>Nombre:</strong> ${personaje.nombre}
        </p>
        <p>
          <strong>Especialidad:</strong> ${personaje.especialidad}
        </p>
        <p>
          <strong>Habilidades:</strong> ${personaje.habilidades.join(', ')}
        </p>
      </div>
    `;

    personajesList.appendChild(personajeCard);
  });
};

// Obtener los elementos del DOM
const filtroInput = document.getElementById('filtro') as HTMLInputElement;
const filtroBtn = document.getElementById('filtro-btn') as HTMLButtonElement;

// Evento de búsqueda
filtroBtn.addEventListener('click', async () => {
  const filtro = filtroInput.value;

  try {
    let personajes = [];

    if (filtro === '') {
      personajes = await obtenerPersonajes();
    } else {
      personajes = await filtrarPersonajes(filtro);
    }

    renderPersonajes(personajes);
  } catch (error) {
    console.error('Error al obtener los personajes:', error);
  }
});

// Carga inicial de los personajes
obtenerPersonajes().then(renderPersonajes);

filtroInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    // Comprueba si se ha pulsado Enter
    const filtro = filtroInput.value;
    if (filtro === '') {
      obtenerPersonajes().then(renderPersonajes);
    } else {
      filtrarPersonajes(filtro).then(renderPersonajes);
    }
  }
});

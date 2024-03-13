import axios from 'axios';
import { Personaje } from './personajes.model';

export const obtenerPersonajes = async (): Promise<Personaje[]> => {
  try {
    const response = await axios.get('http://localhost:3000/personajes');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los personajes:', error);
    return [];
  }
};

export const filtrarPersonajes = async (
  nombre: string
): Promise<Personaje[]> => {
  try {
    const response = await axios.get(
      `http://localhost:3000/personajes?nombre_like=${nombre}`
    );
    return response.data;
  } catch (error) {
    console.error('Error al filtrar los personajes por nombre:', error);
    return [];
  }
};

export const eliminaUltimoDigito = (numeroTarjeta: string): string => {
  if (!numeroTarjeta) {
    throw new Error('No se ha introducido una cadena');
  }
  return numeroTarjeta.slice(0, numeroTarjeta.length - 1);
};

export const obtenerUltimoDigito = (numeroTarjeta: string): number | null => {
  if (!numeroTarjeta) {
    throw new Error('No se ha introducido una cadena');
  }
  const lastChar = numeroTarjeta.slice(-1);
  return Number(lastChar);
};

export const multiplicaPorDosSaltandoUno = (cadena: string): number[] => {
  if (!cadena) {
    throw new Error('No se ha introducido una cadena');
  }
  let resultado: number[] = [];
  let porDos = true;
  for (let i = cadena.length - 1; i >= 0; i--) {
    const nuevoNumero = porDos ? parseInt(cadena[i]) * 2 : parseInt(cadena[i]);
    resultado = [nuevoNumero, ...resultado];
    porDos = !porDos;
  }
  return resultado;
};

export const sumaDecenasUnidades = (numeros: number[]): number[] => {};

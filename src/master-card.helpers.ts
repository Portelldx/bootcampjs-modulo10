export const eliminaUltimoDigito = (numeroTarjeta: string): string => {
  if (!numeroTarjeta) {
    throw new Error('No se ha introducido una cadena');
  }
  return numeroTarjeta.slice(0, numeroTarjeta.length - 1);
};

export const obtenerUltimoDigito = (numeroTarjeta: string): number => {
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

const sumaDecenasUnidades = (numero: number): number => {
  if (numero < 10) return numero;
  const unidades = numero % 10;
  const decenas = Math.floor(numero / 10);
  return unidades + decenas;
};
export const sumaDecenasUnidadesColeccion = (numeros: number[]): number[] => {
  if (!numeros) {
    throw new Error('No se ha introducido un número');
  }
  return numeros.map(sumaDecenasUnidades);
};

export const sumaDigitos = (numeros: number[]): number => {
  if (!numeros) {
    throw new Error('No se ha introducido un número');
  }
  return numeros.reduce((acc, currentValue) => acc + currentValue, 0);
};

export const calculaFlagDeSumaTotal = (sumaTotal: number): number => {
  if (!sumaTotal) {
    throw new Error('No se ha introducido un número');
  }

  return 10 - (sumaTotal % 10);
};

export const validarInput = (numeroTarjeta: string): void => {
  if (
    !numeroTarjeta ||
    numeroTarjeta.length !== 16 ||
    isNaN(parseInt(numeroTarjeta))
  ) {
    throw new Error('No se ha introducido un número de tarjeta correcto');
  }
};

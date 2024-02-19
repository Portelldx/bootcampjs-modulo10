export const validaTarjetaMasterCard = (numeroTarjeta: string): boolean => {
  // TODO
  if (
    !numeroTarjeta ||
    numeroTarjeta.length !== 16 ||
    isNaN(parseInt(numeroTarjeta))
  ) {
    throw new Error('No se ha introducido un número de tarjeta correcto');
  }
};

6:56
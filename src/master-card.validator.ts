import {
  eliminaUltimoDigito,
  obtenerUltimoDigito,
  multiplicaPorDosSaltandoUno,
  sumaDecenasUnidadesColeccion,
  sumaDigitos,
  calculaFlagDeSumaTotal,
  validarInput,
} from './master-card.helpers';

interface TarjetaMasterCard {
  masterCardSinDigitoControl: string;
  ultimoDigito: number;
}

const separaDigitoControl = (numeroTarjeta: string): TarjetaMasterCard => ({
  ultimoDigito: obtenerUltimoDigito(numeroTarjeta),
  masterCardSinDigitoControl: eliminaUltimoDigito(numeroTarjeta),
});

export const calculosValidacion = (
  masterCardSinDigitoControl: string
): number => {
  const multiplicado = multiplicaPorDosSaltandoUno(masterCardSinDigitoControl);
  const decenasSumadas = sumaDecenasUnidadesColeccion(multiplicado);
  const sumaTotal = sumaDigitos(decenasSumadas);
  return calculaFlagDeSumaTotal(sumaTotal);
};

export const esValidaTarjetaMasterCard = (numeroTarjeta: string): boolean => {
  validarInput(numeroTarjeta);
  const { masterCardSinDigitoControl, ultimoDigito } =
    separaDigitoControl(numeroTarjeta);
  const flagTotal = calculosValidacion(masterCardSinDigitoControl);
  return flagTotal === ultimoDigito;
};

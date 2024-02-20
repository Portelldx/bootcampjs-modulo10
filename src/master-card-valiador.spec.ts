import { esValidaTarjetaMasterCard } from './master-card.validator';

// VALIDAS
// 5506927427317625;
// 5553042241984105;
// 5555553753048194;
// 5555555555554444;

// INVALIDAS
// 5506927627317626;
// 5553042241944106;
// 5525553753048195;
// 5554555555554445;

describe('validaTarjetaMasterCard', () => {
  it('Deberia de devolver un throw si al entrada es undefined', () => {
    // Arrange
    const numeroTarjeta: any = undefined;
    // Act
    const result = () => esValidaTarjetaMasterCard(numeroTarjeta);
    // Assert
    expect(result).toThrowError(
      'No se ha introducido un número de tarjeta correcto'
    );
  });
  it('Deberia de devolver un throw si al entrada está vacía', () => {
    // Arrange
    const numeroTarjeta = '';
    // Act
    const result = () => esValidaTarjetaMasterCard(numeroTarjeta);
    // Assert
    expect(result).toThrowError(
      'No se ha introducido un número de tarjeta correcto'
    );
  });
  it('Deberia de devolver un throw si al entrada está vacía', () => {
    // Arrange
    const numeroTarjeta = 'asdasd';
    // Act
    const result = () => esValidaTarjetaMasterCard(numeroTarjeta);
    // Assert
    expect(result).toThrowError(
      'No se ha introducido un número de tarjeta correcto'
    );
  });
  it('debería devolver un throw si la entrada no tiene 16 dígitos', () => {
    // Arrange
    const numeroTarjeta = '123456789';
    // Act
    const result = () => esValidaTarjetaMasterCard(numeroTarjeta);
    // Assert
    expect(result).toThrowError(
      'No se ha introducido un número de tarjeta correcto'
    );
  });
  it.each([
    ['5506927427317625', true],
    ['5553042241984105', true],
    ['5555553753048194', true],
    ['5506927627317626', false],
    ['5553042241944106', false],
    ['5525553753048195', false],
  ])(
    'si la entrada es %s debería devolver %s',
    (numeroTarjeta: string, expected: boolean) => {
      // Arrange
      // Act
      const result = esValidaTarjetaMasterCard(numeroTarjeta);
      // Assert
      expect(result).toBe(expected);
    }
  );
});

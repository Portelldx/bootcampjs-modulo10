import {
  eliminaUltimoDigito,
  obtenerUltimoDigito,
  multiplicaPorDosSaltandoUno,
} from './master-card.helpers';

describe('eliminaUltimoDigito', () => {
  it('debería devolver un throw si la entrada es undefined', () => {
    // Arrange
    const cadena: any = undefined;
    // Act
    const result = () => eliminaUltimoDigito(cadena);
    // Assert
    expect(result).toThrowError('No se ha introducido una cadena');
  });
  it('debería devolver un throw si la entrada es null', () => {
    // Arrange
    const cadena: any = null;
    // Act
    const result = () => eliminaUltimoDigito(cadena);
    // Assert
    expect(result).toThrowError('No se ha introducido una cadena');
  });
  it('debería devolver un throw si la entrada es un string vacío', () => {
    // Arrange
    const cadena = '';
    // Act
    const result = () => eliminaUltimoDigito(cadena);
    // Assert
    expect(result).toThrowError('No se ha introducido una cadena');
  });

  it('Deberia de devolver un string sin el último digito', () => {
    // Arrange
    const cadena = '123456789';
    // Act
    const result = eliminaUltimoDigito(cadena);
    // Assert
    expect(result).toBe('12345678');
  });
});

describe('obtenerUltimoDigito', () => {
  it('debería devolver un throw si la entrada es undefined', () => {
    // Arrange
    const cadena: any = undefined;
    // Act
    const result = () => obtenerUltimoDigito(cadena);
    // Assert
    expect(result).toThrowError('No se ha introducido una cadena');
  });
  it('debería devolver un throw si la entrada es null', () => {
    // Arrange
    const cadena: any = null;
    // Act
    const result = () => obtenerUltimoDigito(cadena);
    // Assert
    expect(result).toThrowError('No se ha introducido una cadena');
  });
  it('debería devolver un throw si la entrada es un string vacío', () => {
    // Arrange
    const cadena = '';
    // Act
    const result = () => obtenerUltimoDigito(cadena);
    // Assert
    expect(result).toThrowError('No se ha introducido una cadena');
  });
  it('debería devolver el último número de la cadena convertido a número', () => {
    // Arrange
    const cadena = '123456789';
    // Act
    const result = obtenerUltimoDigito(cadena);
    // Assert
    expect(result).toBe(9);
  });
});

describe('multiplicaPorDosSaltandoUno', () => {
  it('debería devolver un throw si la entrada es undefined', () => {
    // Arrange
    const cadena: any = undefined;

    // Act
    const result = () => multiplicaPorDosSaltandoUno(cadena);

    // Assert
    expect(result).toThrowError('No se ha introducido una cadena');
  });
  it('deberia de devolver un throw si la entrada es null', () => {
    // Arrange
    const cadena: any = null;
    // Act
    const result = () => multiplicaPorDosSaltandoUno(cadena);
    // Assert
    expect(result).toThrowError('No se ha introducido una cadena');
  });
  it('debería devolver un throw si la entrada es un string vacío', () => {
    // Arrange
    const cadena = '';
    // Act
    const result = () => obtenerUltimoDigito(cadena);
    // Assert
    expect(result).toThrowError('No se ha introducido una cadena');
  });
  it('debería devolver un array con los números separados y si leemos el array de atrás para delante, los números que están en posición impar multiplicarlos por dos', () => {
    // Arrange
    const cadena = '123456789';
    // Act
    const resultado = multiplicaPorDosSaltandoUno(cadena);
    // Assert
    expect(resultado).toEqual([2, 2, 6, 4, 10, 6, 14, 8, 18]);
  });
});

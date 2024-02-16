export interface FichaFinalAlumno {
  alumno: string;
  notasPracticas: number[];
  notasExamenes: number[];
}

export interface CalificacionesAlumno {
  alumno: string;
  notaFinal: number;
}

export const calcularNotaMedia = (notas: number[]): number => {
  const sumaNotas = notas.reduce((acc, nota) => acc + nota, 0);
  const notaMedia = sumaNotas / notas.length;
  const notaMediaRedondeada = Number(notaMedia.toFixed(2));
  return notaMediaRedondeada;
};

export const calcularCalificacionAlumnos = (
  fichaAlumno: FichaFinalAlumno[]
): CalificacionesAlumno[] => {
  const notasFinales: CalificacionesAlumno[] = fichaAlumno.map(
    (fichaAlumno) => {
      const notaMediaPracticas = calcularNotaMedia(fichaAlumno.notasPracticas);
      const notaMediaExamenes = calcularNotaMedia(fichaAlumno.notasExamenes);
      const notaFinal = calcularNotaFinal(
        notaMediaPracticas,
        notaMediaExamenes
      );
      return {
        alumno: fichaAlumno.alumno,
        notaFinal,
      };
    }
  );
  return notasFinales;
};

export const calcularNotaFinal = (
  notaMediaPracticas: number,
  notaMediaExamenes: number
): number => {
  const notaFinal = notaMediaPracticas * 0.6 + notaMediaExamenes * 0.4;
  const notaFinalRedondeada = Number(notaFinal.toFixed(2));
  return notaFinalRedondeada;
};

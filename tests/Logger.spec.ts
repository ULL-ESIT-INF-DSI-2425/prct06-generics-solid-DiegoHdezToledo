import { describe, it, expect} from 'vitest';
import { Logger } from '../src/ejercicio-clase/Logger';

describe('Logger', () => {
  // Singleton
  it('Deberá retornar la misma instancia', () => {
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();
    expect(logger1).toBe(logger2);
  });

  it('Deberá retornar la misma instancia con tres instancias', () => {
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();
    const logger3 = Logger.getInstance();
    expect(logger1).toBe(logger2);
    expect(logger2).toBe(logger3);
    expect(logger1).toBe(logger3);
  });

  // Filtar usuarios
  it('Filtrar logs por usuario', () => {
    const logger = Logger.getInstance();
    const testDate1 = new Date(2023, 7, 10, 10, 10, 10); // Agostp es el mes 7 
    logger.log('testUser1', 'testAction1', testDate1);
    const userLogs = logger.getLogsByUser('testUser1');
    expect(userLogs).toEqual([{ usuario: 'testUser1', accion: 'testAction1', fecha_hora: testDate1 }]);
  });

  it('Buscar varios logs, del mismo usuario con distintas acciones', () => {
    const logger = Logger.getInstance();
    const testDate1 = new Date(2024, 7, 10, 10, 10, 10); // Agosto es el mes 7 
    logger.log('testUser4', 'testAction1', testDate1);
    logger.log('testUser4', 'testAction2', testDate1);
    logger.log('testUser4', 'testAction3', testDate1);
    const userLogs = logger.getLogsByUser('testUser4');
    expect(userLogs).toEqual([{ usuario: 'testUser4', accion: 'testAction1', fecha_hora: testDate1 },
                              { usuario: 'testUser4', accion: 'testAction2', fecha_hora: testDate1 },
                              { usuario: 'testUser4', accion: 'testAction3', fecha_hora: testDate1 }
    ]);
  });

  // Filtrar acciones
  it('Filtar logs por accion', () => {
    const logger = Logger.getInstance();
    const testDate2 = new Date(2023, 8, 10, 10, 10, 10); // Septiembre
    logger.log('testUser2', 'testAction4', testDate2);
    const actionLogs = logger.getLogsByAction('testAction4');
    expect(actionLogs).toEqual([{ usuario: 'testUser2', accion: 'testAction4', fecha_hora: testDate2 }]);
  });

  it('Filtar logs por acciones iguales pero usuarios y fechas diferentes ', () => {
    const logger = Logger.getInstance();
    const testDate1 = new Date(2025, 8, 10, 10, 10, 10); // Septiembre
    const testDate2 = new Date(2024, 7, 10, 10, 10, 10); // Agostp es el mes 7 
    const testDate3 = new Date(2023, 7, 10, 10, 10, 10); // Agostp es el mes 7 
    logger.log('testUser2', 'testAction1', testDate1);
    const actionLogs = logger.getLogsByAction('testAction1');
    expect(actionLogs).toEqual([{ usuario: 'testUser1', accion: 'testAction1', fecha_hora: testDate3},
                                { usuario: 'testUser4', accion: 'testAction1', fecha_hora: testDate2},
                                { usuario: 'testUser2', accion: 'testAction1', fecha_hora: testDate1}
    ]);
  });


  // Filtrar fechas
  it('Filtrar logs por rango de tiempo', () => {
    const logger = Logger.getInstance();
    const testDate1 = new Date(2023, 7, 10, 10, 10, 10);
    const testDate2 = new Date(2023, 8, 10, 10, 10, 10);
    const start = new Date(2023, 0, 1, 0, 0, 0); // Enero es el mes 0
    const testDate3 = new Date(2023, 9, 10, 9, 10, 10); // Octubre es el mes 9 
    const end = new Date(2023, 11, 31, 23, 59, 59); // Diciembre es el mes 11
    logger.log('testUser3', 'testAction3', testDate3);
    const timeRangeLogs = logger.getLogsByTimeRange(start, end);
    expect(timeRangeLogs).toEqual([{ usuario: 'testUser1', accion: 'testAction1', fecha_hora: testDate1 }, 
                                   { usuario: 'testUser2', accion: 'testAction4', fecha_hora: testDate2 },
                                   { usuario: 'testUser3', accion: 'testAction3', fecha_hora: testDate3 }
                                  ]);
  });
  it('Filtrar logs por rango de tiempo donde uno no entra por la hora', () => {
    const logger = Logger.getInstance();
    const testDate1 = new Date(2027, 7, 10, 10, 10, 10); // Dentro del rango
    const testDate2 = new Date(2027, 8, 10, 10, 10, 10); // Dentro del rango
    const testDate3 = new Date(2027, 11, 31, 23, 59, 55); // Fuera del rango
    const start = new Date(2027, 0, 1, 0, 0, 0); // Inicio del rango
    const end = new Date(2027, 11, 31, 23, 59, 50); // Fin del rango
    logger.log('testUser5', 'testAction5', testDate1);
    logger.log('testUser6', 'testAction6', testDate2);
    logger.log('testUser7', 'testAction7', testDate3);
    const timeRangeLogs = logger.getLogsByTimeRange(start, end);
    expect(timeRangeLogs).toEqual([
      { usuario: 'testUser5', accion: 'testAction5', fecha_hora: testDate1 },
      { usuario: 'testUser6', accion: 'testAction6', fecha_hora: testDate2 }
    ]);
  });

  // Existencia de funciones y clase
  it('Deberá verificar si la clase Logger existe', () => {
    expect(typeof Logger).toBe('function');
  });

  it('Deberá verificar si la función getInstance existe', () => {
    expect(typeof Logger.getInstance).toBe('function');
  });

  it('Deberá verificar si la función log existe', () => {
    const logger = Logger.getInstance();
    expect(typeof logger.log).toBe('function');
  });

  it('Deberá verificar si la función getLogsByUser existe', () => {
    const logger = Logger.getInstance();
    expect(typeof logger.getLogsByUser).toBe('function');
  });

  it('Deberá verificar si la función getLogsByAction existe', () => {
    const logger = Logger.getInstance();
    expect(typeof logger.getLogsByAction).toBe('function');
  });

  it('Deberá verificar si la función getLogsByTimeRange existe', () => {
    const logger = Logger.getInstance();
    expect(typeof logger.getLogsByTimeRange).toBe('function');
  });
  // Iterable 

  // Iterable
  it('Deberá verificar que la clase Logger es iterable', () => {
    const logger = Logger.getInstance();
    const testDate1 = new Date(2023, 7, 10, 10, 10, 10);
    const testDate2 = new Date(2023, 8, 10, 10, 10, 10);
    const testDate3 = new Date(2023, 9, 10, 10, 10, 10);

    logger.log('testUser1', 'testAction1', testDate1);
    logger.log('testUser2', 'testAction2', testDate2);
    logger.log('testUser3', 'testAction3', testDate3);

    const logsArray: { usuario: string; accion: string; fecha_hora: Date }[] = [];
    for (const log of logger) {
      logsArray.push(log);
    }

    expect(logsArray).toEqual([
      { usuario: 'testUser1', accion: 'testAction1', fecha_hora: testDate1 },
      { usuario: 'testUser4', accion: 'testAction1', fecha_hora: new Date(2024, 7, 10, 10, 10, 10) },
      { usuario: 'testUser4', accion: 'testAction2', fecha_hora: new Date(2024, 7, 10, 10, 10, 10) },
      { usuario: 'testUser4', accion: 'testAction3', fecha_hora: new Date(2024, 7, 10, 10, 10, 10) },
      { usuario: 'testUser2', accion: 'testAction4', fecha_hora: new Date(2023, 8, 10, 10, 10, 10) },
      { usuario: 'testUser2', accion: 'testAction1', fecha_hora: new Date(2025, 8, 10, 10, 10, 10) },
      { usuario: 'testUser3', accion: 'testAction3', fecha_hora: new Date(2023, 9, 10, 9, 10, 10) },
      { usuario: 'testUser5', accion: 'testAction5', fecha_hora: new Date(2027, 7, 10, 10, 10, 10) },
      { usuario: 'testUser6', accion: 'testAction6', fecha_hora: new Date(2027, 8, 10, 10, 10, 10) },
      { usuario: 'testUser7', accion: 'testAction7', fecha_hora: new Date(2027, 11, 31, 23, 59, 55) },
      { usuario: 'testUser1', accion: 'testAction1', fecha_hora: testDate1 },
      { usuario: 'testUser2', accion: 'testAction2', fecha_hora: new Date(2023, 8, 10, 10, 10, 10) },
      { usuario: 'testUser3', accion: 'testAction3', fecha_hora: testDate3 }
    ]);
  });
});

/**
 * Tipo que representa una entrada de log.
 * 
 * @property {string} usuario - Nombre del usuario que realiza la acción.
 * @property {string} accion - Descripción de la acción realizada.
 * @property {Date} fecha_hora - Fecha y hora en formato Date.
 */
export type Entrada = {
  usuario: string;
  accion: string;
  fecha_hora: Date;
};

/**
 * Clase logger usando patron singleton
 * 
 * @property {string} _marca - Array de type
 * 
 * 
 */
export class Logger implements Iterable<Entrada> {
  private static instancia: Logger;
  private logs: Entrada[];

  private constructor() {
    this.logs = [];
  }

  /**
   * Obtiene la instancia única del Logger.
   */
  public static getInstance(): Logger {
    if (!this.instancia) {
      this.instancia = new Logger();
    }
    return this.instancia;
  }
  
  /**
   * Registra una nueva acción en el sistema.
   * @param user - Nombre del usuario que realiza la acción.
   * @param action - Descripción de la acción realizada.
   */
  public log(usuario: string, accion: string, fecha_hora: Date): void {
    this.logs.push({ usuario, accion, fecha_hora});
  }

/**
 * Obtiene todas las acciones registradas de un usuario específico.
 * @param user - Nombre del usuario.
 */
  public getLogsByUser(user: string): Entrada[] {
    return this.logs.filter(log => log.usuario === user);
  }

  /**
   * Obtiene todas las acciones de un tipo específico.
   * @param action - Tipo de acción a filtrar.
   */
  public getLogsByAction(action: string): Entrada[] {
    return this.logs.filter(log => log.accion === action);
  }

  /**
   * Obtiene todas las acciones dentro de un intervalo de tiempo.
   * @param start - Fecha de inicio del rango.
   * @param end - Fecha de fin del rango.
   */
  public getLogsByTimeRange(start: Date, end: Date): Entrada[] {
    return this.logs.filter(log => log.fecha_hora >= start && log.fecha_hora <= end);
  }

  /**
   * Permite iterar sobre los registros del Logger.
   */
  public [Symbol.iterator](): Iterator<Entrada> {
    let index = 0;
    return {
      next: (): IteratorResult<Entrada> => {
        if (index < this.logs.length) {
          return { value: this.logs[index++], done: false };
        } else {
          return { value: null, done: true };
        }
      }
    };
  }
}
import { PrintableCollection } from './PrintableCollection';

/**
 * Clase NumericPrintableCollection la cual es una clase hija que hace el caso de string
 * 
 * Contiene la implementacion de print la cual era una clase abstracta
 * 
 */
export class StringPrintableCollection extends PrintableCollection<string> {

  /**
   * Constructor de la clase StringPrintableCollection.
   * 
   * @param collection - array de strings para inicializar el atributo de la clase padre
   */
  constructor(collection: string[]) {
    super(collection);
  }

  /**
   * Funcion implementada de impresion de colecciones
   * 
   * @returns String con el contenido de la coleccion separado por comas
   */
  print(): string {
    return this.items.join(', ');
  }
}

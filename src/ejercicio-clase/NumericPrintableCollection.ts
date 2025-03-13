import { PrintableCollection } from './PrintableCollection';

/**
 * Clase NumericPrintableCollection la cual es una clase hija que hace el caso numerico
 * 
 * Contiene la implementacion de print la cual era una clase abstracta
 * 
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * Constructor de la clase NumericPrintableCollection.
   * 
   * @param collection - array de numeros para inicializar el atributo de la clase padre
   */
  constructor(collection: number[]) {
    super(collection);
  }

  /**
   * Funcion implementada de impresion de colecciones
   * 
   * @returns String con el contenido de la coleccion separado por comas
   */
  print(): string {
    return this.items.map(item => item.toString()).join(', ');
  }
}

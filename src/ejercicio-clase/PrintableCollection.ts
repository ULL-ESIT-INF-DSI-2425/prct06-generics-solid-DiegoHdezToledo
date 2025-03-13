
/**
 * Interfaz que representa funciones para una coleccion de tipos genéricos
 * 
 * @template T - Tipo genérico de la colección
 */
export interface Collectable<T> {
  /**
   * Añade un elemento pasado por parametros al array
   * 
   * @param item - El elemento el cual va a ser añadido
   */
  addItem(item: T): void;
  /**
   * Devuelve un elemento genérico en caso de que lo encuentre usando su indice
   * 
   * @param index - Indice del elemento que se quiere buscar
   * @returns El elemento en caso de haberlo encontrado, en caso conytrario undefined
   */
  getItem(index: number): T | undefined;
  /**
   * Funcion que elimina el eelmento en caso de ser encontrado usando un indice
   * 
   * @param index - Indice del elemento que se quiere eliminar
   * @returns El elemento eliminado o en caso contrario undefined
   */
  removeItem(index: number): T | undefined;
  /**
   * Devuelve el numero de elementos que contiene la coleccion
   * 
   * @returns Numero de items
   */
  getNumberOfItems(): number;
}

/**
 * Interfaz que representa funcion de impresion la cual va a ser utilizada para tipos genéricos
 */
export interface Printable {
  /**
   * Funcion  de impresion de colecciones
   * 
   * @returns String con el contenido de la coleccion separado por comas
   */
  print(): string;
}

/**
 * Clase PrintableCollection lo cual es una clase abstracta que define algunos métodos
 * 
 * @property {T} coleccion - Coleccion de objetos de manera generica usando un array
 *
 * Cuenta con una funcion abstracta que obligatoriamente debe estar implementada en las clases hijas
 * 
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable {
  private coleccion: T[];
  // Constructor
  constructor(coleccion: T[]) {
    this.coleccion = coleccion;
  }
  // Getter para la colección
  get items(): T[] {
    return this.coleccion;
  }
  // Setter para la colección
  set items(newCollection: T[]) {
    this.coleccion = newCollection;
  }
  // Funciones no abstractas 
  /**
   * Añade un elemento pasado por parametros al array
   * 
   * @param element - El elemento el cual va a ser añadido
   */
  addItem(element: T): void {
    this.coleccion.push(element);
  }
  /**
   * Devuelve un elemento genérico en caso de que lo encuentre usando su indice
   * 
   * @param index - Indice del elemento que se quiere buscar
   * @returns El elemento en caso de haberlo encontrado, en caso conytrario undefined
   */
  getItem(index: number): T | undefined {
    if (index >= 0 && index < this.coleccion.length) {
      return this.coleccion[index];
    }
    return undefined;
  }
  /**
   * Funcion que elimina el eelmento en caso de ser encontrado usando un indice
   * 
   * @param index - Indice del elemento que se quiere eliminar
   * @returns El elemento eliminado o en caso contrario undefined
   */
  removeItem(index: number): T | undefined {
    if (index >= 0 && index < this.coleccion.length) {
      return this.coleccion.splice(index, 1)[0];
    }
    return undefined;
  }
  /**
   * Devuelve el numero de elementos que contiene la coleccion
   * 
   * @returns Numero de items
   */
  getNumberOfItems(): number {
    return this.coleccion.length;
  }
  // Funciones abstractas
  /**
   * Funcion abstracta de impresion de colecciones
   * 
   * @returns String con el contenido de la coleccion separado por comas
   */
  abstract print(): string;
}


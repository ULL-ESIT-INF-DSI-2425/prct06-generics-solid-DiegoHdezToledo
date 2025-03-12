export interface Stremeable<T> {
  coleccion: T[];
  SearchByassessment(valor: number): T[];
  SearchByPlatform(plataforma: string): T[];
} 


export interface Info {
  valoracion: number;
  director: string;
  plataforma: string;
  print(): void;
}

export interface InterSerie extends Info {
  Capitulos: number;
  Temporadas:number;
  ShowDuration(): number;
}

export interface DocuPeli extends Info {
  Duracion: number;
}


export abstract class BasicStreameableCollection<T> implements Stremeable<T> {
  coleccion: T[];
  name: string;

  constructor(CollectionName: string) {
    this.name = CollectionName;
    this.coleccion = [];
  }

  abstract SearchByassessment(valor: number): T[];
  abstract SearchByPlatform(plataforma: string): T[];

  getCollection(): T[] {
    return this.coleccion;
  }

  addElement(element: T): void {
    this.coleccion.push(element);
  }
}

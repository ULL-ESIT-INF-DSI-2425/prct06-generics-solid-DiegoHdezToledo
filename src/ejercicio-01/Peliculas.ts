import { BasicStreameableCollection, DocuPeli } from "./BasicStreameableCollection";

export class Peliculas extends BasicStreameableCollection<Peliculas> implements DocuPeli  {

  constructor(
    public Duracion: number,
    public valoracion: number,
    public director: string,
    public plataforma: string,
    CollectionName: string
  ) {
    super(CollectionName);
  }

  print(): void {
    console.log(`Película dirigida por ${this.director}, con una duración de ${this.Duracion} minutos, disponible en ${this.plataforma} y con una valoración de ${this.valoracion}.`);
  }

  SearchByassessment(valor: number): Peliculas[] {
    return this.coleccion.filter((item: any) => item.valoracion === valor);
  }

  SearchByPlatform(plataforma: string): Peliculas[] {
    return this.coleccion.filter((item: any) => item.plataforma === plataforma);
  }
  
}


import { BasicStreameableCollection, DocuPeli } from "./BasicStreameableCollection";


export class Documental extends BasicStreameableCollection<Documental> implements DocuPeli  {

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
    this.coleccion.forEach((item: any) => {
      console.log(`Duracion: ${item.Duracion}, Valoracion: ${item.valoracion}, Director: ${item.director}, Plataforma: ${item.plataforma}`);
    });
  }

  SearchByassessment(valor: number): Documental[] {
    return this.coleccion.filter((item: any) => item.valoracion === valor);
  }

  SearchByPlatform(plataforma: string): Documental[] {
    return this.coleccion.filter((item: any) => item.plataforma === plataforma);
  }

}
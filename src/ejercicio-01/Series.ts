import { BasicStreameableCollection, InterSerie } from "./BasicStreameableCollection.js";

export class Series extends BasicStreameableCollection<Series> implements InterSerie  {

  constructor(
    collectionName: string,
    public nombre: string,
    public Temporadas: number,
    public Capitulos: number,
    public valoracion: number,
    public director: string,
    public plataforma: string
  ) {
    super(collectionName);
  }

  ShowDuration(): number {
    return this.Temporadas * this.Capitulos;
  }

  print(): void {
    console.log(`Serie: ${this.nombre}`);
    console.log(`Temporadas: ${this.Temporadas}`);
    console.log(`Capitulos: ${this.Capitulos}`);
    console.log(`Valoracion: ${this.valoracion}`);
    console.log(`Director: ${this.director}`);
    console.log(`Plataforma: ${this.plataforma}`);
  }

  SearchByassessment(valor: number): Series[] {
    return this.coleccion.filter((item: any) => item.valoracion === valor);
  }

  SearchByPlatform(plataforma: string): Series[] {
    return this.coleccion.filter((item: any) => item.plataforma === plataforma);
  }
}
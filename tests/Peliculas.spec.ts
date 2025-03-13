
import { Peliculas } from '../src/ejercicio-01/Peliculas';
import { describe, it, expect, vi } from 'vitest';

describe('Peliculas', () => {
  const peliculasCollection = new Peliculas(120, 8.5, 'Christopher Nolan', 'HBO', 'Peliculas Collection');

  it('should add an element to the collection', () => {
    peliculasCollection.addElement(peliculasCollection);
    expect(peliculasCollection.getCollection()).toContain(peliculasCollection);
  });

  it('should search by assessment', () => {
    peliculasCollection.addElement(peliculasCollection);
    expect(peliculasCollection.SearchByassessment(8.5)).toContain(peliculasCollection);
  });

  it('should search by platform', () => {
    peliculasCollection.addElement(peliculasCollection);
    expect(peliculasCollection.SearchByPlatform('HBO')).toContain(peliculasCollection);
  });

  it('should add an element to the collection', () => {
    peliculasCollection.addElement(peliculasCollection);
    expect(peliculasCollection.getCollection()).toContain(peliculasCollection);
  });

  it('should search by assessment', () => {
    peliculasCollection.addElement(peliculasCollection);
    expect(peliculasCollection.SearchByassessment(8.5)).toContain(peliculasCollection);
  });

  it('should search by platform', () => {
    peliculasCollection.addElement(peliculasCollection);
    expect(peliculasCollection.SearchByPlatform('HBO')).toContain(peliculasCollection);
  });

  it('should calculate the show duration', () => {
    expect(peliculasCollection.Duracion).toBe(120);
  });

  it('should print the movie details', () => {
    console.log = vi.fn();
    peliculasCollection.print();
    expect(console.log).toHaveBeenCalledWith('Película dirigida por Christopher Nolan, con una duración de 120 minutos, disponible en HBO y con una valoración de 8.5.');
  });

  it('should not find a movie with a different assessment', () => {
    expect(peliculasCollection.SearchByassessment(8.0)).toEqual([]);
  });

  it('should not find a movie on a different platform', () => {
    expect(peliculasCollection.SearchByPlatform('Hulu')).toEqual([]);
  });
});
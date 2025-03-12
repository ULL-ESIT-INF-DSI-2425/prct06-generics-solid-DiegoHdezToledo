import { describe, it, expect } from 'vitest';

import { Peliculas } from '../../src/ejercicio-01/Peliculas';

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
});
import { describe, it, expect, vi } from 'vitest';

import { Documental } from '../src/ejercicio-01/Documental';

describe('Documental', () => {
  const documentalCollection = new Documental(90, 7.0, 'David Attenborough', 'BBC', 'Documental Collection');

  it('should add an element to the collection', () => {
    documentalCollection.addElement(documentalCollection);
    expect(documentalCollection.getCollection()).toContain(documentalCollection);
  });

  it('should search by assessment', () => {
    documentalCollection.addElement(documentalCollection);
    expect(documentalCollection.SearchByassessment(7.0)).toContain(documentalCollection);
  });

  it('should search by platform', () => {
    documentalCollection.addElement(documentalCollection);
    expect(documentalCollection.SearchByPlatform('BBC')).toContain(documentalCollection);
  });

  it('should calculate the show duration', () => {
    expect(documentalCollection.Duracion).toBe(90);
  });

  it('should print the documental details', () => {
    console.log = vi.fn();
    documentalCollection.print();
    expect(console.log).toHaveBeenCalledWith('Duracion: 90, Valoracion: 7, Director: David Attenborough, Plataforma: BBC');
  });

  it('should not find a documental with a different assessment', () => {
    expect(documentalCollection.SearchByassessment(8.0)).toEqual([]);
  });

  it('should not find a documental on a different platform', () => {
    expect(documentalCollection.SearchByPlatform('Hulu')).toEqual([]);
  });
});
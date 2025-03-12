import { describe, it, expect } from 'vitest';
import { Series } from '../../src/ejercicio-01/Series';
import { Peliculas } from '../../src/ejercicio-01/Peliculas';
import { Documental } from '../../src/ejercicio-01/Documental';

describe('BasicStreameableCollection', () => {
  describe('Series', () => {
    const seriesCollection = new Series('Series Collection', 'Breaking Bad', 5, 62, 9.5, 'Vince Gilligan', 'Netflix');

    it('should add an element to the collection', () => {
      seriesCollection.addElement(seriesCollection);
      expect(seriesCollection.getCollection()).toContain(seriesCollection);
    });

    it('should search by assessment', () => {
      seriesCollection.addElement(seriesCollection);
      expect(seriesCollection.SearchByassessment(9.5)).toContain(seriesCollection);
    });

    it('should search by platform', () => {
      seriesCollection.addElement(seriesCollection);
      expect(seriesCollection.SearchByPlatform('Netflix')).toContain(seriesCollection);
    });
  });

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
  });
});
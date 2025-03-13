import { describe, it, expect, vitest } from 'vitest';
import { Series } from '../src/ejercicio-01/Series';

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

  it('should calculate the show duration', () => {
    expect(seriesCollection.ShowDuration()).toBe(310);
  });

  it('should print the series details', () => {
    console.log = vitest.fn();
    seriesCollection.print();
    expect(console.log).toHaveBeenCalledWith('Serie: Breaking Bad');
    expect(console.log).toHaveBeenCalledWith('Temporadas: 5');
    expect(console.log).toHaveBeenCalledWith('Capitulos: 62');
    expect(console.log).toHaveBeenCalledWith('Valoracion: 9.5');
    expect(console.log).toHaveBeenCalledWith('Director: Vince Gilligan');
    expect(console.log).toHaveBeenCalledWith('Plataforma: Netflix');
  });

  it('should not find a series with a different assessment', () => {
    expect(seriesCollection.SearchByassessment(8.0)).toEqual([]);
  });

  it('should not find a series on a different platform', () => {
    expect(seriesCollection.SearchByPlatform('Hulu')).toEqual([]);
  });
});
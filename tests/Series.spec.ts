import { describe, it, expect } from 'vitest';
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
});
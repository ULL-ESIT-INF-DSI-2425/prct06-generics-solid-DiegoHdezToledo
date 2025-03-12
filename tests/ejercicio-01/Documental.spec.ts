import { describe, it, expect } from 'vitest';

import { Documental } from '../../src/ejercicio-01/Documental';

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
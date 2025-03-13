import { describe, it, expect } from 'vitest';
import {StringPrintableCollection} from "../src/ejercicio-clase/StringPrintableCollection"

describe('StringPrintableCollection', () => {
  it('Inicializar coleccion de strings', () => {
    const collection = new StringPrintableCollection(["1", "2", "3"]);
    expect(collection.items).toEqual(["1", "2", "3"]);
  });

  it('Inicializar coleccion de strings vacia', () => {
    const collection = new StringPrintableCollection([]);
    expect(collection.items).toEqual([]);
  });

  it('Debe poder añadir un item a la coleccion', () => {
    const collection = new StringPrintableCollection(["1", "2", "3"]);
    collection.addItem("4");
    expect(collection.items).toEqual(["1", "2", "3", "4"]);
  });

  it('Debe poder añadir tres item a la coleccion', () => {
    const collection = new StringPrintableCollection(["1", "2", "3"]);
    collection.addItem("4");
    collection.addItem("5");
    collection.addItem("6");
    expect(collection.items).toEqual(["1", "2", "3", "4", "5", "6"]);
  });

  it('Debe poder obtener un item por el indice o no encontrarlo', () => {
    const collection = new StringPrintableCollection(["1", "2", "3"]);
    expect(collection.getItem(1)).toBe("2");
    expect(collection.getItem(5)).toBeUndefined();
  });

  it('Debe poder eliminar un item por su indice o no encontrarlo', () => {
    const collection = new StringPrintableCollection(["1", "2", "3"]);
    expect(collection.removeItem(1)).toBe("2");
    expect(collection.items).toEqual(["1", "3"]);
    expect(collection.removeItem(6)).toBeUndefined();
  });

  it('Debe devolver el strings de items de una coleccion', () => {
    const collection = new StringPrintableCollection(["1", "2", "3"]);
    expect(collection.getNumberOfItems()).toBe(3);
  });

  it('Debe devolver el strings de items de una coleccion vacia', () => {
    const collection = new StringPrintableCollection([]);
    expect(collection.getNumberOfItems()).toBe(0);
  });

  it('Debe devolver la coleccion separada por comas', () => {
    const collection = new StringPrintableCollection(["1", "2", "3"]);
    expect(collection.print()).toBe('1, 2, 3');
  });

  it('Debe no devolver nada ante un array vacio', () => {
    const collection = new StringPrintableCollection([]);
    expect(collection.print()).toBe('');
  });
  it('Debe tener una función addItem', () => {
    const collection = new StringPrintableCollection([]);
    expect(typeof collection.addItem).toBe('function');
  });

  it('Debe tener una función getItem', () => {
    const collection = new StringPrintableCollection([]);
    expect(typeof collection.getItem).toBe('function');
  });

  it('Debe tener una función removeItem', () => {
    const collection = new StringPrintableCollection([]);
    expect(typeof collection.removeItem).toBe('function');
  });

  it('Debe tener una función getNumberOfItems', () => {
    const collection = new StringPrintableCollection([]);
    expect(typeof collection.getNumberOfItems).toBe('function');
  });

  it('Debe tener una función print', () => {
    const collection = new StringPrintableCollection([]);
    expect(typeof collection.print).toBe('function');
  });

});




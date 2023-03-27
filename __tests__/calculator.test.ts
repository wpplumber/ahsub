import { describe, expect, test } from '@jest/globals';
import Calc from '../src/components/Calculator';

describe('Calculator', () => {
  const calculator = new Calc();

  test('defines typeOperation()', () => {
    expect(typeof calculator.typeOperation).toBe('function');
  });

  test('defines typeNumber()', () => {
    expect(typeof calculator.typeNumber).toBe('function');
  });

  test('Assert typing first number works', () => {
    calculator.typeNumber(5);
    expect(calculator.currentOperand).toBe('5');
  });

  test('Assert typing second number works', () => {
    calculator.typeNumber(0);
    expect(calculator.currentOperand).toBe('50');
  });

  test('Assert typing + operation works', () => {
    calculator.typeOperation('+');
    expect(calculator.operation).toBe('+');
  });

  test('defines evaluate()', () => {
    expect(typeof calculator.evaluate).toBe('function');
  });

  test('Assert typing = operation works', () => {
    calculator.typeOperation('+');
    calculator.typeNumber(2);
    calculator.evaluate();
    expect(calculator.currentOperand).toBe('52');
  });

  test('Assert typing - operation works', () => {
    calculator.typeOperation('-');
    calculator.typeNumber(40);
    calculator.evaluate();
    expect(calculator.currentOperand).toBe('12');
  });

  test('Assert typing * operation works', () => {
    calculator.typeOperation('x');
    calculator.typeNumber(2);
    calculator.evaluate();
    expect(calculator.currentOperand).toBe('24');
  });

  test('Assert typing ÷ operation works', () => {
    calculator.typeOperation('÷');
    calculator.typeNumber(6);
    calculator.evaluate();
    expect(calculator.currentOperand).toBe('4');
  });

  test('defines backspace()', () => {
    expect(typeof calculator.backspace).toBe('function');
  });

  test('Assert backspace works', () => {
    calculator.backspace();
    expect(calculator.currentOperand).toBe('');
  });

  test('Assert typing √ operation works', () => {
    calculator.typeNumber(4);
    calculator.typeOperation('√');
    expect(calculator.currentOperand).toBe('2');
  });

  test('Assert typing % operation works', () => {
    calculator.typeOperation('%');
    calculator.evaluate();
    expect(calculator.currentOperand).toBe('0.02');
  });

  test('defines memoryAdd()', () => {
    expect(typeof calculator.memoryAdd).toBe('function');
  });

  test('Assert memory add works', () => {
    calculator.typeOperation('x');
    calculator.typeNumber(100);
    calculator.evaluate();
    calculator.memoryAdd();
    expect(calculator.memory).toBe(2);
  });

  test('defines memoryRecall()', () => {
    expect(typeof calculator.memoryRecall).toBe('function');
  });

  test('Assert memory recall works', () => {
    calculator.clear();
    calculator.memoryRecall();
    expect(calculator.currentOperand).toBe('2');
  });

  test('defines memoryClear()', () => {
    expect(typeof calculator.memoryClear).toBe('function');
  });

  test('Assert memory clear works', () => {
    calculator.memoryClear();
    calculator.clear();
    expect(calculator.memory).toBe(0);
  });

  test('defines memorySave()', () => {
    expect(typeof calculator.memorySave).toBe('function');
  });

  test('Assert memory save works', () => {
    calculator.typeNumber(30);
    calculator.memorySave();
    expect(calculator.memory).toBe(30);
  });

  test('defines memorySubtract()', () => {
    expect(typeof calculator.memorySubtract).toBe('function');
  });

  test('Assert memory subtract works', () => {
    calculator.clear();
    calculator.typeNumber(20);
    calculator.memorySubtract();
    expect(calculator.memory).toBe(10);
  });
});

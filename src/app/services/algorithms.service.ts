import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlgorithmsService {
  //signals communication number in input and result
  public number = signal(0);
  readonly result = computed(() => this.calculateSeries(this.number()));

  constructor() {}

  //algorithm triangular succession number
  triangular(number: number): number {
    if (number < 1) return 1;
    return (number * (number + 1)) / 2;
  }

  // algorithm to get fibonacci succession
  fibonacci(number: number): number {
    if (number <= 1) return number;
    let firstNumber = 0;
    let lastNumber = 1;
    for (let index = 2; index <= number; index++) {
      const temporal = firstNumber + lastNumber;
      firstNumber = lastNumber;
      lastNumber = temporal;
    }
    return lastNumber;
  }

  //algorithm get primo in position of number
  primo(number: number): number {
    if (number < 1) return 1;
    let index = 2;
    let count = 0;
    while (count < number) {
      if (this.isPrimo(index)) count++;
      index++;
    }
    return index - 1;
  }

  //verify if number is prim0
  isPrimo(number: number): boolean {
    if (number < 2) return false;
    for (let index = 2; index <= Math.sqrt(number); index++) {
      if (number % index === 0) return false;
    }
    return true;
  }

  //calculate final result
  calculateSeries(number: number) {
    if (number <= 0) return;
    const triangularValue = this.triangular(number + 2);
    const primeValue = this.primo(number - 2);
    const fibonacciValue = this.fibonacci(number);
    const result = Number(
      ((2 * triangularValue * 3 * primeValue) / (7 * fibonacciValue)).toFixed(3)
    );
    return result;
  }
}

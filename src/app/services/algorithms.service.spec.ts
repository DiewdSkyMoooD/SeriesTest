import { TestBed } from '@angular/core/testing';

import { AlgorithmsService } from './algorithms.service';

describe('AlgorithmsService', () => {
  let service: AlgorithmsService;
  // test the first 10 numbers naturals
  let naturals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgorithmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('verify computed result since number signal', () => {
    service.number.set(7);
    expect(service.result()).toEqual(32.637);
  });

  it('triangular test values', () => {
    expect(naturals.map((number) => service.triangular(number))).toEqual([
      1, 3, 6, 10, 15, 21, 28, 36, 45, 55,
    ]);
  });

  it('fibonacci test values', () => {
    expect(naturals.map((number) => service.fibonacci(number))).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });

  it('primo test values', () => {
    expect(naturals.map((number) => service.primo(number))).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    ]);
  });

  it('calculateSeries test values', () => {
    expect(naturals.map((number) => service.calculateSeries(number))).toEqual([
      5.143, 8.571, 12.857, 18, 24, 27, 32.637, 29.184, 28.286, 23.096,
    ]);
  });
});

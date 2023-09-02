import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/reduce
// Example 1: Sum a stream of numbers

const src$ = of(1, 2, 3, 4, 2);
const sumNumArr = src$.pipe(reduce((acc, val) => acc + val));
//output: Sum: 12'
const subscribe = sumNumArr.subscribe((val) => console.log('Sum:', val));

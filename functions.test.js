const {
  clist, add, sub, double, negate, compose, zip, zipmap, zipwith, cons, car, cdr, partial, transpose, flip, flips, take, range, drop, flat,
} = require('./functions');

describe('Testing math functions', () => {
  test('clist should take a number and list it', () => {
    expect(clist(8)).toEqual([8]);
    expect(clist(8, 8, 8, 3, 2, 1, 8)).toEqual([8, 8, 8, 3, 2, 1, 8]);
  });
  test('add should take and arbitrary number of numbers and return their sum', () => {
    expect(add(8, 2, 1)).toEqual(11);
  });
  test('sub should take an arbitrary number of numbers and return them subtracted from the first number', () => {
    expect(sub(8, 2, 1)).toEqual(5);
  });
  test('double should take arbitary number of of numbers and double them', () => {
    expect(double(8)).toEqual(16);
    expect(double(8, 9, 1, 2, 8)).toEqual(56);
  });
  test('negate should take arbitary amount of numbers and negate them', () => {
    expect(negate(6)).toEqual(-6);
    expect(negate(6, 8, 9, 1, 7)).toEqual(-31);
  });
});
describe('testing more advanced functions', () => {
  test('"compose" should be able to take and arbitary number of functions and numbers and curry the return function as input to the next one', () => {
    expect(compose(double, add)(8, 2)).toEqual(20);
    expect(compose(negate, double, add, add, sub)(6, 6, 6, 1, 1, 2, 2, 3)).toEqual(30);
    expect(compose(negate, double, add)(1, 2, 3)).toEqual(-12);
    expect(compose(clist, double, sub)(1, 2, 3)).toEqual([-8]);
  });
  test('"zip" should "zip" numbers', () => {
    expect(zip([1, 2, 3], [4, 5, 6])).toEqual([[1, 4], [2, 5], [3, 6]]);
    expect(zip([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });
  xtest('"zipmap" should "zipmap" two number sequences', () => {
    expect(zipmap([1, 2, 3], [4, 5, 6])).toEqual({ 1: 4, 2: 5, 3: 6 });
  });
  xtest('"zipwith" should "zip" an arbitrary number of sequences with given function', () => {
    expect(zipwith(add, [1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
    expect(zipwith(add, [1, 2, 3], [4, 5, 6], [1, 1, 1])).toEqual([6, 8, 10]);
  });
  test('"cons", "car" & "cdr" should behave appropriately', () => {
    expect(car(cons(5, 6))).toEqual(5);
    expect(cdr(cons(5, 6))).toEqual(6);
    expect(car(cons(1, cons(2, null)))).toEqual(1);
    expect(car(cdr(cons(1, cons(2, null))))).toEqual(2);
  });
  test('"partial" should take a function and arbitrary # of args and return new function', () => {
    expect(partial(add, 1, 2)(3, 4)).toEqual(10);
    expect(partial(clist, 1, 2)(3, 4)).toEqual([1, 2, 3, 4]);
    expect(partial(sub, 10)(1, 2)).toEqual(7);
  });
  xtest('"transpose" should transpose a matrix ', () => {
    expect(transpose([[1, 2, 3], [4, 5, 6]])).toEqual([[1, 4], [2, 5], [3, 6]]);
    expect(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
    expect(transpose([[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [1, 2, 3]]))
      .toEqual([[1, 4], [2, 5], [3, 6]], [[7, 1], [8, 2], [9, 3]]);
  });
  test('"flip" flips first and second curried arguments', () => {
    expect(flip(clist)(1, 2, 3)).toEqual([2, 1, 3]);
    expect(flip(sub)(10, 1)).toEqual(-9);
  });
  test('"flips" reverses all curried arguments', () => {
    expect(flips(clist)(1, 2, 3)).toEqual([3, 2, 1]);
    expect(flips(sub)(1, 2, 3)).toEqual(0);
  });
  test('"take" takes a number n and a sequence seq, and returns a list of the first n elements of seq.', () => {
    expect(take(3, range(10))).toEqual([0, 1, 2]);
  });
  test('"drop"takes a number n and a sequence seq, and returns a list with the first n elements of seq dropped.', () => {
    expect(drop(3, range(6))).toEqual([3, 4, 5]);
  });
  test('"flatten" flattens a tree', () => {
    expect(flat([1, 2, [3, 4], 5, 6, [7, 8, 9], 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

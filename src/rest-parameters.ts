export {};

const reducer = ((accumulator: number, currentValue: number) =>  accumulator + currentValue);

const sum: (...values: number[]) => number = (...values: number[]): number => {
  console.log(values);
  return 100;
}

sum(1, 2, 3, 4, 5);

console.log([1, 2, 3, 4, 5].reduce(reducer));
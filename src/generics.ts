export {};

// const echo = (arg: number): number => {
//   return arg;
// }

// const echo = (arg: string): string => {
//   return arg;
// }

// ジェネリクス
const echo = <T>(args: T): T => {
  return args;
}

console.log(echo<number>(100));
console.log(echo<string>("string"));
console.log(echo<boolean>(true));

// クラスのジェネリクス
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo()); // 123
console.log(new Mirror<string>("Hello").echo()); // Hello
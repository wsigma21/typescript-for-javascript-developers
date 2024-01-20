export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

// 互換性がある場合
// any型はstring型になる
console.log(typeof fooCompatible); // undefined
fooCompatible = barCompatible;
console.log(typeof fooCompatible); // string

let fooIncompatible: string;
let barIncompatible: number;

// 互換性がない場合
// エラーになる
// fooIncompatible = barIncompatible;


let fooString: string;
let barString: string = 'string';

fooString = barString;

// 文字列リテラル型は文字列型の一部なので互換性あり
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(29, "Sigma");
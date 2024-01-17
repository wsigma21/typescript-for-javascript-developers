export {};

// シグネチャ
function double(value: number): number;
function double(value: string): string;

// 実体は1つしか書けない
// 型の制約はシグネチャで行っているのでanyでも良い
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === "number") {
    return value * 2;
  }
  return value + value;
}

// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double("Go "));

// booleanはシグネチャにないのでエラーになる
// console.log(double(true));
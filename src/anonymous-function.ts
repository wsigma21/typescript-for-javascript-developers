export {};

// 関数の型推論 const bmi: (height: number, weight: number) => number
const bmi: (height: number, weight: number) => number = function (
  height: number, weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.6, 50));
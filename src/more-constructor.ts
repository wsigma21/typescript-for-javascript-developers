export {};

class Person {
  // public name: string;
  // protected age: number;

  // 初期化処理をconstructorの引数で行う
  constructor(public name: string, protected age: number) {
  // constructor(name: string, age: number) {
    // this.name = name;
    // this.age = age; 
  }
}

const me = new Person("Sigma", 20);
console.log(me);
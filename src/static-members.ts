export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Sigma";
  static lastName: string = "Nakamura";

  static work() {
    return `Hey, guys! This is ${this.firstName}`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

// 静的メンバへのアクセス
console.log(Me.isProgrammer);
console.log(Me.work());
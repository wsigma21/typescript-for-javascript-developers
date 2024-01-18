export {};

// 名前空間を分ければ同名のクラスを定義できる
namespace Japanese {
  // namespaceもexportが必要
  export namespace Tokyo {
    // クラスはexportしないと外からアクセスできない
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    // クラスはexportしないと外からアクセスできない
    export class Person {
      constructor(public name: string) {}
    }
  }
}
namespace English {
  export class Person {
    constructor(
      public firstName: string, 
      public middleName: string, 
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("Sigma");
console.log(me.name);

const me2 = new Japanese.Osaka.Person("Sigyan");
console.log(me2.name);

const John = new English.Person("Michael", "John", "Jackson");
console.log(John.lastName);
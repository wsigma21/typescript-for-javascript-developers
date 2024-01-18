export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  // コンストラクタはreturnしないので戻り値の型は書かない
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    // ageはprivateなのでサブクラスから読み取れない
    // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    return `name: ${this.name},  nationality: ${this.nationality}`;
  }
}


let taro = new Person("Taro", 30, "Japan");
console.log(taro.name);
console.log(taro.profile());

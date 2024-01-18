export {};

// 要件
// * owner
// * 所有者
// * 初期化時に設定できる
// * 途中で変更できない
// * 参照できる
// * secretNumber
// * 個人番号
// * 初期化時に設定できる
// * 途中で変更できる
// * 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    // 初期化時に設定・基本は参照できない
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // 参照できる
  get owner() {
    return this._owner;
  }

  // 変更できない
  set secretNumber(newNum: number) {
    this._secretNumber = newNum;
  }

  // デバッグ用メソッド
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("Sigma", 12345678910);
// 以下はエラー：読み込み専用プロパティなので変更できない
// card.owner = "SigSig";

// 以下はエラー：privateプロパティでgetもないので参照できない
// console.log(card._secretNumber);

// 以下はundefined
// console.log(card.secretNumber);

// 確認用メソッドを使って変更を確認
console.log(card.debugPrint());
card.secretNumber = 345678;
console.log(card.debugPrint());
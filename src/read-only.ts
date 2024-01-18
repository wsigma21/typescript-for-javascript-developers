export {};

class VisaCard {
  // readonly owner: string;

  // 簡略化してかける
  // readonlyの時はデフォルトでpublicになるので省略して良い
  constructor(public readonly owner: string) {
  // constructor(owner: string) {
    // this.owner = owner;
  }
}

let myVisaCard = new VisaCard("Sigma");
console.log(myVisaCard.owner);

// readonlyなのでエラー
// myVisaCard.owner = "SigSig";
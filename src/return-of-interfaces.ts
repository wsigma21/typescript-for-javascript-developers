export {};

class Mahotsukai {}
class Souryo {}

// クラスは複数継承できない
class Taro extends Mahotsukai {}

interface Kenja {
  // シグネチャ
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  // Kenja, Senshiのシグネチャを必ず実装する必要がある
  // そうしていないとエラーが出るので実装漏れを防げる
  ionazun() {
    console.log('ionazun');
  }
  kougeki() {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
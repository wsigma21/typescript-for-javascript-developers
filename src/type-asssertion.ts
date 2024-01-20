export {};

let name: any = 'Sigma';
// let length = name.length;
// let length: number = name.length;
// 型アサーション
// let length = name.length as number;
// let length = (name as string).length;
let length = (<string>name).length;


// any型なので再代入可能
// number型にすると文字列は代入できない
// length = 'foo';
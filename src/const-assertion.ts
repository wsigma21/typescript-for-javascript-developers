export {};

let name = 'Atsushi';
name = 'Ham';

// nicknameは'Ham'型になる
let nickname = 'Ham' as const;
// 'Ham'以外の文字列を再代入しようとするとエラー
nickname = 'Hamtaro';

let profile = {
  name: 'Atushi',
  height: 178
} as const;

// 再代入するとエラーになる
profile.name = 'Ham';
profile.height = 180;
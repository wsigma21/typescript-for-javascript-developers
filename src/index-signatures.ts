export {};

interface Profile {
  // 必須のプロパティ
  name: string;
  underTwenty: boolean;
  // 任意のプロパティはインデックスシグネチャで書く
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Sigma', underTwenty: false };

// How to write index signatures
// {[ index: typeForIndex ]: typeForValue}
profile.name = 'Ham';
profile.age = 30;
profile.nationality = 'Japan';

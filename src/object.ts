export {};

let profile1: object = { name: 'Sigma', age: 20 };
console.log(profile1);

type ProfileType = {
  name: string;
  age: number;
}
let profile2: ProfileType = { name: 'Sigma', age: 20 };
console.log(profile2);
console.log(typeof profile2);

let profile3: {
    name: string,
    age?: number
} = { name: 'Sigma', age: 20 };
profile3 = { name: 'Sigsig'}
console.log(profile3);
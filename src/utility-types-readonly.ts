export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Sigma',
  age: 20,
};

console.log(me);
me.age++;
console.log(me);

type PersonalDatatype = Readonly<Profile>;

const friend: PersonalDatatype = {
  name: 'Shigeru',
  age: 40,
}

// readonlyなので再代入不可
// friend.age++;
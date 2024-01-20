export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
}

debugProfile('Sigma', 30);

// 引数の型が得られる
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
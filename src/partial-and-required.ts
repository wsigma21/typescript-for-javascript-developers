export {};

type Profile = {
  name: string;
  age: number;
};

type OptionalProfile = Partial<Profile>;

type RequiredProfile = Required<OptionalProfile>;
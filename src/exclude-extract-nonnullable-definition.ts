export {};

// Excludeの定義を細分化してみる
type MyExclude = 
  | (string extends string | number ? never : string) // 互換性あるのでneverを返す
  | (number extends string | number ? never : number) // 互換性あるのでneverを返す
  | (DebugType extends string | number ? never : DebugType); // 互換性ないのでDebugTypeを返す
type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// 関数以外を除外したい
type FunctionType = Exclude<SomeTypes, string | number>
type MyFunctionType = MyExclude;

// 関数だけ抽出
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// NunNullable
type NullableTypes = string | number |  null | undefined;
// null, undeifned以外の型を返す
type NonNullableTypes = NonNullable<NullableTypes>
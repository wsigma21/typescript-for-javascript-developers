export {};

// Exclude

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// 関数以外を除外したい
type FucntionType = Exclude<SomeTypes, string | number>

// 関数を除外したい
type NonfucntionType = Exclude<SomeTypes, DebugType>
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// Extract
// 「抽出する」という意味
// string、numberだけ抽出
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
// 関数だけ抽出
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// NunNullable
type NullableTypes = string | number |  null | undefined;
// null, undeifned以外の型を返す
type NonNullableTypes = NonNullable<NullableTypes>
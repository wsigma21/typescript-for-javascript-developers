export {};

type ObjectType = {
  name: string; 
  age: number;
} 

let object: ObjectType = {
  name: "sigma",
  age: 20
}
console.log(object);

interface ObjectInterface {
  name: string; 
  age: number;
}

let object2: ObjectInterface = {
  name: "sigma",
  age: 20
}
console.log(object2);
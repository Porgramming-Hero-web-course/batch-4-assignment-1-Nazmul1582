const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];
const person = { name: "Hasan", age: 25 };
console.log(getProperty(person, "name"));

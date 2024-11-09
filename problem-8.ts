const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
  return keys.every((key) => key in obj);
};

const data = { name: "hasan", age: 25, email: "hasan@gamil.com" };
console.log(validateKeys(data, ["name", "age"]));

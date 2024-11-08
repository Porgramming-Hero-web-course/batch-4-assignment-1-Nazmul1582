const removeDup = (arr: number[]): number[] => Array.from(new Set(arr));

console.log(removeDup([1, 2, 2, 3, 4, 4, 5]));

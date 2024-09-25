export default function map<T, U>(array: T[], func: (value: T) => U): U[] {
  const newArray: U[] = [];

  for (let i = 0; i < array.length; i++) {
    const newValue = func(array[i]);
    newArray.push(newValue);
  }

  return newArray;
}

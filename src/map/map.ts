export default function map(array: any[], func: (value: any) => any) {
  const newArray: any[] = [];

  for (let i = 0; i < array.length; i++) {
    const newValue = func(array[i]);
    newArray.push(newValue);
  }

  return newArray;
}

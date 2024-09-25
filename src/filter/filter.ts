export default function filter(array: any[], func: (value: any) => any) {
  const newArray: any[] = [];

  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

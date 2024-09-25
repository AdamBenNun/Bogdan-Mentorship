export default function map(array: any[], func: (value: any) => any) {
  var newArray: any[] = [];

  for (const element of array) {
    let newValue = func(array[element]);
    newArray.push(newValue);
  }

  return newArray;
}

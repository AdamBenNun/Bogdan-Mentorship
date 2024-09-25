export default function map(array: any[], func: (value: any) => any) {
  var newArray: any[] = [];

  for (const item in array) {
    let newValue = func(array[item]);
    newArray.push(newValue);
  }

  return newArray;
}

export default function map(array: any[], func: (value: number) => number) {
  var newArray: any[] = [];

  let object = Object.assign({}, array);

  for (const property in object) {
    let newValue = func(array[property]);
    newArray.push(newValue);
  }

  return newArray;
}

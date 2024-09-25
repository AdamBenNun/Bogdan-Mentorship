export default function map(array: any[], func: (value: number) => number) {
  var newArray: any[] = [];

  array.forEach((element) => {
    let newNum = func(array[element]);
    newArray.push(newNum);
  });

  return newArray;
}

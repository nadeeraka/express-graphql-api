export const getHigherValue = (array: number[]): number => {
  let higher: number = 0;
  // sort the expenses
  for (let i = 0; i < array.length; i++) {
    const ex = array[i];

    if (ex > higher) {
      higher = ex;
    }
  }
  return higher;
};

export const calculate = (arr: number[]): number => {
  //   const count = this._expenses.reduce((a:number,b:number)=>a+b)
  //   return count
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
};

export const getSort = (arr: number[]): number[] => {
  return arr.sort((a: number, b: number) => a - b);
};
export const sortedFirstN = (arr: number[], n: number): number[] => {
  const sortArray: number[] = getSort(arr);

  if (n > arr.length) {
    return [];
  }
  const newArray: number[] = sortArray.slice(0, n);

  return newArray;
};

export const firstN = (arr: number[], n: number): number[] => {
  if (n > arr.length) {
    return [];
  }
  const newArray: number[] = arr.slice(0, n);

  return newArray;
};

export const getMinimum = (arr: number[]): number => {
  const sortArray: number[] = getSort(arr);
  return sortArray[sortArray.length - 1];
};

export const getAverage = (arr:number[]):number =>
{
    return (calculate(arr) / arr.length)*100;

}
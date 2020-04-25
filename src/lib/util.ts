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

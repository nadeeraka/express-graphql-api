import { Income } from "../../models/Income";
import { Expense } from "../../models/Expenses";
export const getObj = (str: string) => {
  switch (str) {
    case "in":
      return Income;

    case "ex":
      return Expense;
    default:
      return Expense;
  }
};

export const incomeArray = async () => await Income.find();
export const sortArray = (arr: number[]) => {
  if (arr.length < 0) return [];
  return arr.sort((a, b) => a - b);
};
export const getTotal = (arr: number[]): number => {
  if (arr.length < 0) return -1;
  return arr.reduce((a, b) => a + b);
};

export const getMax = (arr: number[]) => {
  const sortedArray: number[] = sortArray(arr);
  if (sortedArray.length > 0) {
    return sortedArray[sortedArray.length - 1];
  }
  return -1;
};

export const getMin = (arr: number[]): number => {
  const sortedArray: number[] = sortArray(arr);
  if (sortedArray.length > 0) {
    return sortedArray[0];
  }
  return -1;
};

export const getAverage = (arr: number[]): number => {
  if (arr.length < 0) {
    return -1;
  }
  return getTotal(arr) / arr.length;
};

export const getPattern = (arr: number[]): number[] => {
  let pattern: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arr[i + 1]) {
      pattern.push(arr[i + 1] - element);
    }
  }
  return pattern;
};

import { calculate, getHigherValue, sortedFirstN, firstN, getMinimum, getAverage } from "src/lib/util";

export class IncomeMainClass {
  constructor(private _income: number[]) {}
  calculateIncome(): number {
    return calculate(this._income);
  }

  get getIncome(): number {
    return this.calculateIncome();
  }

  set setIncome(i: number[]) {
    this._income = i;
  }
  getHighestIncome(): number {
    return getHigherValue(this._income);
  }

  getSortIncome(): number[] {
    const sortArray = this._income.sort((a: number, b: number) => a - b);

    return sortArray;
  }
  getSortedFirst(n: number): number[] {
    return sortedFirstN(this._income, n);
  }

  getFirstN(n: number): number[] {
    return firstN(this._income, n);
  }

  getMinimumExpenses(): number {
    return getMinimum(this._income);
  }

  getAverage ():number{
    return getAverage(this._income)
  }
}

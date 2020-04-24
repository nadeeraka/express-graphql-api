// ! goal
// give a  forecast for  given  expenses

//  ! method
// loop through expenses array and get the total expenses
//priotize  expenses
// find out useless expenses

class Expenses {
  constructor(private _expenses: number[], private _income: number) {}

  set setExpenses(e: number[]) {
    if (e.length < 0) throw "This Array is not valid";
    this._expenses = e;
  }

  set setIncome(i: number) {
    if (i < 0) throw "This income   not valid";
    this._income = i;
  }

  get setExpenses() {
    return this._expenses;
  }

  get setIncome() {
    return this._income;
  }

  calculateExpenses() {
    let count: number = 0;

    //   const count = this._expenses.reduce((a:number,b:number)=>a+b)
    //   return count
    for (let i = 0; i < this._expenses.length; i++) {
      count += this._expenses[i];
      console.log(count);
    }
    return count;
  }

  setBasicGrade() {
    if (this._income < this.calculateExpenses()) {
      return -1;
    } else if (this._income === this.calculateExpenses()) {
      return 1;
    }

    return 0;
  }

  setAdvanceGrade() {}
}

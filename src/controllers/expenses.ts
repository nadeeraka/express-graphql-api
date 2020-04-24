// ! goal
// give a  forecast for  given  expenses

//  ! method
// loop through expenses array and get the total expenses
//priotize  expenses
// find out useless expenses
 export class Expenses {
  constructor(private _expenses: number[], private _income: number) {}

  set setExpenses(e: number[]) {
    if (e.length < 0) throw "This Array is not valid";
    this._expenses = e;
  }

  set setIncome(i: number) {
    if (i < 0) throw "This income   not valid";
    this._income = i;
  }

  calculateExpenses(): number {
    let count: number = 0;

    //   const count = this._expenses.reduce((a:number,b:number)=>a+b)
    //   return count
    for (let i = 0; i < this._expenses.length; i++) {
      count += this._expenses[i];
      console.log(count);
    }
    return count;
  }

  get getExpenses(): number {
    return this.calculateExpenses();
  }

  get setIncome() {
    return this._income;
  }

  setBasicGrade(): number {
    if (this._income < this.calculateExpenses()) {
      return -1;
    } else if (this._income === this.calculateExpenses()) {
      return 0;
    }

    return this.setAdvanceGrade();
  }

  setAdvanceGrade(): number {
    const rate: number = this._income / this.calculateExpenses();
    const actualRate: number = Math.floor(rate);
    return actualRate;
  }

  checkGrade() {}
}

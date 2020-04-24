
// ! goal
// give a  forecast for  given  expenses

//  ! method
// loop through expenses array and get the total expenses
//priotize  expenses
// find out useless expenses


class Expenses {

    constructor(private _expenses: [number] ){

    }

    set expenses (e:[number])
    {
        if(e.length < 0)
        throw "This Array is not valid";
        this._expenses = e
    }

    get expenses()
    {
        return this._expenses
    }
    


}

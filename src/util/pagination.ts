export const getPagination =(arr:number[],count:number):number=>
{
    return Math.floor(arr.length/count)
} 
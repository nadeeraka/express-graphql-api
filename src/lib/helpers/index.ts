export const sortArray = (arr:number[])=>
{
    if (arr.length < 0)return  [];
    return arr.sort((a,b)=>a-b)
} 


export const getMax = (arr: number[]) => {
  
    const sortedArray:number[] = sortArray(arr)
    if (sortedArray.length> 0) {
        return sortedArray[sortedArray.length-1]
    }
    return -1
}

export const getMin = (arr: number[]):number => {
    const sortedArray:number[] = sortArray(arr)
    if (sortedArray.length> 0) {
        return sortedArray[0]
    }
    return -1
};

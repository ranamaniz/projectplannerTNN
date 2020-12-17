

export const isNotEmptyArray=(checkItem)=>{
    console.log(checkItem && Array.isArray(checkItem));
    return checkItem && Array.isArray(checkItem) && checkItem.length!==0;
}
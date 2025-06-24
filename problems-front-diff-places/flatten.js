/**
 * 
 * flatten Write a recursive function called flatten which accepts an array 
 * of arrays and returns a new array with all values flattened.
 * 
 */
function flatten(arr){
    const result = []
    function helper(arr){
        if(arr.length === 0) return;
        if(Array.isArray(arr[0])){
            helper(arr[0])
        }else{
            result.push(arr[0]);
        }
        helper(arr.slice(1))
    }
    helper(arr);
    console.log(result);
    
    return result
}
flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
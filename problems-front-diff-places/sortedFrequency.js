/*
Divide and Conquer - sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

sortedFrequency([1,1,2,2,2,2,3],2) // 4 
sortedFrequency([1,1,2,2,2,2,3],3) // 1 
sortedFrequency([1,1,2,2,2,2,3],1) // 2 
sortedFrequency([1,1,2,2,2,2,3],4) // -1
Time Complexity - O(log n)
*/

function binarySearchIndex(arr, target, findFirst = true) {
    let result = -1;
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midVal = arr[mid];

        if (midVal === target) {
            result = mid;

            if (findFirst) {
                high = mid - 1; // look left
            } else {
                low = mid + 1;  // look right
            }
        } else if (midVal < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}
function sortedFrequency(arr, target) {
    const startingIndex = binarySearchIndex(arr,target);
    
    const endingIndex = binarySearchIndex(arr,target,false);
    return startingIndex === -1 || endingIndex === -1 ? -1 : endingIndex + 1 - startingIndex
}
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1

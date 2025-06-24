// function findRotatedIndex(arr,target){
//     let low = 0;
//     let high = arr.length - 1;
//     let mid  = Math.floor((low + high) / 2);

//     while(low <= high){
//         console.log(arr.slice(low,mid+1),arr.slice(mid+1,high+1),low,mid,high);

//         if(target === arr[mid]){
//             return mid
//         }
//         if(arr[low] <= arr[mid] && target >= arr[low] && target <= arr[mid]){
//             high = mid
//         }else{
//             low = mid + 1
//         }
//         mid  = Math.ceil((low + high) / 2);
//     }
//     return -1;
// }

function findRotatedIndex(arr, target) {
    function hasCircularMovement(start, end) {
        return arr[start] > arr[end];
    }
    function circularMovementHandler(low, high) {
        const mid = Math.floor((low + high) / 2);
        let leftHalf = sideConquer(low, mid);
        let rightHalf = sideConquer(mid + 1, high);
        return Math.max(leftHalf, rightHalf);
    }
    function sideConquer(low, high) {
        if (hasCircularMovement(low, high)) {
            return circularMovementHandler(low, high);
        } else if (target >= arr[low] && target <= arr[high]) {
            return splitAndConquer(low, high);
        } else {
            return -1;
        }
    }

    function splitAndConquer(low = 0, high = arr.length - 1) {
        const mid = Math.floor((high + low) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        const leftSideResult = sideConquer(low, mid);
        const rightSideResult = sideConquer(mid + 1, high);
        return Math.max(leftSideResult,rightSideResult)
    }
    return splitAndConquer();
}
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16));
module.exports = findRotatedIndex;

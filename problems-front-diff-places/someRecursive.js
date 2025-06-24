function someRecursive(values, condition) {
    function helper(firstElementInd = 0) {
        if (firstElementInd >= values.length) return false;
        if (condition(values[firstElementInd])) return true;
        if (firstElementInd < values.length) return helper(firstElementInd + 1);
    }

    return helper();
}

const isOdd = val => val % 2 !== 0;
someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4,6,8], val => val > 10); // false

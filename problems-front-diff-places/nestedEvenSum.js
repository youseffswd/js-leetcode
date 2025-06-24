function nestedEvenSum(obj) {
    const result = [];
    function helper(arr) {
        if (arr.length === 0) return;
        if (typeof arr[0] === "object") helper(Object.values(arr[0]));
        if(typeof arr[0] === "number" && arr[0] % 2 === 0) {
            result.push(arr[0])
        }
        helper(arr.slice(1))
    }
    helper(Object.values(obj));
    return result.reduce((cur,prev) => cur + prev,0)
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
        },
    },
};
console.log(Object.values(obj1));
nestedEvenSum(obj1)

const findRotatedIndex = require('./findRotatedIndex');

const testCases = [
  { arr: [3, 4, 1, 2], target: 4, expected: 1 },
  { arr: [6, 7, 8, 9, 1, 2, 3, 4], target: 8, expected: 2 },
  { arr: [6, 7, 8, 9, 1, 2, 3, 4], target: 3, expected: 6 },
  { arr: [1, 2, 3], target: 5, expected: -1 },
  { arr: [37,44,66,102,10,22], target: 14, expected: -1 },
  { arr: [6, 7, 8, 9, 1, 2, 3, 4], target: 12, expected: -1 },
  { arr: [11,12,13,14,15,16,3,5,7,9], target: 16, expected: 5 },
];

testCases.forEach(({ arr, target, expected }, index) => {
  test(`Test case ${index + 1}`, () => {
    const result = findRotatedIndex(arr, target);
    expect(result).toBe(expected);
  });
});
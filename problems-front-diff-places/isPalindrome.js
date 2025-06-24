/**
    isPalindrome
    Write a recursive function called isPalindrome
    which returns true if the string passed to it is a palindrome
    (reads the same forward and backward). Otherwise it returns false.
 */

function reverse(str,start = 0){
    if(start === str.length - 1) return str[start];
    return  reverse(str,start + 1) + str[start]
}
function isPalindrome(str) {
    if(str === reverse(str)) return true;
    else return false
}

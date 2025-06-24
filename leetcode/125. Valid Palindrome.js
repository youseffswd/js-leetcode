var isPalindrome = function(s = "") {
    s = s.replace(/[^a-zA-Z0-9]+/g, '');
    
    for(let i = 0,j=s.length - 1; i < s.length;i++,j--){
        if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    }
    return true
};

isPalindrome("A man, a plan, a canal: Panama")
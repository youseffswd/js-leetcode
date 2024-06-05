
var commonChars = function(words) {
    // contains the letter of first word / after loop it contains the remians of first word without the uncommon letter
    let original = new Map();
    let afterCheck = new Map();
    for(const letter of words[0].split("")){
        if(original.get(letter)){
            original.set(letter,original.get(letter) + 1)
        }else{
            original.set(letter,1)
        }
    }

    for(let i = 1; i < words.length;i++){
        for(let j = 0 ; j < words[i].length;j++){
            const letter = words[i][j];
            if(!original.get(letter)) continue;
            if(afterCheck.get(letter)){
                afterCheck.set(letter,afterCheck.get(letter) + 1)
            }else{
                afterCheck.set(letter,1);
            }
            original.set(letter,original.get(letter) - 1)
        }
        original = afterCheck;
        afterCheck = new Map();
    }
    const result = Array.from(original.entries()).flatMap(([letter, count]) => {
        return Array(count).fill(letter);
    });

    return result
};
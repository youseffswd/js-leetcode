function reverse(str = "",start = 0){
    if(start === str.length - 1) return str[start];
    return  reverse(str,start + 1) + str[start]
}
console.log(reverse('awesome'));

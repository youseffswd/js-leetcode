/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
// RESULT : Beats 95.87% of users with JavaScript
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) return [];
    const result = Array.from({ length: rowsCount }, _ => []);
    let i = 0;
    let updown = true;
    let row = 0;
    while (i < this.length) {
        let currentElement = this[i++];
        result[row].push(currentElement);
        if (updown) {
            if(row + 1 === rowsCount){
                updown = false;
                continue;
            }
            row++;
        }else{
            if(row === 0){
                updown = true;
                continue;
            }
            row--;
        }
    }
    return result;
};

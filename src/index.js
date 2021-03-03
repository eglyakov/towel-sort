
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArr = [];

    if(!matrix || matrix == []) return [];

    for(let i = 0; i < matrix.length; i++) {
        
        if((i + 1) % 2 == 1) {
            matrix[i].sort((a, b) => {
                return a - b;
            });
        } else {
            matrix[i].sort((a, b) => {
                return b - a;
            });
        }

        for(let j = 0; j < matrix[i].length; j++) {
            newArr.push(matrix[i][j]);
        }
        
    }

    // newArr.sort((a, b) => {
    //     return a - b;
    // });

    return newArr;
}

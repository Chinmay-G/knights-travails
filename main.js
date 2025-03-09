'use strict';

function knightMoves(source, destiny) {
    let movesInfo = [];
    let doneArr = [];
    let queue = [source];
    while (queue.length != 0) {
        let curr = queue.shift();
        console.log(curr);

        if (curr === destiny) {
            movesInfo.push(curr);
            queue = [];
            return;
        }
        if (!doneArr.some(() => curr)) {
            if ((curr[0] + 2 < 8 && curr[0] + 2 >= 0) && (curr[1] + 1 < 8 && curr[1] + 1 >= 0)) queue.push([curr[0] + 2, curr[1] + 1]);
            if ((curr[0] + 1 < 8 && curr[0] + 1 >= 0) && (curr[1] + 2 < 8 && curr[1] + 2 >= 0)) queue.push([curr[0] + 1, curr[1] + 2]);
            if ((curr[0] - 1 < 8 && curr[0] - 1 >= 0) && (curr[1] + 2 < 8 && curr[1] + 2 >= 0)) queue.push([curr[0] - 1, curr[1] + 2]);
            if ((curr[0] - 2 < 8 && curr[0] - 2 >= 0) && (curr[1] + 1 < 8 && curr[1] + 1 >= 0)) queue.push([curr[0] - 2, curr[1] + 1]);
            if ((curr[0] - 2 < 8 && curr[0] - 2 >= 0) && (curr[1] - 1 < 8 && curr[1] - 1 >= 0)) queue.push([curr[0] - 2, curr[1] - 1]);
            if ((curr[0] - 1 < 8 && curr[0] - 1 >= 0) && (curr[1] - 2 < 8 && curr[1] - 2 >= 0)) queue.push([curr[0] - 1, curr[1] - 2]);
            if ((curr[0] + 1 < 8 && curr[0] + 1 >= 0) && (curr[1] - 2 < 8 && curr[1] - 2 >= 0)) queue.push([curr[0] + 1, curr[1] - 2]);
            if ((curr[0] + 2 < 8 && curr[0] + 2 >= 0) && (curr[1] - 1 < 8 && curr[1] - 1 >= 0)) queue.push([curr[0] + 2, curr[1] - 1]);
        }
        doneArr.push(curr.slice());
        movesInfo.push(curr);
        console.log('Q - ', queue.slice());
        console.log('Done Array - ', doneArr);
        // levelOrderRec(queue[0]);
    }
    return movesInfo;
}

const board = [...Array(8)];
// .map(e => Array(8));

for (let i = 0; i < 8 * 8; i++) {
    for (let j = 0; j < 8; j++)
        // board[i] = [j];
        board[j] = [i, j];
}

// board[0][0] = 'Hi Mr.A';
// board[0][1] = 'Hi Mr.A';
// board[1][3] = 'Hi Mr.B';

console.log(board);
// console.log(board[2][4]);
// console.log(board.some(() => [63, 3]));

console.log(knightMoves([3, 3], [7, 7]));
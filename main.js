'use strict';

function knightMoves(start, end) {
    const BOARD_SIZE = 8;

    if (start[0] >= BOARD_SIZE || start[0] < 0
        || start[1] >= BOARD_SIZE || start[1] < 0
        || end[0] >= BOARD_SIZE || end[0] < 0
        || end[1] >= BOARD_SIZE || end[1] < 0
    ) throw new Error('Invalid start or end!!');

    const possibleMoves = [
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
    ]

    const set = new Set();
    const queue = [{ vertex: start, path: [] }];

    while (queue.length > 0) {
        const { vertex, path } = queue.shift();

        if (vertex[0] === end[0] && vertex[1] === end[1]) {
            path.push(vertex);
            console.log(`=> You made it in ${path.length - 1} moves! Here's your path from [${start}] to [${end}]: \n`);
            console.log(path);
            return path;
        }

        for (let move of possibleMoves) {
            const nextMove = [vertex[0] + move[0], vertex[1] + move[1]];

            if (
                nextMove[0] >= BOARD_SIZE
                || nextMove[0] < 0
                || nextMove[1] >= BOARD_SIZE
                || nextMove[1] < 0
            ) continue;

            if (set.has(JSON.stringify(nextMove))) continue;

            set.add(JSON.stringify(nextMove));
            queue.push({ vertex: nextMove, path: [...path, vertex] });
        }
    }
    return null;
}

knightMoves([3, 3], [6, 6]);
console.log('');
knightMoves([3, 3], [4, 3]);
console.log('');
knightMoves([0, 0], [3, 3]);
console.log('');
knightMoves([3, 3], [0, 0]);
console.log('');
knightMoves([0, 0], [7, 7]);

// knightMoves([0, 9], [0, 0]);

// console.log(knightMoves([3, 3], [6, 6]));
// console.log(knightMoves([0, 0], [7, 7]));
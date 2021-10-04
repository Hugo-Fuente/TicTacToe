export default class Game {
    constructor() {
        /* X in first turn, empty board = nothing in any element of the board  */
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X"; 
    }

/* 
logic:
0 1 2
3 4 5
6 7 8
*/

    makeMove(i) {
        /* Preventing the user from choosing the same square twice */
        if (this.board[i]) {
            return;
        }

        this.board[i] = this.turn;
        this.nextTurn();
    }

    findWinningCombination () {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        /* testing winning condition for each combination */

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (this.board[a] && (this.board[a] === this.board[b]) && (this.board[b] === this.board[c])) {
                return combination;
            }
        }

        return null;
    }

}
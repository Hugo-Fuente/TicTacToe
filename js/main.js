import Game from "./Game.js";

let game = new Game();

/*
console.log(game.turn);
game.makeMove(0);
console.log(game.board.join(","));

console.log(game.turn);
game.makeMove(6);
console.log(game.board.join(","));
*/

game.makeMove(0); // X
game.makeMove(3); // O
game.makeMove(7); // X
game.makeMove(4); // O
game.makeMove(2); // X
game.makeMove(5); // O
console.log(game.board);
console.log(game.findWinningCombination());
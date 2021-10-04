import Game from "./Game.js";

let game = new Game();

/*
// Testing the turns
console.log(game.turn);
game.makeMove(0);
console.log(game.board.join(","));

console.log(game.turn);
game.makeMove(6);
console.log(game.board.join(","));
*/

//Winner
/*
game.makeMove(0); // X
game.makeMove(3); // O
game.makeMove(7); // X
game.makeMove(4); // O
game.makeMove(2); // X
game.makeMove(5); // O
console.log(game.board);
console.log(game.findWinningCombination());
*/

//Looser
game.makeMove(0); // X
game.makeMove(3); // O
game.makeMove(7); // X
game.makeMove(4); // O
game.makeMove(2); // X
game.makeMove(8); // O
console.log(game.board);
console.log(game.findWinningCombination());
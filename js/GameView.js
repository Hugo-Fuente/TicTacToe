export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            <div class="header">
                <div class="header__turn"></div>
                <div class="header__status"></div>
                <button type="button" class="header__restart">
                    <i class="material-icons">refresh</i>
                </button>
            </div>
            <div class="board">
                <div class="board__tile" data-index="0"></div>
                <div class="board__tile" data-index="1"></div>
                <div class="board__tile" data-index="2"></div>
                <div class="board__tile" data-index="3"></div>
                <div class="board__tile" data-index="4"></div>
                <div class="board__tile" data-index="5"></div>
                <div class="board__tile" data-index="6"></div>
                <div class="board__tile" data-index="7"></div>
                <div class="board__tile" data-index="8"></div>
            </div>
        `;

        // Functions
        this.onTileClick = undefined;
        this.onRestartClick = undefined;

        // When tile clicked, run the function and pass through each data-index
        this.root.querySelectorAll(".board__tile").forEach(tile => {
            tile.addEventListener("click", () => {
                this.onTileClick(tile.dataset.index);
            });
        });
        
        // When restart button pressed
        this.root.querySelector(".header__restart").addEventListener("click", () => {
            if (this.onRestartClick) {
                this.onRestartClick();
            }
        });

    }

    update(game) {
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }

    // Turno de quem
    updateTurn(game) {
        this.root.querySelector(".header__turn").textContent = `Turno do ${game.turn}`;
    }
    
    updateStatus(game) {
        let status = "Jogo Iniciado!";
        if (game.findWinningCombination()) {
            status = `${game.turn} é o Vencedor!`
        } else if (!game.isInProgress()) {
            status = "Empate?!"
        }
        this.root.querySelector(".header__status").textContent = status;
    }

    updateBoard(game) {
        const winningCombination = game.findWinningCombination();

        for (let i = 0; i < game.board.length; i++) {
            const tile = this.root.querySelector(`.board__tile[data-index="${i}"]`);
            
            // para novos jogos não interferirem no resultado
            tile.classList.remove("board__tile--winner");
            tile.textContent = game.board[i];

            if(winningCombination && winningCombination.includes(i)) {
                tile.classList.add("board__tile--winner");
            }
        }
    }
}
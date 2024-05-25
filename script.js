const moveSound = document.getElementById('moveSound');

// Configuração do tabuleiro de xadrez
const boardConfig = {
    draggable: true,
    position: 'start',
    onDrop: handleMove,
    pieceTheme: 'pieces/{piece}.png'  // Path to piece images
};

const board = Chessboard('chessboard', boardConfig);
const game = new Chess();

function handleMove(source, target) {
    const move = game.move({
        from: source,
        to: target,
        promotion: 'q'
    });

    if (move === null) return 'snapback';
    
    moveSound.play();
    updateBoard();
}

function updateBoard() {
    board.position(game.fen());
}

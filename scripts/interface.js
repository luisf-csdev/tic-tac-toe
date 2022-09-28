document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

let result = document.getElementById("result")

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            let player = playerTurn
            player = (player == 0) ? "X" : "O";

            result.innerHTML = `<br><h2>Player ${player} is the winner!</h2>`
        }, 10)

    };
    updateSquare(position);

}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    try {
        square.innerHTML = `<div class='${symbol}'></div>`;
    } catch {
        console.log("Cannot insert a symbol in an space that's already filled");
    
    } 
}

let restart = document.getElementById("restart")
restart.addEventListener('click', restartGame)

function restartGame() {
    result.innerHTML = ""

    let squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = ''
            
        }

    })

    return board = ['', '', '', '', '', '', '', '', ''],
           playerTurn = 0,
           gameOver = false

}
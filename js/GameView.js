export default class GameView {

    constructor() {
        console.log('init game view');
    }

    updateBoard(game) {

        this.updateTurn(game.turn)

        game.board.forEach((value,i) => {

            const tile = document.querySelectorAll(`.board-tile`)[i]

            tile.innerText = value
            if (value) tile.classList.add(`tile-${value.toLowerCase()}`)
        });


    }

    updateTurn(turn) {
        document.querySelector('.player-x').classList.remove('active')
        document.querySelector('.player-o').classList.remove('active')
        
        document.querySelector(`.player-${turn.toLowerCase()}`).classList.add('active')
        
    }
}
import {theme} from "./main.js"

export default class Game {
    constructor() {
        console.log("init game");
        this.board = new Array(9).fill(null)
        this.turn = "X";
        this.endOfGame = false
    }

    nextTurn() {
        return this.turn === "X" ? this.turn = "O" : this.turn = "X"
    }

    makeMove(i) {
        if (this.endOfGame) return

        this.board[i] = this.turn

        this.winningCombination = this.findWinningCombination()

        if (!this.winningCombination) 
             return this.nextTurn()
        else 
            this.endGame(this.winningCombination)
    }

    findWinningCombination() {
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]

        for (const combination of winningCombinations) {
            const [a,b,c] = combination
            if (this.board[a] === this.turn && this.board[b] === this.turn && this.board[c] === this.turn) return combination
        }
        if (this.board.every(tile => tile !== null)) return 'equal'
    }

    endGame(combination) {
        this.endOfGame = true
        const winMessage = document.querySelector('.win-message')

        if (combination !== 'equal') {

            combination.forEach(elem => {
                document.querySelector(`.board-tile[data-index='${elem}']`).classList.add('winner')
            })
    
            
            winMessage.classList.add(this.turn.toLocaleLowerCase())
            winMessage.innerText = `Player ${this.turn} has won!`
        } else {
            winMessage.classList.add('equal')
            winMessage.innerText = `Both players are equal`
        }
        

    }

}
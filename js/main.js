import Game from "./Game.js";
import GameView from "./GameView.js"
export {theme}

document.querySelector('.player-x').classList.add('active')

let game = new Game()
let gameView = new GameView()
let theme = 'light'
const moonSvg = "<span class=\"material-icons\">dark_mode</span>"
const sunSvg = "<span class=\"material-icons\">light_mode</span>"

const tiles = document.querySelectorAll('.board-tile')

tiles.forEach(tile => {
    tile.addEventListener('click', () => onTileClick(tile.dataset.index))
})

document.querySelector('.restart').onclick = restart
document.querySelector('.dark-mode').onclick = changeTheme


function onTileClick(i) {
    if (game.board[i] !== null) return
    game.makeMove(i)
    gameView.updateBoard(game)
}

function restart() {
    game = new Game()
    gameView.updateBoard(game)
    document.querySelectorAll('.board-tile').forEach(elem => {
        elem.classList.remove('winner', 'tile-x', 'tile-o')
    })
    const winMessage = document.querySelector('.win-message')
    winMessage.innerText = "";
    winMessage.classList.remove('equal','x','o')
}

function changeTheme() {

    document.querySelector('.player-x').style.transition = 'none'
        document.querySelector('.player-o').style.transition = 'none'
    if (theme === 'light') {
        document.querySelectorAll('.colored').forEach(element => {
            element.classList.add('dark')
        })
        theme = 'dark'
        document.querySelector('.dark-mode').innerHTML = sunSvg
    } else { 
        document.querySelectorAll('.colored').forEach(element => {
            element.classList.remove('dark')
        })
        theme = 'light'
        document.querySelector('.dark-mode').innerHTML = moonSvg
    }
    setTimeout(() => {
        document.querySelector('.player-x').style.transition = 'all 0.3s ease-out'
        document.querySelector('.player-o').style.transition = 'all 0.3s ease-out'
    },100)
    
}




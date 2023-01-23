const gameBoard = document.querySelectorAll('board')
// const playerOne =
// const playerTwo =
// const currentPlayer = playerOne
// const scoreBoard = document.querySelector()
const startButton = document.getElementById('play')
// let score = document.querySelector()

// const resetButton = document.querySelector('.reset')

//////////////////////////////////////////////////////

// const startGame = () => {
//   document.body.classList.toggle('pointer event')
// }

///////////function PlayerTurn/////////////////////

///////////function Flip card, player flips card to reveal image//////////////////////
const card = document.querySelectorAll('.card')

flipCard = (e) => {
  e.target.classList.toggle('visible')
  // setTimeout(() => e.target.classList.toggle('visible'), 1000)
  console.log('hello!')
}

card.forEach((card) => {
  card.addEventListener('click', flipCard)
})

console.log('visible')

/////////////function Update Score, when player makes a match the scoreboard updates////////////////////

/////////////function play again resets board////////////////////

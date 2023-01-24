const gameBoard = document.querySelectorAll('board')
// const playerOne =
// const playerTwo =
// const currentPlayer = playerOne
const startButton = document.getElementById('play')

// const resetButton = document.querySelector('.reset')

///////////function PlayerTurn/////////////////////

///////////function Flip card, player flips card to reveal image//////////////////////
const card = document.querySelectorAll('.card')

flipCard = (e) => {
  // setTimeout(() => e.target.classList.toggle('invisible'))
  const banana = e.target.getAttribute('banana')
  e.target.classList.toggle(banana)
  console.log('hello!' + banana)
  checkMatch(banana)
}

card.forEach((card) => {
  card.addEventListener('click', flipCard)
})

////////////////////////////function checkMatch///////////////////////////////////////
//
let choiceOne = ''
let choiceTwo = ''

const checkMatch = (apple) => {
  if (choiceOne.length > 0) {
    choiceTwo = apple
    if (choiceOne === choiceTwo) {
      // win conditions
      console.log('win')
      choiceOne = ''
      choiceTwo = ''
    } else {
      console.log('no match')
      // write a query selector or get elements by class and pass in ChoiceOne[0] and remove anything w/ class "ladybug/choiceOne" and toggle it off, same for choiceTwo, that will flip them back over
      choiceOne = ''
      choiceTwo = ''
    }
  } else {
    choiceOne = apple
  }
}

// let choiceOne = banana
// let choiceTwo = ''
// if choiceOne.length > 0
// if choiceTwo.length >0
// find id and give it an ! and it will supersede
/////////////function Update Score, when player makes a match the scoreboard updates////////////////////
let scoreBoard = document.querySelector('.scoreboard')
let score = 0
// let image = document.querySelector(img.src)

// upDateScore = () => {
//   if ( === ) {
//     for (let i = 0; i < matches.length; i++) {
//       score = score += 2
//     }
//     scoreBoard.innerHTML = `${score}`
//   }
// }
// console.log('This works' + upDateScore())

/////////////function play again resets board////////////////////

const gameBoard = document.querySelectorAll('board')
const startButton = document.getElementById('play')

// const resetButton = document.querySelector('.reset')

///////////function PlayerTurn/////////////////////

///////////function Flip card, player flips card to reveal image//////////////////////
const card = document.querySelectorAll('.card')
let banana
const flipCard = (e) => {
  banana = e.target.getAttribute('banana')
  e.target.classList.toggle(banana)
  console.log('hello!' + banana)
  checkMatch(banana, e.target) //e.target represents target element clicked
}

card.forEach((card) => {
  card.addEventListener('click', flipCard)
})

////////////////////////////function checkMatch///////////////////////////////////////
let choiceOne = ''
let elementOne = ''
let choiceTwo = ''
let elementTwo = ''
let scoreBoard = document.querySelector('.scoreboard')
let score = 0

const checkMatch = (apple, element) => {
  console.log(choiceOne)
  if (choiceOne.length > 0) {
    //if there is something in there
    choiceTwo = apple
    elementTwo = element //keeps track of element that was clicked
    if (choiceOne === choiceTwo) {
      // win conditions // update score here
      console.log('win')
      choiceOne = ''
      elementOne = ''
      choiceTwo = '' //resets choices back to empty
      elementTwo = ''
    } else {
      console.log('no match')
      //no match, try again
      // document.querySelector.choiceOne.removeAttribute('banana')
      const removeAttr = () => {
        console.log(elementOne)
        console.log(elementTwo)
        elementOne.classList.remove(choiceOne)
        elementTwo.classList.remove(choiceTwo)
        choiceOne = ''
        elementOne = ''
        choiceTwo = ''
        elementTwo = ''
      }
      setTimeout(removeAttr, 2000)
    }
  } else {
    choiceOne = apple
    elementOne = element //First choice, if they haven't made one
  }
}

/////////////function play again resets board////////////////////

const gameBoard = document.querySelectorAll('board')
const startButton = document.getElementById('play')

// const resetButton = document.querySelector('.reset')

///////////function Flip card, player flips card to reveal image//////////////////////
const card = document.querySelectorAll('.card')
let picture
const flipCard = (e) => {
  picture = e.target.getAttribute('picture')
  e.target.classList.toggle(picture)
  console.log('hello!' + picture)
  checkMatch(picture, e.target) //e.target represents target element clicked
}

card.forEach((card) => {
  card.addEventListener('click', flipCard)
})

////////////////////////////function checkMatch///////////////////////////////////////
let choiceOne = ''
let elementOne = ''
let choiceTwo = ''
let elementTwo = ''
let score = 0
let scoreBoard = document.querySelector('.scoreboard')

const checkMatch = (photo, element) => {
  console.log(choiceOne)
  if (choiceOne.length > 0) {
    //if there is something in there
    choiceTwo = photo
    elementTwo = element //keeps track of element that was clicked
    if (choiceOne === choiceTwo) {
      scoreBoard.innerHTML = 'Your Matches <br/><br/>' + score + 1
      // win conditions // update score here
      console.log('win')
      choiceOne = ''
      elementOne = ''
      choiceTwo = '' //resets choices back to empty
      elementTwo = ''
    } else {
      console.log('no match')
      //no match, try again
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
    choiceOne = photo
    elementOne = element //First choice, if they haven't made one
  }
}

/////////////function play again resets board////////////////////

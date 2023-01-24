const gameBoard = document.querySelectorAll('board')
const startButton = document.getElementById('play')

// const resetButton = document.querySelector('.reset')

///////////function Flip card, player flips card to reveal image//////////////////////
const card = document.querySelectorAll('.card')
let picture
const flipCard = (e) => {
  picture = e.target.getAttribute('picture')
  e.target.classList.toggle(picture)
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
let matches = 0
let scoreBoard = document.querySelector('.scoreboard')
// scoreBoard.innerText = `${score}`

const checkMatch = (photo, element) => {
  if (choiceOne.length > 0) {
    //if there is something in there
    choiceTwo = photo
    elementTwo = element //keeps track of element that was clicked
    if (choiceOne === choiceTwo) {
      document.querySelector('h2').innerHTML = 'Great job, you made a match!'
      scoreBoard.innerHTML = `Your Matches<br/><br/> ${(matches += 1)}`
      // win conditions // update score here
      choiceOne = ''
      elementOne = ''
      choiceTwo = '' //resets choices back to empty
      elementTwo = ''
      if (matches === 1)
        alert('You did it, you put the garden back together again!')
    } else {
      document.querySelector('h3').innerHTML = 'No match, try again!'
      const removeAttr = () => {
        elementOne.classList.remove(choiceOne)
        elementTwo.classList.remove(choiceTwo)
        choiceOne = ''
        elementOne = ''
        choiceTwo = ''
        elementTwo = ''
      }
      setTimeout(removeAttr, 3000)
    }
  } else {
    choiceOne = photo
    elementOne = element //First choice, if they haven't made one
  }
}

/////////////function play again resets board////////////////////

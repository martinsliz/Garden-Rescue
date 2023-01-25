const gameBoard = document.querySelectorAll('board')
const playButton = document.getElementsByClassName('play')
const resetButton = document.getElementById('reset')

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
      choiceTwo = ''
      elementTwo = ''
      if (matches === 1) {
        setTimeout(
          () => alert('You did it, you put the garden back together again!'),
          3000
        )
      }
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
    elementOne = element
  }
}

/////////////play again resets board////////////////////
resetButton.addEventListener('click', () => location.reload())

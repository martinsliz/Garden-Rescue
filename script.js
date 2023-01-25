const gameBoard = document.querySelectorAll('board')
const playButton = document.getElementsByClassName('play')
const resetButton = document.getElementById('reset')

///////////function Flip card, player flips card to reveal image//////////////////////
const card = document.querySelectorAll('.card')
let picture
let element

const flipCard = (e) => {
  picture = e.target.getAttribute('picture')
  e.target.classList.toggle(picture)
  e.target.removeEventListener('click', flipCard)
  checkMatch(picture, e.target)
}

card.forEach((card) => {
  card.addEventListener('click', flipCard)
})

let choiceOne = ''
let elementOne = ''
let choiceTwo = ''
let elementTwo = ''
let matches = 0
let scoreBoard = document.querySelector('.scoreboard')

////////////////////////////function checkMatch///////////////////////////////////////

const checkMatch = (photo, element) => {
  console.log(photo)
  console.log(element)
  if (choiceOne.length > 0) {
    choiceTwo = photo
    elementTwo = element
    if (choiceOne === choiceTwo) {
      setTimeout(() => alert('Great job, you made a match!'), 900)
      scoreBoard.innerHTML = `Your Matches<br/><br/> ${(matches += 1)}`

      choiceOne = ''
      elementOne = ''
      choiceTwo = ''
      elementTwo = ''
      if (matches === 2) {
        setTimeout(
          () => alert('You did it, you put the garden back together again!'),
          3500
        )
      }
    } else {
      const removeAttr = () => {
        setTimeout(() => alert('No match, try again!'), 850)
        elementOne.classList.remove(choiceOne)
        elementTwo.classList.remove(choiceTwo)
        elementOne.addEventListener('click', flipCard)
        elementTwo.addEventListener('click', flipCard)
        choiceOne = ''
        elementOne = ''
        choiceTwo = ''
        elementTwo = ''
      }
      setTimeout(removeAttr, 2000)
    }
  } else {
    choiceOne = photo
    elementOne = element
  }
}

/////////////play again resets board////////////////////
resetButton.addEventListener('click', () => location.reload())

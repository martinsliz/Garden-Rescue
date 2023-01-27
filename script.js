const gameBoard = document.querySelectorAll('board')
const playButton = document.querySelector('button')
const resetButton = document.getElementById('reset')
const card = document.querySelectorAll('.card')
let picture
let element

// Player flips card to reveal image

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

// Compare cards for matches, tallying number of matches in background

const checkMatch = (photo, element) => {
  if (choiceOne.length > 0) {
    choiceTwo = photo
    elementTwo = element
    if (choiceOne === choiceTwo) {
      // setTimeout(() => alert('Great job, you made a match!'), 900)
      matches = matches += 1
      choiceOne = ''
      elementOne = ''
      choiceTwo = ''
      elementTwo = ''
      if (matches === 1) {
        setTimeout(() => alert('Great job, your first match!'), 800)
      }
      if (matches === 2) {
        setTimeout(() => alert('Another match!'), 900)
      }
      if (matches === 3) {
        setTimeout(() => alert('Excellent!'), 750)
      }
      if (matches === 4) {
        setTimeout(() => alert('Almost there, keep it up!'), 750)
      }
      if (matches === 5) {
        setTimeout(() => alert("One more, you've got this!"), 800)
      }
      if (matches === 6) {
        setTimeout(
          () =>
            alert(
              'You did it!! Thanks to you the garden is in tip-top shape again!'
            ),
          1500
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
      setTimeout(removeAttr, 1500)
    }
  } else {
    choiceOne = photo
    elementOne = element
  }
}

// Board reset
resetButton.addEventListener('click', () => location.reload())

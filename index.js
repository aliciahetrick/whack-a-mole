//

const hole = document.createElement('img')
hole.src = 'images/hole.png'

const mole = document.createElement('img')
mole.src = 'images/mole.png'

///////////////////////////

hole.style.width = '20%'
hole.style.marginBottom = '2em'

const moleStyle = {
  maxWidth: '100px',
  display: 'flex',
  // border: '1px solid black',
  marginBottom: '2em',
}

for (const property in moleStyle) {
  mole.style[property] = moleStyle[property]
}

////////////////////

let startButton = document.querySelector('.start-button')
startButton.addEventListener('click', function () {
  start()
  startButton.textContent = 'WHACK SOME MOLES'
})

function start() {
  addMole()
}

//creating a random number between min and max
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//selecting the grid
const grid = document.querySelector('.hole-image-grid')

function addMole() {
  //remove previous round's holes and mole

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }
  removeAllChildNodes(grid)

  //create new hole grid with random mole

  let randomToNine = randomIntFromInterval(1, 9)
  console.log(randomToNine)

  for (let i = 1; i < randomToNine + 1; i++) {
    const grid = document.querySelector('.hole-image-grid')
    let hole = document.createElement('img')
    hole.src = 'images/hole.png'
    grid.append(hole)
    hole.style.maxWidth = '100px'
    hole.style.marginBottom = '2em'
    hole.style.flex = '0 0 33.333333%'
  }

  grid.append(mole)

  for (let i = 1; i < 9 - randomToNine; i++) {
    const newHole = document.createElement('img')
    newHole.src = 'images/hole.png'
    grid.append(newHole)
    newHole.style.maxWidth = '100px'
    newHole.style.marginBottom = '2em'
    newHole.style.flex = '0 0 33.333333%'
  }
}

mole.addEventListener('click', function () {
  addScore()
  startButton.textContent = 'KEEP GOING'
  addMole()
})

function addScore() {
  let score = document.querySelector('.score')
  let value = score.innerText
  value++
  score.innerText = value
}

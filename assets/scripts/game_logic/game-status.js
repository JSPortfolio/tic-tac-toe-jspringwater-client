const store = require('../store.js')


let currentPlayer = 'X'

const nextTurnUI = function () {

  if (currentPlayer === 'X')
  {
    currentPlayer = 'O'
  }

  else if (currentPlayer === 'O')
  {
    currentPlayer = 'X'
  }

  $('#player-turn').html('<h1 class="tilePlaced">' + currentPlayer + '</h1>')
}

const checkForWin = function () {
  for (let x = 0; x < 3; x++)
  {
    if (store.game.cells[x] === currentPlayer &&
        store.game.cells[x] === store.game.cells[x + 3] &&
        store.game.cells[x + 3] === store.game.cells[x + 6])
    {
      return true
    }
  }

  let y = 0

  while (y < 9)
  {
    if (store.game.cells[y] === currentPlayer &&
        store.game.cells[y] === store.game.cells[y + 1] &&
        store.game.cells[y + 1] === store.game.cells[y + 2])
    {
      return true
    }

    else
    {
      y += 3
    }
  }

  let z = 0

  if (store.game.cells[z] === currentPlayer &&
      store.game.cells[z] === store.game.cells[z + 4] &&
      store.game.cells[z + 4] === store.game.cells[z + 8])
  {
    return true
  }

  z += 2

  if (store.game.cells[z] === currentPlayer &&
      store.game.cells[z] === store.game.cells[z + 2] &&
      store.game.cells[z + 2] === store.game.cells[z + 4])
  {
    return true
  }

  z+=1

}

const checkForTie = function () {
  let spacesFIlled = 0

  store.game.cells.forEach(element => {if (element === 'X' || element === 'O') { spacesFIlled++} })

  if (spacesFIlled === 9 && store.game.over !== true)
  {
    return true
  }
}


const currentPlayerUI = function () {
  return currentPlayer
}

const currentPlayerUISet = function (playerVal) {

  currentPlayer = playerVal
}


module.exports = {

  nextTurnUI,

  checkForWin,

  currentPlayerUI,

  currentPlayerUISet,

  checkForTie
}

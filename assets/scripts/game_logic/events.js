'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const store = require('../store.js')

const api = require('./api.js')

const ui = require('./ui.js')

let currentPlayer = 'X'

let gameOver = false

const onCreateGame = function (event) {
  event.preventDefault()

  console.log('STARTING NEW GAME...')

  api.createGame()

    .then(ui.createGameSuccess)

    .catch(ui.createGameFail)
}


// ONPLACETILE: function that checks if cell in board is empty.
// if empty, function will call api and ui functions and update
// game in api and ui that corresponds to cell-clicked.
const onPlaceTile = function (event) {
  if (store.game.cells[event.target.id] === '')
  {
    $('#message').empty()
    $('#message').removeClass()

    api.placeTile(event.target.id, currentPlayer, gameOver)

      .then(ui.placeTileSuccess)

      .catch(ui.placeTileFail)

    $(`#${event.target.id}`).html('<h1 class="tilePlaced">' + currentPlayer + '</h1>')


    if (gameOver === false)
    {


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

    else if (gameOver === true)
    {
      $('#player-turn').html('<h1 class="tilePlaced">' + currentPlayer + ' IS WINNER!</h1>')
    }
  }

  else
  {
    $('#message').html(`<h1>YOU CANNOT PLACE A TILE THERE</h1>`)
    $('#message').removeClass()
    $('#message').addClass('failure')
  }
}

const onRetrieveGame = function () {
  api.retrieveGame()

    .then(ui.retrieveGameSucess)

    .catch(ui.retrieveGameFail)
}



const onResetGame = function () {
  api.createGame()

    .then(ui.resetGameSuccess)

    .catch(ui.resetGameFail)
}



//FIX THIS UP!!!
const onCheckGame = function () {
  let x = 0

  while (x < 7)
  {
    if (store.game.cells[x] > '' && store.game.cells[x] === store.game.cells[x + 1] &&
    store.game.cells[x + 1] === store.game.cells[x + 2])
    {
      console.log(currentPlayer + ' WINS!!')
    }

    x += 3
  }

  for (let y = 0; y < 3; y++)
  {
    if (store.game.cells[y] > '' && store.game.cells[y] === store.game.cells[y + 3] &&
    store.game.cells[y + 3] === store.game.cells[y + 6])
    {
      console.log(currentPlayer + 'WINS!!')
    }
  }

  let z = 0

  if (store.game.cells[z] > '' && store.game.cells[z] === store.game.cells[z + 4] &&
  store.game.cells[z + 4] === store.game.cells[z + 8])
  {
    console.log(currentPlayer + 'WINS!!')
  }

  z += 3

  if (store.game.cells[z] > '' && store.game.cells[z] === store.game.cells[z + 2] &&
  store.game.cells[z + 2] === store.game.cells[z + 4])
  {
    console.log(currentPlayer + 'WINS!!')
  }
}



const onShowStats = function () {

  console.log('SHOWING STATS...')

  api.showStats()

    .then(ui.showStatsSuccess)

    .catch(ui.showStatsFail)
}

module.exports = {
  onCreateGame,

  onPlaceTile,

  onResetGame,

  onRetrieveGame,

  onCheckGame,

  onShowStats
}

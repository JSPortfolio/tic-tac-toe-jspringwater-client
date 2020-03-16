'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

let currentPlayer = 'X'

let gameOver = false

const onCreateGame = function (event) {
  console.log('STARTING NEW GAME...')

  api.createGame()

    .then(ui.createGameSuccess)

    .catch(ui.createGameFail)
}

const playTileTest = function (event) {
  $(event.target).html('<h1 class="tilePlaced">' + currentPlayer + '</h1>')

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

    $('#playerTurn').html('<h1 class="tilePlaced">' + currentPlayer + '</h1>')

    console.log(event.target.id)
  }
}

const onPlaceTile = function (event) {
  $(event.target).html('<h1 class="tilePlaced">' + currentPlayer + '</h1>')

  if (gameOver === false)
  {


    api.placeTile(event.target.id, currentPlayer, gameOver)

      .then(ui.placeTileSuccess)

      .catch(ui.placeTileFail)

    if (currentPlayer === 'X')
    {
      currentPlayer = 'O'
    }

    else if (currentPlayer === 'O')
    {
      currentPlayer = 'X'
    }
  }

  $('#playerTurn').html('<h1 class="tilePlaced">' + currentPlayer + '</h1>')
}

module.exports = {
  onCreateGame,

  playTileTest,

  onPlaceTile
}

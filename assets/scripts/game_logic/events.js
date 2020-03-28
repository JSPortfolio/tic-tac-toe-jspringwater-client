'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const store = require('../store.js')

const api = require('./api.js')

const ui = require('./ui.js')

const gameStatus = require('./game-status.js')

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
  if (store.game.cells[event.target.id] === '' && store.game.over === false)
  {
    $(event.target).html('<h1 class="tilePlaced">' + gameStatus.currentPlayerUI() + '</h1>')

    $('#message').empty()
    $('#message').removeClass()

    api.placeTile(event.target.id, gameStatus.currentPlayerUI())

      .then(ui.placeTileSuccess)

      .catch(ui.placeTileFail)
  }

  else if (store.game.cells[event.target.id] !== '' && store.game.over === false)
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

  onShowStats
}

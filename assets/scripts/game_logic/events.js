'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const store = require('../store.js')

const api = require('./api.js')

const ui = require('./ui.js')

const gameStatus = require('./game-status.js')



// ONCREATEGAME: uses api and ui functions for creating and saving a new game.
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



// ON SHOWSTATS: function that uses the showStats api function
// to retrieve, organize and show information about all the games a
// user played.
const onShowStats = function () {

  console.log('SHOWING STATS...')

  api.showStats()

    .then(ui.showStatsSuccess)

    .catch(ui.showStatsFail)
}



module.exports = {
  onCreateGame,

  onPlaceTile,

  onShowStats
}

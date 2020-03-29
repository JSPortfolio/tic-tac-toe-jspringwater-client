'use strict'

const store = require('../store.js')

const gameStatus = require('./game-status')

// CREATE GAME SUCCESS/FAIL UI: Functions to set
// message to UI to show success or failure of
// createGame api.js function
const createGameSuccess = function (data) {

  store.game = data.game

  console.log('New Game Created: ', data)

  gameStatus.currentPlayerUISet('X')

  $('#stats-view').hide()
  $('#change-password-view').hide()
  $('#game-view').show()

  for (let i = 0; i < store.game.cells.length; i++)
  {
    $(`#${i}`).html('')
  }
}



const createGameFail = function (error) {
  console.log('Failed to create new game: ', error)
}




// PLACE TILE SUCCESS/FAIL UI: Functions to
// set message to UI to show success or
// failure of placeTile api.js function
const placeTileSuccess = function (data) {
  store.game = data.game

  console.log('Player made a move: ', data)

  console.log(gameStatus.currentPlayerUI())

  if (gameStatus.checkForWin() === true)
  {
    $('#message').html(`<h1 class='tilePlaced'>${gameStatus.currentPlayerUI()} is the WINNER!</h1>`)
    $('#message').addClass('success')

    store.game.over = true
  }

  else if (gameStatus.checkForTie() === true)
  {
    $('#message').html(`<h1 class='tilePlaced'>NOBODY WINS! TIE!!!</h1>`)
    $('#message').addClass('success')

    store.game.over = true
  }

  else
  {
    gameStatus.nextTurnUI()

    console.log(gameStatus.currentPlayerUI())
  }

}



const placeTileFail = function (error) {
  console.log('Failed to move: ', error)
}



// SHOW STATS SUCCESS/FAIL UI: Functions to set message to
// UI to show success or failure of showStats api.js function
const showStatsSuccess = function (data) {
  console.log('Archive was found: ', data)

  $('#stats-view').show()
  $('#change-password-view').hide()
  $('#game-view').hide()

  $('#stats-view').html(`<h1 class=tilePlaced>GAMES PLAYED: ${data.games.length}</h1>`)
}



const showStatsFail = function (error) {
  console.log('stats were not found: ', error)
}

module.exports = {
  createGameSuccess,

  createGameFail,

  placeTileSuccess,

  placeTileFail,

  showStatsSuccess,

  showStatsFail
}

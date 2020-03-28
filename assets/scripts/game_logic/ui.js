'use strict'

const store = require('../store.js')

const gameStatus = require('./game-status')

// CREATE GAME SUCCESS/FAIL UI: Functions to set
// message to UI to show success or failure of
// createGame api.js function
const createGameSuccess = function (data) {

  store.game = data.game

  console.log('New Game Created: ', data)

  $('#logged-in-menu-page').removeClass()
  $('#logged-in-menu-page').addClass('invisible')
  $('#game-page').removeClass()
  $('#game-page').addClass('visible')
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



const retrieveGameSucess = function (data) {
  console.log('game is retrieved: ', data)
}



const retrieveGameFail = function (error) {
  console.log('game is not retrieved: ', error)
}



const resetGameSuccess = function () {
  console.log('Game is Reset')

  for (let i = 0; i < store.game.cells.length; i++)
  {
    $(`#${i}`).html('')
  }
}



const resetGameFail = function () {
  console.log('Game is NOT reset')
}

// SHOW STATS SUCCESS/FAIL UI: Functions to set message to
// UI to show success or failure of showStats api.js function
const showStatsSuccess = function (data) {
  console.log('Archive was found: ', data)

  $('#message').html(`<h1>GAMES PLAYED: ${data.games.length}</h1>`)
  $('#message').removeClass()
  $('#message').addClass('success')
}

const showStatsFail = function (error) {
  console.log('Archive was found: ', error)
}

module.exports = {
  createGameSuccess,

  createGameFail,

  placeTileSuccess,

  placeTileFail,

  retrieveGameSucess,

  retrieveGameFail,

  resetGameSuccess,

  resetGameFail,

  showStatsSuccess,

  showStatsFail
}

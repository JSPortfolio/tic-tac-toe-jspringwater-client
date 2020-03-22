'use strict'

const store = require('../store.js')

const eventsFile = require('./events.js')

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

const placeTileSuccess = function (data) {
  store.game = data.game

  console.log('Player made a move: ', data)

  eventsFile.onCheckGame()
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

module.exports = {
  createGameSuccess,

  createGameFail,

  placeTileSuccess,

  placeTileFail,

  retrieveGameSucess,

  retrieveGameFail,

  resetGameSuccess,

  resetGameFail
}

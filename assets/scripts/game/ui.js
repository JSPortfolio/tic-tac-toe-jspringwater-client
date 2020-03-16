'use strict'

const store = require('../store.js')

const createGameSuccess = function (data) {
  store.game = data.game

  console.log('New Game Created: ', data)
}

const createGameFail = function (error) {
  console.log('Failed to create new game: ', error)
}

const placeTileSuccess = function (data) {
  store.game = data.game

  console.log('Player made a move: ', data)
}

const placeTileFail = function (error) {
  console.log('Failed to move: ', error)
}

module.exports = {
  createGameSuccess,

  createGameFail,

  placeTileSuccess,

  placeTileFail
}

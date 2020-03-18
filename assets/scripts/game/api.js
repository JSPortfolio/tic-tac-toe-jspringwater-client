'use strict'

const config = require('../config.js')

const store = require('../store.js')

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + `/games`,

    method: 'POST',

    headers: {
      Authorization: 'Token token=' + store.user.token
    },

    data: data
  })
}

const placeTile = function (indexVal, playerVal, gameStatus) {
  return $.ajax({
    url: config.apiUrl + `games/${store.game.id}`,

    method: 'PATCH',

    headers: {
      Authorization: 'Token token=' + store.user.token
    },

    data: {
      game: {
        cell: {
          index: indexVal,

          value: playerVal
        },

        over: gameStatus
      }
    }
  })
}

const retrieveGame = function (data) {
  return $.ajax({
    url: config.apiUrl + `games/${store.game.id}`,

    method: 'GET',

    headers: {
      Authorization: 'Token token=' + store.user.token
    },

    data: data
  })
}


module.exports = {
  createGame,

  placeTile,

  retrieveGame
}

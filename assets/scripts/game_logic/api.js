'use strict'

const config = require('../config.js')

const store = require('../store.js')

// CREATEGAME: API function to create ('post') new game object
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

// PLACETILE: API function to update game object
const placeTile = function (indexVal, playerVal, gameStatus) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,

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

// SHOWSTATS: API function to retrieve all game objects created
const showStats = function (data) {
  return $.ajax({
    url: config.apiUrl + `/games`,

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

  showStats
}

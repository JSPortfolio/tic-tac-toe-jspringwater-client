'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./authentication/events.js')

const gameEvents = require('./game_logic/events.js')

const config = require('./config.js')

const store = require('./store.js')

let currentPlayer = 'X'

$(() => {
  $('#logged-in-menu').hide()

  $('#game-view').hide()

  $('#stats-view').hide()

  $('#change-password-view').hide()

  $('#player-turn').html('<h1 class=tilePlaced>' + currentPlayer + '</h1>')

  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#show-change-password').on('click', authEvents.showChangePassword)

  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#sign-out').on('click', authEvents.onSignOut)

  $('#new-game').on('click', gameEvents.onCreateGame)

  $('#show-stats').on('click', gameEvents.onShowStats)

  $('div .col-sm').on('click', gameEvents.onPlaceTile)
})

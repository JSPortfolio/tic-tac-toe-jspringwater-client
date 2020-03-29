'use strict'

const store = require('../store.js')

const gameStatus = require('./game-status')

// CREATE GAME SUCCESS/FAIL UI: Functions to set
// message to UI to show success or failure of
// createGame api.js function
const createGameSuccess = function (data) {

  store.game = data.game

  gameStatus.currentPlayerUISet('X')

  $('#stats-view').hide()
  $('#change-password-view').hide()
  $('#game-view').show()

  $('#message').removeClass()
  $('#message').empty(

  )
  for (let i = 0; i < store.game.cells.length; i++)
  {
    $(`#${i}`).html('')
  }
}



const createGameFail = function (error) {
  console.log('FAILURE TO START GAME: ', error)
}




// PLACE TILE SUCCESS/FAIL UI: Functions to
// set message to UI to show success or
// failure of placeTile api.js function
const placeTileSuccess = function (data) {

  // update game
  store.game = data.game

  // Else/if statement to check for winner or tie or just switch-players

  // Check for winner
  if (gameStatus.checkForWin() === true)
  {
    $('#message').html(`<h1>${gameStatus.currentPlayerUI()} is the WINNER!</h1>`)
    $('#message').addClass('success')

    store.game.over = true
  }

  // Check for tie
  else if (gameStatus.checkForTie() === true)
  {
    $('#message').html(`<h1>NOBODY WINS! TIE!!!</h1>`)
    $('#message').addClass('success')

    store.game.over = true
  }

  // Switch to next player if no winner or tied game
  else
  {
    gameStatus.nextTurnUI()

    console.log(gameStatus.currentPlayerUI())
  }

}



const placeTileFail = function (error) {
  console.log('FAILURE TO MAKE MOVE: ', error)
}



// SHOW STATS SUCCESS/FAIL UI: Functions to set message to
// UI to show success or failure of showStats api.js function
const showStatsSuccess = function (data) {

  let incompleteGames = 0

  let completeGames = 0

  // Count completed/incompleted games user played
  for (let i = 0; i < data.games.length; i++)
  {
    if (data.games[i].over === false)
    {
      incompleteGames += 1
    }

    else if (data.games[i].over === true)
    {
      completeGames += 1
    }
  }

  $('#stats-view').show()
  $('#change-password-view').hide()
  $('#game-view').hide()

  $('#stats-view').html(`<h1 class=tilePlaced>USER: ${store.user.email} </h1>
                         <h2 class=tilePlaced>GAMES PLAYED: ${data.games.length} </h2>
                         <h2 class=tilePlaced>GAMES NOT COMPLETED: ${incompleteGames} </h2>
                         <h2 class=tilePlaced>GAMES COMPLETED: ${completeGames} </h2>`)
}



const showStatsFail = function (error) {
  console.log('FAILURE TO FIND STATS: ', error)
}

module.exports = {
  createGameSuccess,

  createGameFail,

  placeTileSuccess,

  placeTileFail,

  showStatsSuccess,

  showStatsFail
}

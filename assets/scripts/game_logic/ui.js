'use strict'

const store = require('../store.js')

const gameStatus = require('./game-status')

// CREATE GAME SUCCESS/FAIL UI: Functions to set
// message to UI to show success or failure of
// createGame api.js function
const createGameSuccess = function (data) {

  store.game = data.game

  gameStatus.currentPlayerUISet('X')

  $('#player-turn').html('<h1 class="tilePlaced">' + gameStatus.currentPlayerUI() + '</h1>')

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

    data.game.over = true

    console.log(store.game)
  }

  // Check for tie
  else if (gameStatus.checkForTie() === true)
  {
    $('#message').html(`<h1>NOBODY WINS! TIE!!!</h1>`)
    $('#message').addClass('success')

    data.game.over = true
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

  let gamesXWon = 0

  let gamesOWon = 0

  let tiedGames = 0

  console.log(data.games)
  // Count completed/incompleted games user played
  for (let i = 0; i < data.games.length; i++)
  {
    store.game = data.games[i]

    if (gameStatus.checkWinner() === 'Xwinner')
    {
      completeGames += 1

      gamesXWon += 1
    }

    else if (gameStatus.checkWinner() === 'Owinner')
    {
      completeGames += 1

      gamesOWon += 1
    }

    else if (gameStatus.checkForTie() === true)
    {
      tiedGames += 1
    }

    else
    {
      incompleteGames += 1
    }
  }

  $('#stats-view').show()
  $('#change-password-view').hide()
  $('#game-view').hide()

  $('#stats-view').html(`<h1 class=tilePlaced>USER: ${store.user.email}</h1>
                         <h2>GAMES PLAYED: ${data.games.length}</h2>
                         <h2>GAMES COMPLETED: ${completeGames}</h2>
                         <h2>GAMES X WON: ${gamesXWon} </h2>
                         <h2>GAMES O WON: ${gamesOWon} </h2>
                         <h2>GAMES TIED: ${tiedGames} </h2>
                         <h2>GAMES NOT COMPLETED: ${incompleteGames} </h2>`)

  $('#message').removeClass()
  $('#message').empty()
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
